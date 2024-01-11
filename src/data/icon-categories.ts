import { Icons } from "@/icons";

export const categories: {
    [key: string]: {
        name: string,
        icon: Icons,
        items: Icons[]
    }
} = {
    "arrows": {
        "name": "Arrows",
        "icon": Icons.ARROW_RIGHT,
        "items": [
            Icons.ARROW_UP,
            Icons.ARROW_DOWN,
            Icons.ARROW_LEFT,
            Icons.ARROW_RIGHT,
            Icons.ARROW_UP_RIGHT,
            Icons.ARROW_UP_LEFT,
            Icons.ARROW_DOWN_RIGHT,
            Icons.ARROW_DOWN_LEFT,
            Icons.ARROW_ROTATE_LEFT,
            Icons.ARROW_ROTATE_RIGHT,
            Icons.ARROW_UPLOAD,
            Icons.ARROW_DOWNLOAD,
            Icons.ARROW_EXPORT,
            Icons.ARROW_CORNER_LEFT,
            Icons.ARROW_CORNER_RIGHT,
            Icons.CHEVRON_DOWN,
            Icons.CHEVRON_LEFT,
            Icons.CHEVRON_RIGHT,
            Icons.CHEVRON_UP,
            Icons.RECYCLE
        ]
    },
    "accessibility": {
        "name": "Accessibility",
        "icon": Icons.ACCESSIBILITY,
        "items": [
            Icons.ACCESSIBILITY,
            Icons.ACCESSIBILITY_CIRCLE,
            Icons.WHEELCHAIR,
            Icons.WHEELCHAIR2,
        ]
    },
    "shapes": {
        "name": "Shapes",
        "icon": Icons.SHAPE_SQUARE,
        "items": [
            Icons.SHAPE_SQUARE,
            Icons.SHAPE_SQUARE_FILLED,
            Icons.SHAPE_CIRCLE,
            Icons.SHAPE_CIRCLE_FILLED,
            Icons.SHAPE_TRIANGLE,
            Icons.SHAPE_X,
            Icons.SHAPE_X_FILLED,
            Icons.SHAPE_HEXAGON,
            Icons.SHAPE_PENTAGON,
        ]
    },
    "weather": {
        "name": "Weather",
        "icon": Icons.CLOUD,
        "items": [
            Icons.CLOUD,
            Icons.CLOUD_RAIN,
            Icons.SUN,
            Icons.MOON
        ]
    },
    "text": {
        "name": "Text",
        "icon": Icons.TEXT_ALIGN_LEFT,
        "items": [
            Icons.TEXT_ALIGN_CENTER,
            Icons.TEXT_ALIGN_JUSTIFY,
            Icons.TEXT_ALIGN_LEFT,
            Icons.TEXT_ALIGN_RIGHT,
            Icons.TEXT_ALIGN_JUSTIFY_CENTER,
            Icons.TEXT_ALIGN_JUSTIFY_LEFT,
            Icons.TEXT_ALIGN_JUSTIFY_RIGHT,
        ]
    }, "document": {
        "name": "Document",
        "icon": Icons.DOCUMENT,
        "items": [
            Icons.DOCUMENT,
            Icons.DOCUMENT_TEXT,
            Icons.DOCUMENTS,
            Icons.DOCUMENT_ADD,
            Icons.DOCUMENT_ADD2,
            Icons.DOCUMENT_EDIT,
            Icons.DOCUMENT_DELETE,
            Icons.DOCUMENT_DELETE2,
            Icons.DOCUMENT_CHECK,
            Icons.DOCUMENT_CHECK2,
            Icons.FOLDER
        ]
    },
    "media": {
        "name": "Media",
        "icon": Icons.IMAGE,
        "items": [
            Icons.IMAGE,
            Icons.DESKTOP,
            Icons.MOBILE,
            Icons.LAPTOP,
            Icons.TABLET,
            Icons.VIDEO_CAMERA,
            Icons.PRINT,
            Icons.VOLUME_OFF,
            Icons.VOLUME_ON,
            Icons.CAMERA,
            Icons.FILM
        ]
    },
    "interface": {
        "name": "Interface",
        "icon": Icons.BELL,
        "items": [
            Icons.CLOSE,
            Icons.CLOSE_CIRCLE,
            Icons.BELL,
            Icons.CLIPBOARD,
            Icons.PAPERCLIP,
            Icons.EDIT,
            Icons.ERASE,
            Icons.FILTER,
            Icons.FLAG,
            Icons.VISIBLE,
            Icons.INVISIBLE,
            Icons.MAP,
            Icons.LOCATION_MARKER,
            Icons.PLUS,
            Icons.PLUS_CIRCLE,
            Icons.MINUS,
            Icons.MINUS_CIRCLE,
            Icons.GRID,
            Icons.HOME,
            Icons.LOCKED,
            Icons.UNLOCKED,
            Icons.CHECK,
            Icons.CHECK_CIRCLE,
            Icons.MORE,
            Icons.WINDOW_FRAME,
            Icons.WINDOW_FULL,
            Icons.TRASH,
            Icons.HELP,
            Icons.USER,
            Icons.USERS,
            Icons.USER_ADD,
            Icons.USER_DELETE,
            Icons.USER_TEAM

        ]
    }, "symbols": {
        "name": "Symbols",
        "icon": Icons.MALE_FEMALE,
        "items": [
            Icons.MALE,
            Icons.FEMALE,
            Icons.MALE_FEMALE,
            Icons.MALE_SYMBOL,
            Icons.FEMALE_SYMBOL,
            Icons.UNISEX,
            Icons.HEART,
            Icons.HEART_BROKEN,
            Icons.RECYCLE

        ]
    },
    "tile": {
        "name": "Tile",
        "icon": Icons.TILE,
        "items": [  
            Icons.TILE,
            Icons.TILE_CLOSE,
            Icons.TILE_EDIT,
            Icons.TILE_PLUS
        ]
    }

}
