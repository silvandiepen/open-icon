import { Icons } from "@/icons";


export enum IconCategory {
    ARROWS = "arrows",
    ACCESSIBILITY = "accessibility",
    SHAPES = "shapes",
    ANIMALS = "animals",
    MEDIA = "media",
    TEXT = "text",
    DOCUMENT = "document",
    INTERFACE = "interface",
    SYMBOL = "symbol",
    TILE = "tile",
    WEATHER = "weather",
}
export enum IconTag {
        TEXT = "text",
        LETTERS = "letters",
        CIRCLE ='circle',
        PERSON = "person",
        BOOK = "book",
        CLOCK = "clock",
        APP = "app",
        ADD = "add",
        PLUS = "plus",
        REMOVE = "remove",
        DELETE = "delete",
        MINUS = "minus",
        X = "x",
        LEFT  = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        BOTTOM = "bottom",
        TOP = "top",
        ARROW = "arrow",
        PREVIOUS = "previous",
        NEXT = "next",
        FORWARD = "forward",
        BACKWARD = "backward",
        OUT = "out",
        IN = "in",
        EXPORT = "export",
        IMPORT = "import",
        DOWNLOAD = "download",
        UPLOAD = "upload",
}
export interface IconMeta {
    [key: Icons]: {
        name: string,
        category: IconCategory[],
        tags: IconTag[]
    }
}

export const meta:IconMeta = {
    [Icons.ABC]: {
        name: "ABC",
        category: [IconCategory.TEXT],
        tags: [IconTag.LETTERS, IconTag.TEXT],
    },
    [Icons.ACCESSIBILITY_CIRCLE]: {
        name: "Accessibility Circle",
        category: [IconCategory.ACCESSIBILITY, IconCategory.SYMBOL],
        tags: [IconTag.PERSON, IconTag.CIRCLE],
    },
    [Icons.ACCESSIBILITY]: {
        name: "Accessibility",
        category: [IconCategory.ACCESSIBILITY, IconCategory.SYMBOL],
        tags: [IconTag.PERSON],
    },
    [Icons.ADDRESS_BOOOK]: {
        name: "Address Book",
        category: [IconCategory.INTERFACE],
        tags: [IconTag.BOOK],
    },
    [Icons.ALARM]: {
        name: "Alarm",
        category: [IconCategory.INTERFACE],
        tags: [IconTag.CLOCK],
    },
    
    [Icons.APPS]: {
        name: "Apps",
        category: [IconCategory.INTERFACE],
        tags: [IconTag.APP],
    },
    
    [Icons.APPS_PLUS]: {
        name: "Apps+",
        category: [IconCategory.INTERFACE],
        tags: [IconTag.APP, IconTag.ADD, IconTag.PLUS],
    },
    [Icons.ARROW_CORNER_LEFT]: {
        name: "Arrow Corner Left",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW, IconTag.LEFT, IconTag.PREVIOUS, IconTag.BACKWARD],
    },
    [Icons.ARROW_CORNER_RIGHT]: {
        name: "Arrow Corner Right",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW, IconTag.RIGHT, IconTag.NEXT, IconTag.FORWARD],
    },
    [Icons.ARROW_DOWN_LEFT]: {
        name: "Arrow Down Left",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW, IconTag.DOWN, IconTag.LEFT, IconTag.BACKWARD],
    },
    [Icons.ARROW_DOWN_RIGHT]: {
        name: "Arrow Down Right",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW, IconTag.DOWN, IconTag.RIGHT, IconTag.FORWARD],
    },
    [Icons.ARROW_DOWN]: {
        name: "Arrow Down",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW, IconTag.DOWN, IconTag.BOTTOM],
    },
    [Icons.ARROW_EXPORT]: {
        name: "Arrow Export",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW,IconTag.UP, IconTag.OUT, IconTag.EXPORT],
    },
    [Icons.ARROW_DOWNLOAD]: {
        name: "Arrow Download",
        category: [IconCategory.ARROWS],
        tags: [IconTag.ARROW, IconTag.DOWN, IconTag.IN, IconTag.DOWNLOAD],
    },
    
    
}   