
import { Locale, LocaleConfig, LocaleState} from "./types";

export const flattenObject = (
  obj: Object,
  parentKey?: string
): { [key: string]: string } => {
  let result = {};

  Object.entries(obj).forEach(([key, value]) => {
    const _key = parentKey ? parentKey + "." + key : key;
    if (typeof value === "object") {
      result = { ...result, ...flattenObject(value, _key) };
    } else {
      //@ts-ignore
      result[_key] = value;
    }
  });

  return result;
};

export const replaceAll = (
  string: string,
  search: string,
  replace: string
): string => {
  return string.split(search).join(replace);
};

export const flatMessages = (
  values: LocaleConfig["messages"]
): LocaleState["messages"] => {
  const obj = {};

  Object.keys(values).forEach((key) => {
    // @ts-ignore
    obj[key] = flattenObject(values[key]);
  });

  return obj;
};

export const getInterpolations = (value: string): string[] => {
  const matches = value.match(/\{(.*?)\}/g);
  return matches?.map((str) => str.replace("{", "").replace("}", "")) || [];
};

export const browserLocale = (fallback: Locale, state: LocaleState) => {
  const userLang = navigator.language || (navigator as any).userLang;

  if (Object.values(state.locales).includes(userLang)) {
    return userLang;
  }
  const alternative = Object.values(state.locales).find(
    (value) => value.indexOf(userLang.slice(0, 2)) > -1
  );

  if (alternative) return alternative;

  return fallback;
};
export const splitMessages = (
  message: string
): [string, string] | [string, string, string] => {
  let split = message.split(" | ");
  if (split.length == 2) return [split[0], split[1]];
  else return [split[0], split[1], split[2]];
};

export const isString = (input:any):boolean=>{
  return typeof input == "string";
}