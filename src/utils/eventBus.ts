import mitt from "mitt";

export enum EventChannel {
  DATA = "data",
  UI = "ui",
  ACTION = "action",
}

export enum EventType {
  MENU_TOGGLE = "ui:menu:toggle",
}

export interface EventData {
  type: EventType | string;
  value: any;
}

export const eventBus = mitt();

