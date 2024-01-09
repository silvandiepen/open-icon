import {
    ArgsOutput,
    ContentOutput,
    LocaleState,
    KeyString,
    ObjectOutput,
  } from "./types";
  import {
    getInterpolations,
    isString,
    replaceAll,
    splitMessages,
  } from "./helpers";
  
  export const getObject = (obj: object, key: string) => {
    const keys = key.split(".");
  
    if (keys.length == 1) return (obj as any)[keys[0]];
    if (keys.length == 2) return (obj as any)[keys[0]][keys[1]];
    if (keys.length == 3) return (obj as any)[keys[0]][keys[1]][keys[3]];
  
    return {};
  };
  
  export const processObject = (
    key: string,
    state: LocaleState
  ): ObjectOutput => {
    let data = {};
    if (getObject(state.ogMessages[state.locale], key)) {
      data = getObject(state.ogMessages[state.locale], key);
    } else {
      data = {};
    }
  
    return {
      data,
    };
  };
  
  export const processContent = (
    key: string,
    state: LocaleState
  ): ContentOutput => {
    let msg: string;
  
    if (state.messages[state.locale].hasOwnProperty(key)) {
      msg = state.messages[state.locale][key];
    } else if (state.messages[state.fallbackLocale].hasOwnProperty(key)) {
      msg = state.messages[state.fallbackLocale][key];
    } else {
      msg = key;
    }
  
    if (!isString(msg)) {
      return {
        message: msg,
        hasPluralization: false,
        interpolate: [],
      };
    }
    return {
      message: msg,
      hasPluralization: (msg as string).includes(" | "),
      interpolate: getInterpolations(msg as string),
    };
  };
  
  export const processArguments = (...args: any[]): ArgsOutput => {
    let n: number | null = null;
    let arg = {};
  
    if (typeof args[0][0] == "number") {
      n = args[0][0];
    }
    if (typeof args[0][0] == "object") {
      arg = args[0][0];
    }
    if (typeof args[0][1] == "object") {
      arg = args[0][1];
    }
    return {
      n,
      ...arg,
    };
  };
  
  export const processInterpolations = (
    message: string,
    content: ContentOutput,
    args: ArgsOutput
  ): string => {
    if (!isString(message)) return message;
  
    if (!content.interpolate.length) return message;
    content.interpolate.forEach((str: string) => {
      if (args[str])
        message = replaceAll(message as string, `{${str}}`, args[str]);
      else message = replaceAll(message as string, `{${str}}`, "");
    });
  
    return message;
  };
  
  export const processPluralization = (
    message: string,
    content: ContentOutput,
    args: ArgsOutput
  ): string => {
    if (!content.hasPluralization) return content.message;
  
    let messages = splitMessages(message);
    if (args.n == null) return messages[0];
  
    switch (messages.length) {
      case 3:
        if (args.n < 1) return messages[0];
        if (args.n == 1) return messages[1];
        if (args.n > 1) return messages[2];
        return messages[2];
  
      default:
        if (args.n <= 1) return messages[0];
        else return messages[1];
    }
  };
  
  export const processMessage = (
    message: string | KeyString
  ): string  => {
    return (message as string).replace("\\", " \n");
  };