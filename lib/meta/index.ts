
    import { Icons } from "../icons/types";
    export * from "./categories";
    export * from "./tags";

    export interface IconMeta {
        description: string;
        category: string[];
        tag: string[];
        title: string;
    }
export const getMeta = async (icon: Icons):Promise<IconMeta | null>=> {
    switch(icon) {
        
        case Icons.ANIMAL_STEP:
            return (await import("./icon_animal-step.svg")).default;

        case Icons.BUTTERFLY:
            return (await import("./icon_butterfly.svg")).default;

        case Icons.CAT_HEAD:
            return (await import("./icon_cat-head.svg")).default;

        case Icons.CAT_HEAD2:
            return (await import("./icon_cat-head2.svg")).default;

        case Icons.CAT:
            return (await import("./icon_cat.svg")).default;

        case Icons.CAT2:
            return (await import("./icon_cat2.svg")).default;

        case Icons.CAT3:
            return (await import("./icon_cat3.svg")).default;

        case Icons.FISH:
            return (await import("./icon_fish.svg")).default;

        case Icons.FISH2:
            return (await import("./icon_fish2.svg")).default;

        case Icons.JELLYFISH:
            return (await import("./icon_jellyfish.svg")).default;

        case Icons.LOBSTER:
            return (await import("./icon_lobster.svg")).default;

        case Icons.PUFFERFISH:
            return (await import("./icon_pufferfish.svg")).default;

        case Icons.SEA_STAR:
            return (await import("./icon_sea-star.svg")).default;

        case Icons.SQUID:
            return (await import("./icon_squid.svg")).default;

        case Icons.STINGRAY:
            return (await import("./icon_stingray.svg")).default;

        case Icons.TURTLE:
            return (await import("./icon_turtle.svg")).default;

        case Icons.WHALE:
            return (await import("./icon_whale.svg")).default;

        case Icons.ICON24:
            return (await import("./icon-24.svg")).default;

        case Icons.ARROW_CORNER_DOWN:
            return (await import("./icon_arrow-corner-down.svg")).default;

        case Icons.ARROW_CORNER_LEFT:
            return (await import("./icon_arrow-corner-left.svg")).default;

        case Icons.ARROW_CORNER_RIGHT:
            return (await import("./icon_arrow-corner-right.svg")).default;

        case Icons.ARROW_CORNER_UP:
            return (await import("./icon_arrow-corner-up.svg")).default;

        case Icons.ARROW_DIAGONAL_BL_TR_STOP:
            return (await import("./icon_arrow-diagonal-bl-tr-stop.svg")).default;

        case Icons.ARROW_DIAGONAL_BR_TL_STOP:
            return (await import("./icon_arrow-diagonal-br-tl-stop.svg")).default;

        case Icons.ARROW_DIAGONAL_IN_LT_BR:
            return (await import("./icon_arrow-diagonal-in-lt-br.svg")).default;

        case Icons.ARROW_DIAGONAL_IN_TR_BL:
            return (await import("./icon_arrow-diagonal-in-tr-bl.svg")).default;

        case Icons.ARROW_DIAGONAL_TL_BR_SPLIT:
            return (await import("./icon_arrow-diagonal-tl-br-split.svg")).default;

        case Icons.ARROW_DIAGONAL_TL_BR_STOP:
            return (await import("./icon_arrow-diagonal-tl-br-stop.svg")).default;

        case Icons.ARROW_DIAGONAL_TL_BR:
            return (await import("./icon_arrow-diagonal-tl-br.svg")).default;

        case Icons.ARROW_DIAGONAL_TR_BL_SPLIT:
            return (await import("./icon_arrow-diagonal-tr-bl-split.svg")).default;

        case Icons.ARROW_DIAGONAL_TR_BL_STOP:
            return (await import("./icon_arrow-diagonal-tr-bl-stop.svg")).default;

        case Icons.ARROW_DIAGONAL_TR_BL:
            return (await import("./icon_arrow-diagonal-tr-bl.svg")).default;

        case Icons.ARROW_DOWN_COPY:
            return (await import("./icon_arrow-down copy.svg")).default;

        case Icons.ARROW_DOWN_LEFT:
            return (await import("./icon_arrow-down-left.svg")).default;

        case Icons.ARROW_DOWN_RIGHT:
            return (await import("./icon_arrow-down-right.svg")).default;

        case Icons.ARROW_DOWN:
            return (await import("./icon_arrow-down.svg")).default;

        case Icons.ARROW_DOWNLOAD:
            return (await import("./icon_arrow-download.svg")).default;

        case Icons.ARROW_HEADED_CORNER_DOWN:
            return (await import("./icon_arrow-headed-corner-down.svg")).default;

        case Icons.ARROW_HEADED_CORNER_LEFT:
            return (await import("./icon_arrow-headed-corner-left-.svg")).default;

        case Icons.ARROW_HEADED_CORNER_RIGHT:
            return (await import("./icon_arrow-headed-corner-right.svg")).default;

        case Icons.ARROW_HEADED_CORNER_UP:
            return (await import("./icon_arrow-headed-corner-up.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_BL_TR_STOP:
            return (await import("./icon_arrow-headed-diagonal-bl-tr-stop.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_BR_TL_STOP:
            return (await import("./icon_arrow-headed-diagonal-br-tl-stop.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_IN_LT_BR:
            return (await import("./icon_arrow-headed-diagonal-in-lt-br.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_IN_TR_BL:
            return (await import("./icon_arrow-headed-diagonal-in-tr-bl.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_TL_BR_SPLIT:
            return (await import("./icon_arrow-headed-diagonal-tl-br-split.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_TL_BR_STOP:
            return (await import("./icon_arrow-headed-diagonal-tl-br-stop.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_TL_BR:
            return (await import("./icon_arrow-headed-diagonal-tl-br.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_TR_BL_SPLIT:
            return (await import("./icon_arrow-headed-diagonal-tr-bl-split.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_TR_BL_STOP:
            return (await import("./icon_arrow-headed-diagonal-tr-bl-stop.svg")).default;

        case Icons.ARROW_HEADED_DIAGONAL_TR_BL:
            return (await import("./icon_arrow-headed-diagonal-tr-bl.svg")).default;

        case Icons.ARROW_HEADED_DOWN_LEFT:
            return (await import("./icon_arrow-headed-down-left.svg")).default;

        case Icons.ARROW_HEADED_DOWN_RIGHT:
            return (await import("./icon_arrow-headed-down-right.svg")).default;

        case Icons.ARROW_HEADED_DOWN_STOP:
            return (await import("./icon_arrow-headed-down-stop.svg")).default;

        case Icons.ARROW_HEADED_DOWN:
            return (await import("./icon_arrow-headed-down.svg")).default;

        case Icons.ARROW_HEADED_DOWNLOAD:
            return (await import("./icon_arrow-headed-download.svg")).default;

        case Icons.ARROW_HEADED_IN_CENTER:
            return (await import("./icon_arrow-headed-in-center.svg")).default;

        case Icons.ARROW_HEADED_IN_DIAGONAL:
            return (await import("./icon_arrow-headed-in-diagonal.svg")).default;

        case Icons.ARROW_HEADED_IN:
            return (await import("./icon_arrow-headed-in.svg")).default;

        case Icons.ARROW_HEADED_LEFT_RIGHT_SPLIT:
            return (await import("./icon_arrow-headed-left-right-split.svg")).default;

        case Icons.ARROW_HEADED_LEFT_RIGHT_STOP:
            return (await import("./icon_arrow-headed-left-right-stop.svg")).default;

        case Icons.ARROW_HEADED_LEFT_RIGHT:
            return (await import("./icon_arrow-headed-left-right.svg")).default;

        case Icons.ARROW_HEADED_LEFT_STOP:
            return (await import("./icon_arrow-headed-left-stop.svg")).default;

        case Icons.ARROW_HEADED_LEFT:
            return (await import("./icon_arrow-headed-left.svg")).default;

        case Icons.ARROW_HEADED_OUT_CENTER:
            return (await import("./icon_arrow-headed-out-center.svg")).default;

        case Icons.ARROW_HEADED_RELOAD_DOWN_UP:
            return (await import("./icon_arrow-headed-reload-down-up.svg")).default;

        case Icons.ARROW_HEADED_RELOAD_LEFT_RIGHT:
            return (await import("./icon_arrow-headed-reload-left-right.svg")).default;

        case Icons.ARROW_HEADED_RELOAD_RIGHT_LEFT:
            return (await import("./icon_arrow-headed-reload-right-left.svg")).default;

        case Icons.ARROW_HEADED_RELOAD_UP_DOWN:
            return (await import("./icon_arrow-headed-reload-up-down.svg")).default;

        case Icons.ARROW_HEADED_RETURN_DOWN:
            return (await import("./icon_arrow-headed-return-down.svg")).default;

        case Icons.ARROW_HEADED_RETURN_LEFT:
            return (await import("./icon_arrow-headed-return-left.svg")).default;

        case Icons.ARROW_HEADED_RETURN_RIGHT:
            return (await import("./icon_arrow-headed-return-right.svg")).default;

        case Icons.ARROW_HEADED_RETURN_UP:
            return (await import("./icon_arrow-headed-return-up.svg")).default;

        case Icons.ARROW_HEADED_RIGHT:
            return (await import("./icon_arrow-headed-right.svg")).default;

        case Icons.ARROW_HEADED_ROTATE_BOTTOM_LEFT:
            return (await import("./icon_arrow-headed-rotate-bottom-left.svg")).default;

        case Icons.ARROW_HEADED_ROTATE_BOTTOM_RIGHT:
            return (await import("./icon_arrow-headed-rotate-bottom-right.svg")).default;

        case Icons.ARROW_HEADED_ROTATE_TOP_LEFT:
            return (await import("./icon_arrow-headed-rotate-top-left.svg")).default;

        case Icons.ARROW_HEADED_ROTATE_TOP_RIGHT:
            return (await import("./icon_arrow-headed-rotate-top-right.svg")).default;

        case Icons.ARROW_HEADED_ROUNDED_LEFT_UP:
            return (await import("./icon_arrow-headed-rounded-left-up.svg")).default;

        case Icons.ARROW_HEADED_ROUNDED_RIGHT_DOWN:
            return (await import("./icon_arrow-headed-rounded-right-down.svg")).default;

        case Icons.ARROW_HEADED_ROUNDED_RIGHT_UP:
            return (await import("./icon_arrow-headed-rounded-right-up.svg")).default;

        case Icons.ARROW_HEADED_ROUNED_LEFT_DOWN:
            return (await import("./icon_arrow-headed-rouned-left-down.svg")).default;

        case Icons.ARROW_HEADED_SHARE:
            return (await import("./icon_arrow-headed-share.svg")).default;

        case Icons.ARROW_HEADED_SPREAD_SPLIT:
            return (await import("./icon_arrow-headed-spread-split.svg")).default;

        case Icons.ARROW_HEADED_SPREAD:
            return (await import("./icon_arrow-headed-spread.svg")).default;

        case Icons.ARROW_HEADED_TWOWAY_DIAGONAL_LR:
            return (await import("./icon_arrow-headed-twoway-diagonal-lr.svg")).default;

        case Icons.ARROW_HEADED_TWOWAY_DIAGONAL_RL:
            return (await import("./icon_arrow-headed-twoway-diagonal-rl.svg")).default;

        case Icons.ARROW_HEADED_TWOWAY_HORIZONTAL:
            return (await import("./icon_arrow-headed-twoway-horizontal.svg")).default;

        case Icons.ARROW_HEADED_TWOWAY_VERTICAL:
            return (await import("./icon_arrow-headed-twoway-vertical.svg")).default;

        case Icons.ARROW_HEADED_UP_DOWN_SPLIT:
            return (await import("./icon_arrow-headed-up-down-split.svg")).default;

        case Icons.ARROW_HEADED_UP_DOWN_STOP:
            return (await import("./icon_arrow-headed-up-down-stop.svg")).default;

        case Icons.ARROW_HEADED_UP_DOWN:
            return (await import("./icon_arrow-headed-up-down.svg")).default;

        case Icons.ARROW_HEADED_UP_LEFT:
            return (await import("./icon_arrow-headed-up-left.svg")).default;

        case Icons.ARROW_HEADED_UP_RIGHT:
            return (await import("./icon_arrow-headed-up-right.svg")).default;

        case Icons.ARROW_HEADED_UP_STOP76:
            return (await import("./icon_arrow-headed-up-stop-76.svg")).default;

        case Icons.ARROW_HEADED_UP_STOP78:
            return (await import("./icon_arrow-headed-up-stop-78.svg")).default;

        case Icons.ARROW_HEADED_UP:
            return (await import("./icon_arrow-headed-up.svg")).default;

        case Icons.ARROW_HEADED_UPLOAD:
            return (await import("./icon_arrow-headed-upload.svg")).default;

        case Icons.ARROW_IN_CENTER:
            return (await import("./icon_arrow-in-center.svg")).default;

        case Icons.ARROW_INVERT:
            return (await import("./icon_arrow-invert.svg")).default;

        case Icons.ARROW_LEFT_RIGHT_SPLIT:
            return (await import("./icon_arrow-left-right-split.svg")).default;

        case Icons.ARROW_LEFT_RIGHT_STOP:
            return (await import("./icon_arrow-left-right-stop.svg")).default;

        case Icons.ARROW_LEFT_RIGHT:
            return (await import("./icon_arrow-left-right.svg")).default;

        case Icons.ARROW_LEFT_STOP:
            return (await import("./icon_arrow-left-stop.svg")).default;

        case Icons.ARROW_LEFT:
            return (await import("./icon_arrow-left.svg")).default;

        case Icons.ARROW_OUT_CENTER:
            return (await import("./icon_arrow-out-center.svg")).default;

        case Icons.ARROW_RELOAD_DOWN_UP:
            return (await import("./icon_arrow-reload-down-up.svg")).default;

        case Icons.ARROW_RELOAD_LEFT_RIGHT:
            return (await import("./icon_arrow-reload-left-right.svg")).default;

        case Icons.ARROW_RELOAD_RIGHT_LEFT:
            return (await import("./icon_arrow-reload-right-left.svg")).default;

        case Icons.ARROW_RELOAD_UP_DOWN:
            return (await import("./icon_arrow-reload-up-down.svg")).default;

        case Icons.ARROW_RETURN_DOWN:
            return (await import("./icon_arrow-return-down.svg")).default;

        case Icons.ARROW_RETURN_LEFT:
            return (await import("./icon_arrow-return-left.svg")).default;

        case Icons.ARROW_RETURN_RIGHT:
            return (await import("./icon_arrow-return-right.svg")).default;

        case Icons.ARROW_RETURN_UP:
            return (await import("./icon_arrow-return-up.svg")).default;

        case Icons.ARROW_RIGHT_STOP:
            return (await import("./icon_arrow-right-stop.svg")).default;

        case Icons.ARROW_RIGHT:
            return (await import("./icon_arrow-right.svg")).default;

        case Icons.ARROW_ROATE_BOTTOM_RIGHT:
            return (await import("./icon_arrow-roate-bottom-right.svg")).default;

        case Icons.ARROW_ROTATE_BOTTOM_LEFT:
            return (await import("./icon_arrow-rotate-bottom-left.svg")).default;

        case Icons.ARROW_ROTATE_TOP_LEFT:
            return (await import("./icon_arrow-rotate-top-left.svg")).default;

        case Icons.ARROW_ROTATE_TOP_RIGHT:
            return (await import("./icon_arrow-rotate-top-right.svg")).default;

        case Icons.ARROW_ROUNDED_LEFT_DOWN:
            return (await import("./icon_arrow-rounded-left-down.svg")).default;

        case Icons.ARROW_ROUNDED_LEFT_UP:
            return (await import("./icon_arrow-rounded-left-up.svg")).default;

        case Icons.ARROW_ROUNDED_RIGHT_DOWN:
            return (await import("./icon_arrow-rounded-right-down.svg")).default;

        case Icons.ARROW_ROUNDED_RIGHT_UP:
            return (await import("./icon_arrow-rounded-right-up.svg")).default;

        case Icons.ARROW_SHARE:
            return (await import("./icon_arrow-share.svg")).default;

        case Icons.ARROW_SPREAD_SPLIT:
            return (await import("./icon_arrow-spread-split.svg")).default;

        case Icons.ARROW_SPREAD:
            return (await import("./icon_arrow-spread.svg")).default;

        case Icons.ARROW_TRANSFER_BL_TR:
            return (await import("./icon_arrow-transfer-bl-tr.svg")).default;

        case Icons.ARROW_TRANSFER_LEFT_RIGHT:
            return (await import("./icon_arrow-transfer-left-right.svg")).default;

        case Icons.ARROW_TRANSFER_LT_BR:
            return (await import("./icon_arrow-transfer-lt-br.svg")).default;

        case Icons.ARROW_TRANSFER_UP_DOWN:
            return (await import("./icon_arrow-transfer-up-down.svg")).default;

        case Icons.ARROW_TWOWAY_DIAGONAL_LR:
            return (await import("./icon_arrow-twoway-diagonal-lr.svg")).default;

        case Icons.ARROW_TWOWAY_DIAGONAL_RL:
            return (await import("./icon_arrow-twoway-diagonal-rl.svg")).default;

        case Icons.ARROW_TWOWAY_HORIZONTAL:
            return (await import("./icon_arrow-twoway-horizontal.svg")).default;

        case Icons.ARROW_TWOWAY_VERTICAL:
            return (await import("./icon_arrow-twoway-vertical.svg")).default;

        case Icons.ARROW_UP_COPY:
            return (await import("./icon_arrow-up copy.svg")).default;

        case Icons.ARROW_UP_DOWN_SPLIT:
            return (await import("./icon_arrow-up-down-split.svg")).default;

        case Icons.ARROW_UP_DOWN_STOP:
            return (await import("./icon_arrow-up-down-stop.svg")).default;

        case Icons.ARROW_UP_DOWN:
            return (await import("./icon_arrow-up-down.svg")).default;

        case Icons.ARROW_UP_LEFT:
            return (await import("./icon_arrow-up-left.svg")).default;

        case Icons.ARROW_UP_RIGHT:
            return (await import("./icon_arrow-up-right.svg")).default;

        case Icons.ARROW_UP:
            return (await import("./icon_arrow-up.svg")).default;

        case Icons.ARROW_UPLOAD:
            return (await import("./icon_arrow-upload.svg")).default;

        case Icons.CHEVRON_CONNECT2:
            return (await import("./icon_chevron-connect 2.svg")).default;

        case Icons.CHEVRON_CONNECT:
            return (await import("./icon_chevron-connect.svg")).default;

        case Icons.CHEVRON_DISCONNECT2:
            return (await import("./icon_chevron-disconnect 2.svg")).default;

        case Icons.CHEVRON_DISCONNECT:
            return (await import("./icon_chevron-disconnect.svg")).default;

        case Icons.CHEVRON_DOUBLE_DOWN:
            return (await import("./icon_chevron-double-down.svg")).default;

        case Icons.CHEVRON_DOUBLE_LEFT:
            return (await import("./icon_chevron-double-left.svg")).default;

        case Icons.CHEVRON_DOUBLE_RIGHT:
            return (await import("./icon_chevron-double-right.svg")).default;

        case Icons.CHEVRON_DOUBLE_UP:
            return (await import("./icon_chevron-double-up.svg")).default;

        case Icons.CHEVRON_DOWN:
            return (await import("./icon_chevron-down.svg")).default;

        case Icons.CHEVRON_LEFT:
            return (await import("./icon_chevron-left.svg")).default;

        case Icons.CHEVRON_RIGHT:
            return (await import("./icon_chevron-right.svg")).default;

        case Icons.CHEVRON_UP:
            return (await import("./icon_chevron-up.svg")).default;

        case Icons.ICON01:
            return (await import("./icon-01.svg")).default;

        case Icons.BOTTLE:
            return (await import("./icon_bottle.svg")).default;

        case Icons.BOTTLES:
            return (await import("./icon_bottles.svg")).default;

        case Icons.BREAD_SLICE:
            return (await import("./icon_bread slice.svg")).default;

        case Icons.COFFEE_CUP:
            return (await import("./icon_coffee cup.svg")).default;

        case Icons.COFFEE_MACHINE:
            return (await import("./icon_coffee machine.svg")).default;

        case Icons.COFFEE_BEANS:
            return (await import("./icon_coffee-beans.svg")).default;

        case Icons.COGNAC_GLASS:
            return (await import("./icon_cognac glass.svg")).default;

        case Icons.ESPRESS_MACHINE2:
            return (await import("./icon_espress machine 2.svg")).default;

        case Icons.ESPRESSO_MACHINE_E61:
            return (await import("./icon_espresso machine e61.svg")).default;

        case Icons.ESPRESSO_MACHINE:
            return (await import("./icon_espresso machine.svg")).default;

        case Icons.ESPRESSO_PISTOL:
            return (await import("./icon_espresso pistol.svg")).default;

        case Icons.HAMBURGER:
            return (await import("./icon_hamburger.svg")).default;

        case Icons.PERCULATOR:
            return (await import("./icon_perculator.svg")).default;

        case Icons.WINE_GLASS:
            return (await import("./icon_wine glass.svg")).default;

        case Icons.ALARM_BELL2:
            return (await import("./icon_alarm-bell-2.svg")).default;

        case Icons.ALARM_BELL3:
            return (await import("./icon_alarm-bell-3.svg")).default;

        case Icons.ALARM_BELL:
            return (await import("./icon_alarm-bell.svg")).default;

        case Icons.ART_SUPPLIES:
            return (await import("./icon_art-supplies.svg")).default;

        case Icons.AUDIO_WAVES:
            return (await import("./icon_audio-waves.svg")).default;

        case Icons.BLUETOOTH:
            return (await import("./icon_bluetooth.svg")).default;

        case Icons.CAMERA:
            return (await import("./icon_camera.svg")).default;

        case Icons.CLIPBOARD:
            return (await import("./icon_clipboard.svg")).default;

        case Icons.COLOR_PALLETTE:
            return (await import("./icon_color-pallette.svg")).default;

        case Icons.COLOR_RGB:
            return (await import("./icon_color-rgb.svg")).default;

        case Icons.COLOR_SWATCHES:
            return (await import("./icon_color-swatches.svg")).default;

        case Icons.DESKTOP:
            return (await import("./icon_desktop.svg")).default;

        case Icons.FILMROLL:
            return (await import("./icon_filmroll.svg")).default;

        case Icons.GAMEPAD_CLASSIC:
            return (await import("./icon_gamepad-classic.svg")).default;

        case Icons.GAMEPAD:
            return (await import("./icon_gamepad.svg")).default;

        case Icons.HEADPHONES:
            return (await import("./icon_headphones.svg")).default;

        case Icons.HIGHLIGHT:
            return (await import("./icon_highlight.svg")).default;

        case Icons.IMAGE:
            return (await import("./icon_image.svg")).default;

        case Icons.JOYSTICK:
            return (await import("./icon_joystick.svg")).default;

        case Icons.LAPTOP:
            return (await import("./icon_laptop.svg")).default;

        case Icons.MAIL_OPEN:
            return (await import("./icon_mail-open.svg")).default;

        case Icons.MAIL:
            return (await import("./icon_mail.svg")).default;

        case Icons.MEDIA:
            return (await import("./icon_media.svg")).default;

        case Icons.MICROPHONE:
            return (await import("./icon_microphone.svg")).default;

        case Icons.MUSIC_NOTE_SINGLE:
            return (await import("./icon_music-note-single.svg")).default;

        case Icons.MUSIC_NOTE:
            return (await import("./icon_music-note.svg")).default;

        case Icons.NES_CONTROLLER:
            return (await import("./icon_nes-controller.svg")).default;

        case Icons.PACMAN:
            return (await import("./icon_pacman.svg")).default;

        case Icons.PAINT_ROLLER:
            return (await import("./icon_paint-roller.svg")).default;

        case Icons.PAPERPLANE:
            return (await import("./icon_paperplane.svg")).default;

        case Icons.PLAYBACK_BACKWARD:
            return (await import("./icon_playback-backward.svg")).default;

        case Icons.PLAYBACK_END:
            return (await import("./icon_playback-end.svg")).default;

        case Icons.PLAYBACK_FORWARD:
            return (await import("./icon_playback-forward.svg")).default;

        case Icons.PLAYBACK_NEXT:
            return (await import("./icon_playback-next.svg")).default;

        case Icons.PLAYBACK_PAUSE:
            return (await import("./icon_playback-pause.svg")).default;

        case Icons.PLAYBACK_PLAY:
            return (await import("./icon_playback-play.svg")).default;

        case Icons.PLAYBACK_PREVIOUS:
            return (await import("./icon_playback-previous.svg")).default;

        case Icons.PLAYBACK_START:
            return (await import("./icon_playback-start.svg")).default;

        case Icons.PLAYBACK_STOP:
            return (await import("./icon_playback-stop.svg")).default;

        case Icons.PRINTER:
            return (await import("./icon_printer.svg")).default;

        case Icons.RECORD:
            return (await import("./icon_record.svg")).default;

        case Icons.REELS:
            return (await import("./icon_reels.svg")).default;

        case Icons.TABLET_LANDSCAPE:
            return (await import("./icon_tablet-landscape.svg")).default;

        case Icons.TABLET:
            return (await import("./icon_tablet.svg")).default;

        case Icons.TELEVISION:
            return (await import("./icon_television.svg")).default;

        case Icons.TERMINAL:
            return (await import("./icon_terminal.svg")).default;

        case Icons.VIDEO_CAMERA:
            return (await import("./icon_video-camera.svg")).default;

        case Icons.VIDEOS:
            return (await import("./icon_videos.svg")).default;

        case Icons.VOLUME_I:
            return (await import("./icon_volume-i.svg")).default;

        case Icons.VOLUME_II:
            return (await import("./icon_volume-ii.svg")).default;

        case Icons.VOLUME_III:
            return (await import("./icon_volume-iii.svg")).default;

        case Icons.VOLUME_MUTE:
            return (await import("./icon_volume-mute.svg")).default;

        case Icons.VOLUME_OFF:
            return (await import("./icon_volume-off.svg")).default;

        case Icons.WEBSITE:
            return (await import("./icon_website.svg")).default;

        case Icons.WIFI2:
            return (await import("./icon_wifi 2.svg")).default;

        case Icons.WIFI3:
            return (await import("./icon_wifi 3.svg")).default;

        case Icons.WIFI_ROUNDED:
            return (await import("./icon_wifi-rounded.svg")).default;

        case Icons.WIFI:
            return (await import("./icon_wifi.svg")).default;

        case Icons.AI_FACE:
            return (await import("./icon_ai-face.svg")).default;

        case Icons.AI_LETTERS_BLOCKED:
            return (await import("./icon_ai-letters-blocked.svg")).default;

        case Icons.AI_LETTERS_CIRCLED:
            return (await import("./icon_ai-letters-circled.svg")).default;

        case Icons.AI_LETTERS:
            return (await import("./icon_ai-letters.svg")).default;

        case Icons.AFRAME:
            return (await import("./icon_aframe.svg")).default;

        case Icons.ARTWORK_FRAME:
            return (await import("./icon_artwork-frame.svg")).default;

        case Icons.BARBECUE:
            return (await import("./icon_barbecue.svg")).default;

        case Icons.BATHROOM_ESSENTIALS:
            return (await import("./icon_bathroom-essentials.svg")).default;

        case Icons.BINOCULARS:
            return (await import("./icon_binoculars.svg")).default;

        case Icons.BLENDER:
            return (await import("./icon_blender.svg")).default;

        case Icons.BOOKCASE:
            return (await import("./icon_bookcase.svg")).default;

        case Icons.BRAIN:
            return (await import("./icon_brain.svg")).default;

        case Icons.BULB:
            return (await import("./icon_bulb.svg")).default;

        case Icons.CACTUS:
            return (await import("./icon_cactus.svg")).default;

        case Icons.CHIP:
            return (await import("./icon_chip.svg")).default;

        case Icons.CLEANING_BUCKET:
            return (await import("./icon_cleaning-bucket.svg")).default;

        case Icons.CLEANING_SPRAY:
            return (await import("./icon_cleaning-spray.svg")).default;

        case Icons.CLOSET:
            return (await import("./icon_closet.svg")).default;

        case Icons.COINS:
            return (await import("./icon_coins.svg")).default;

        case Icons.COMPASS2:
            return (await import("./icon_compass 2.svg")).default;

        case Icons.COMPASS:
            return (await import("./icon_compass.svg")).default;

        case Icons.CUBE3D:
            return (await import("./icon_cube-3d.svg")).default;

        case Icons.EDUCATION:
            return (await import("./icon_education.svg")).default;

        case Icons.FACTORY_ARM:
            return (await import("./icon_factory-arm.svg")).default;

        case Icons.FACTORY_BELT:
            return (await import("./icon_factory-belt.svg")).default;

        case Icons.FACTORY:
            return (await import("./icon_factory.svg")).default;

        case Icons.FINGERPRINT:
            return (await import("./icon_fingerprint.svg")).default;

        case Icons.FIRE:
            return (await import("./icon_fire.svg")).default;

        case Icons.FRIDGE:
            return (await import("./icon_fridge.svg")).default;

        case Icons.FURNITURE_BED2:
            return (await import("./icon_furniture-bed-2.svg")).default;

        case Icons.FURNITURE_BED_KING2:
            return (await import("./icon_furniture-bed-king-2.svg")).default;

        case Icons.FURNITURE_BED_KING:
            return (await import("./icon_furniture-bed-king.svg")).default;

        case Icons.FURNITURE_BED_SINGLE2:
            return (await import("./icon_furniture-bed-single-2.svg")).default;

        case Icons.FURNITURE_BED_SINGLE:
            return (await import("./icon_furniture-bed-single.svg")).default;

        case Icons.FURNITURE_BED:
            return (await import("./icon_furniture-bed.svg")).default;

        case Icons.FURNITURE_BEDSIDE_TABLE:
            return (await import("./icon_furniture-bedside-table.svg")).default;

        case Icons.FURNITURE_CHAIR2:
            return (await import("./icon_furniture-chair 2.svg")).default;

        case Icons.FURNITURE_CHAIR3:
            return (await import("./icon_furniture-chair 3.svg")).default;

        case Icons.FURNITURE_CHAIR4:
            return (await import("./icon_furniture-chair 4.svg")).default;

        case Icons.FURNITURE_CHAIR:
            return (await import("./icon_furniture-chair.svg")).default;

        case Icons.FURNITURE_COUCH2:
            return (await import("./icon_furniture-couch 2.svg")).default;

        case Icons.FURNITURE_COUCH3:
            return (await import("./icon_furniture-couch 3.svg")).default;

        case Icons.FURNITURE_COUCH4:
            return (await import("./icon_furniture-couch 4.svg")).default;

        case Icons.FURNITURE_COUCH:
            return (await import("./icon_furniture-couch.svg")).default;

        case Icons.FURNITURE_DESK:
            return (await import("./icon_furniture-desk.svg")).default;

        case Icons.FURNITURE_DRESSOIR:
            return (await import("./icon_furniture-dressoir.svg")).default;

        case Icons.GRAPH_UP_ROUND:
            return (await import("./icon_graph-up-round.svg")).default;

        case Icons.GRAPH_UP:
            return (await import("./icon_graph-up.svg")).default;

        case Icons.HAIRDRYER:
            return (await import("./icon_hairdryer.svg")).default;

        case Icons.HILL_LANDSCAPE:
            return (await import("./icon_hill-landscape.svg")).default;

        case Icons.IDEA_FACTORY:
            return (await import("./icon_idea-factory.svg")).default;

        case Icons.INDUSTRY3:
            return (await import("./icon_industry-3.svg")).default;

        case Icons.IRON:
            return (await import("./icon_iron.svg")).default;

        case Icons.KITCHEN_CUTLERY:
            return (await import("./icon_kitchen-cutlery.svg")).default;

        case Icons.KITCHEN_UTENSILS:
            return (await import("./icon_kitchen-utensils.svg")).default;

        case Icons.LAKE_VIEW:
            return (await import("./icon_lake-view.svg")).default;

        case Icons.LEAF2:
            return (await import("./icon_leaf 2.svg")).default;

        case Icons.LEAF3:
            return (await import("./icon_leaf 3.svg")).default;

        case Icons.LEAF:
            return (await import("./icon_leaf.svg")).default;

        case Icons.LEAFS:
            return (await import("./icon_leafs.svg")).default;

        case Icons.LIQUID_SOAP2:
            return (await import("./icon_liquid-soap 2.svg")).default;

        case Icons.LIQUID_SOAP:
            return (await import("./icon_liquid-soap.svg")).default;

        case Icons.LUXE_VILLA:
            return (await import("./icon_luxe-villa.svg")).default;

        case Icons.MANSION:
            return (await import("./icon_mansion.svg")).default;

        case Icons.MICROWAVE:
            return (await import("./icon_microwave.svg")).default;

        case Icons.MONEY:
            return (await import("./icon_money.svg")).default;

        case Icons.MONEYBAG:
            return (await import("./icon_moneybag.svg")).default;

        case Icons.MOUNTAIN_SCAPE:
            return (await import("./icon_mountain-scape.svg")).default;

        case Icons.OVEN:
            return (await import("./icon_oven.svg")).default;

        case Icons.PLANT:
            return (await import("./icon_plant.svg")).default;

        case Icons.POLITICIAN2:
            return (await import("./icon_politician 2.svg")).default;

        case Icons.POLITICIAN:
            return (await import("./icon_politician.svg")).default;

        case Icons.ROCKET:
            return (await import("./icon_rocket.svg")).default;

        case Icons.ROOM_SHADE:
            return (await import("./icon_room-shade.svg")).default;

        case Icons.SHIELD2_LINE:
            return (await import("./icon_shield-2-line.svg")).default;

        case Icons.SHIELD2:
            return (await import("./icon_shield-2.svg")).default;

        case Icons.SHIELD3_LINE:
            return (await import("./icon_shield-3-line.svg")).default;

        case Icons.SHIELD3:
            return (await import("./icon_shield-3.svg")).default;

        case Icons.SHIELD4_LINE:
            return (await import("./icon_shield-4-line.svg")).default;

        case Icons.SHIELD4:
            return (await import("./icon_shield-4.svg")).default;

        case Icons.SHIELD_LINE:
            return (await import("./icon_shield-line.svg")).default;

        case Icons.SHIELD:
            return (await import("./icon_shield.svg")).default;

        case Icons.STOVE:
            return (await import("./icon_stove.svg")).default;

        case Icons.SURFBOARD:
            return (await import("./icon_surfboard.svg")).default;

        case Icons.SWIMMING_POOL:
            return (await import("./icon_swimming-pool.svg")).default;

        case Icons.TEMPLE2:
            return (await import("./icon_temple 2.svg")).default;

        case Icons.TEMPLE:
            return (await import("./icon_temple.svg")).default;

        case Icons.TENT_CAMPING:
            return (await import("./icon_tent-camping.svg")).default;

        case Icons.TOY_BLOCKS2:
            return (await import("./icon_toy-blocks-2.svg")).default;

        case Icons.TOY_BLOCKS3:
            return (await import("./icon_toy-blocks-3.svg")).default;

        case Icons.TOY_BLOCKS:
            return (await import("./icon_toy-blocks.svg")).default;

        case Icons.TOY_HEAD:
            return (await import("./icon_toy-head.svg")).default;

        case Icons.TREE2:
            return (await import("./icon_tree 2.svg")).default;

        case Icons.TREE3:
            return (await import("./icon_tree 3.svg")).default;

        case Icons.TREE:
            return (await import("./icon_tree.svg")).default;

        case Icons.TREEHOUSE:
            return (await import("./icon_treehouse.svg")).default;

        case Icons.TREES2:
            return (await import("./icon_trees 2.svg")).default;

        case Icons.TREES:
            return (await import("./icon_trees.svg")).default;

        case Icons.UFO:
            return (await import("./icon_ufo.svg")).default;

        case Icons.VOTE:
            return (await import("./icon_vote.svg")).default;

        case Icons.WALLET:
            return (await import("./icon_wallet.svg")).default;

        case Icons.WASHING_MACHINE:
            return (await import("./icon_washing machine.svg")).default;

        case Icons.WATERCOOKER:
            return (await import("./icon_watercooker.svg")).default;

        case Icons.YURT:
            return (await import("./icon_yurt.svg")).default;

        case Icons.BABY_STROLLER:
            return (await import("./icon_baby-stroller.svg")).default;

        case Icons.CLOTHING_TSHIRT:
            return (await import("./icon_clothing-tshirt.svg")).default;

        case Icons.COTTON:
            return (await import("./icon_cotton.svg")).default;

        case Icons.HOME_GARDEN:
            return (await import("./icon_home-garden.svg")).default;

        case Icons.HYPOALLERGENIC:
            return (await import("./icon_hypoallergenic.svg")).default;

        case Icons.NO_LEAKS:
            return (await import("./icon_no-leaks.svg")).default;

        case Icons.SUITCASE_JOBS:
            return (await import("./icon_suitcase-jobs.svg")).default;

        case Icons.SHOPPING_BAG2:
            return (await import("./icon_shopping-bag-2.svg")).default;

        case Icons.SHOPPING_BAG3:
            return (await import("./icon_shopping-bag-3.svg")).default;

        case Icons.SHOPPING_BAG_DISCOUNT:
            return (await import("./icon_shopping-bag-discount.svg")).default;

        case Icons.SHOPPING_BAG:
            return (await import("./icon_shopping-bag.svg")).default;

        case Icons.SHOPPING_BASKET_ROUNDED:
            return (await import("./icon_shopping-basket-rounded.svg")).default;

        case Icons.SHOPPING_BASKET:
            return (await import("./icon_shopping-basket.svg")).default;

        case Icons.SHOPPING_CART_FAST:
            return (await import("./icon_shopping-cart-fast.svg")).default;

        case Icons.SHOPPING_CART:
            return (await import("./icon_shopping-cart.svg")).default;

        case Icons.SHOPPING_LABEL:
            return (await import("./icon_shopping-label.svg")).default;

        case Icons.SHOPPING_LABELS:
            return (await import("./icon_shopping-labels.svg")).default;

        case Icons.ICON43:
            return (await import("./icon-43.svg")).default;

        case Icons.BAHT_SYMBOL:
            return (await import("./icon_baht-symbol.svg")).default;

        case Icons.DICE1:
            return (await import("./icon_dice-1.svg")).default;

        case Icons.DICE2:
            return (await import("./icon_dice-2.svg")).default;

        case Icons.DICE3:
            return (await import("./icon_dice-3.svg")).default;

        case Icons.DICE4:
            return (await import("./icon_dice-4.svg")).default;

        case Icons.DICE5:
            return (await import("./icon_dice-5.svg")).default;

        case Icons.DICE6:
            return (await import("./icon_dice-6.svg")).default;

        case Icons.DICE7:
            return (await import("./icon_dice-7.svg")).default;

        case Icons.DICE8:
            return (await import("./icon_dice-8.svg")).default;

        case Icons.DICE9:
            return (await import("./icon_dice-9.svg")).default;

        case Icons.DIGIT_DIGITAL1:
            return (await import("./icon_digit-digital-1.svg")).default;

        case Icons.DIGIT_DIGITAL2:
            return (await import("./icon_digit-digital-2.svg")).default;

        case Icons.DIGIT_DIGITAL3:
            return (await import("./icon_digit-digital-3.svg")).default;

        case Icons.DIGIT_DIGITAL4:
            return (await import("./icon_digit-digital-4.svg")).default;

        case Icons.DIGIT_DIGITAL5:
            return (await import("./icon_digit-digital-5.svg")).default;

        case Icons.DIGIT_DIGITAL6:
            return (await import("./icon_digit-digital-6.svg")).default;

        case Icons.DIGIT_DIGITAL7:
            return (await import("./icon_digit-digital-7.svg")).default;

        case Icons.DIGIT_DIGITAL8:
            return (await import("./icon_digit-digital-8.svg")).default;

        case Icons.DIGIT_DIGITAL9:
            return (await import("./icon_digit-digital-9.svg")).default;

        case Icons.DIGIT_DIGTAL0:
            return (await import("./icon_digit-digtal-0.svg")).default;

        case Icons.DOLLAR:
            return (await import("./icon_dollar.svg")).default;

        case Icons.EURO:
            return (await import("./icon_euro.svg")).default;

        case Icons.PERCENTAGE:
            return (await import("./icon_percentage.svg")).default;

        case Icons.POUND_SYMBOL:
            return (await import("./icon_pound-symbol.svg")).default;

        case Icons.PROMILLE:
            return (await import("./icon_promille.svg")).default;

        case Icons.RUBLES_SYMBOL:
            return (await import("./icon_rubles-symbol.svg")).default;

        case Icons.RUPEE_SYMBOL_COPY:
            return (await import("./icon_rupee-symbol copy.svg")).default;

        case Icons.RUPEE_SYMBOL:
            return (await import("./icon_rupee-symbol.svg")).default;

        case Icons.SYMBOL_FEMALE:
            return (await import("./icon_symbol-female.svg")).default;

        case Icons.SYMBOL_MALE:
            return (await import("./icon_symbol-male.svg")).default;

        case Icons.SYMBOL_UNISEX:
            return (await import("./icon_symbol-unisex.svg")).default;

        case Icons.THREE_DOTS_DIAGONAL_MAJOR:
            return (await import("./icon_three-dots-diagonal-major.svg")).default;

        case Icons.THREE_DOTS_DIAGONAL_MINOR:
            return (await import("./icon_three-dots-diagonal-minor.svg")).default;

        case Icons.THREE_DOTS_HORIZONTAL:
            return (await import("./icon_three-dots-horizontal.svg")).default;

        case Icons.THREE_DOTS_LINES:
            return (await import("./icon_three-dots-lines.svg")).default;

        case Icons.THREE_DOTS_VERTICAL:
            return (await import("./icon_three-dots-vertical.svg")).default;

        case Icons.TWO_DOTS_DIAGONAL_MAJOR:
            return (await import("./icon_two-dots-diagonal-major.svg")).default;

        case Icons.TWO_DOTS_DIAGONAL_MINOR:
            return (await import("./icon_two-dots-diagonal-minor.svg")).default;

        case Icons.TWO_DOTS_HORIZONTAL:
            return (await import("./icon_two-dots-horizontal.svg")).default;

        case Icons.TWO_DOTS_LINES:
            return (await import("./icon_two-dots-lines.svg")).default;

        case Icons.TWO_DOTS_VERTICAL:
            return (await import("./icon_two-dots-vertical.svg")).default;

        case Icons.YEN:
            return (await import("./icon_yen.svg")).default;

        case Icons.BALL_BASKETBALL:
            return (await import("./icon_ball-basketball.svg")).default;

        case Icons.BALL_FOOTBALL:
            return (await import("./icon_ball-football.svg")).default;

        case Icons.BALL_RUGBY:
            return (await import("./icon_ball-rugby.svg")).default;

        case Icons.BALL_TENNIS:
            return (await import("./icon_ball-tennis.svg")).default;

        case Icons.ACCESSIBILITY_PERSON_CIRCLED:
            return (await import("./icon_accessibility-person-circled.svg")).default;

        case Icons.ACCESSIBILITY_PERSON:
            return (await import("./icon_accessibility-person.svg")).default;

        case Icons.ADD_FAT:
            return (await import("./icon_add-fat.svg")).default;

        case Icons.ADD_L:
            return (await import("./icon_add-l.svg")).default;

        case Icons.ADD_LINES:
            return (await import("./icon_add-lines.svg")).default;

        case Icons.ADD_M:
            return (await import("./icon_add-m.svg")).default;

        case Icons.ADD_S:
            return (await import("./icon_add-s.svg")).default;

        case Icons.AT_SIGN:
            return (await import("./icon_at-sign.svg")).default;

        case Icons.BLOCK_PARTIALS:
            return (await import("./icon_block-partials.svg")).default;

        case Icons.BOARD_ADD2:
            return (await import("./icon_board-add-2.svg")).default;

        case Icons.BOARD_MULTI2_HORIZONTAL:
            return (await import("./icon_board-multi-2-horizontal.svg")).default;

        case Icons.BOARD_MULTI2_VERTICAL:
            return (await import("./icon_board-multi-2-vertical.svg")).default;

        case Icons.BOARD_MULTI_DASHBOARD:
            return (await import("./icon_board-multi-dashboard.svg")).default;

        case Icons.BOARD_MULTI_T_DOWN:
            return (await import("./icon_board-multi-t-down.svg")).default;

        case Icons.BOARD_MULTI_T_LEFT:
            return (await import("./icon_board-multi-t-left.svg")).default;

        case Icons.BOARD_MULTI_T_RIGHT:
            return (await import("./icon_board-multi-t-right.svg")).default;

        case Icons.BOARD_MULTI_T_UP:
            return (await import("./icon_board-multi-t-up.svg")).default;

        case Icons.BOARD_MULTI:
            return (await import("./icon_board-multi.svg")).default;

        case Icons.BOARD_MULTIPLY2:
            return (await import("./icon_board-multiply-2.svg")).default;

        case Icons.BOARD_SPLIT13_HORIZONTAL:
            return (await import("./icon_board-split-1-3-horizontal.svg")).default;

        case Icons.BOARD_SPLIT13_VERTICAL:
            return (await import("./icon_board-split-1-3-vertical.svg")).default;

        case Icons.BOARD_SPLIT2_HORIZONTAL:
            return (await import("./icon_board-split-2-horizontal.svg")).default;

        case Icons.BOARD_SPLIT2_VERTICAL:
            return (await import("./icon_board-split-2-vertical.svg")).default;

        case Icons.BOARD_SPLIT31_HORIZONTAL:
            return (await import("./icon_board-split-3-1-horizontal.svg")).default;

        case Icons.BOARD_SPLIT31_VERTICAL:
            return (await import("./icon_board-split-3-1-vertical.svg")).default;

        case Icons.BOARD_SPLIT3_HORIZONTAL:
            return (await import("./icon_board-split-3-horizontal.svg")).default;

        case Icons.BOARD_SPLIT3_VERTICAL:
            return (await import("./icon_board-split-3-vertical.svg")).default;

        case Icons.BOARD_SPLIT4_HORIZONTAL:
            return (await import("./icon_board-split-4-horizontal.svg")).default;

        case Icons.BOARD_SPLIT4_VERTICAL:
            return (await import("./icon_board-split-4-vertical.svg")).default;

        case Icons.BOARD_SPLIT_T_DOWN:
            return (await import("./icon_board-split-t-down.svg")).default;

        case Icons.BOARD_SPLIT_T_LEFT:
            return (await import("./icon_board-split-t-left.svg")).default;

        case Icons.BOARD_SPLIT_T_RIGHT:
            return (await import("./icon_board-split-t-right.svg")).default;

        case Icons.BOARD_SPLIT_T_UP:
            return (await import("./icon_board-split-t-up.svg")).default;

        case Icons.BOARD_SUBTRACT2:
            return (await import("./icon_board-subtract-2.svg")).default;

        case Icons.BOARD:
            return (await import("./icon_board.svg")).default;

        case Icons.BOX_IN:
            return (await import("./icon_box-in.svg")).default;

        case Icons.BOX_OUT:
            return (await import("./icon_box-out.svg")).default;

        case Icons.BOX:
            return (await import("./icon_box.svg")).default;

        case Icons.BOY:
            return (await import("./icon_boy.svg")).default;

        case Icons.BROKEN_HEART_F:
            return (await import("./icon_broken-heart-f.svg")).default;

        case Icons.BROKEN_HEART_L:
            return (await import("./icon_broken-heart-l.svg")).default;

        case Icons.BROKEN_HEART_M:
            return (await import("./icon_broken-heart-m.svg")).default;

        case Icons.BUILDING_CHURCH:
            return (await import("./icon_building-church.svg")).default;

        case Icons.BUILDING_HOUSE2:
            return (await import("./icon_building-house-2.svg")).default;

        case Icons.BUILDING_HOUSE:
            return (await import("./icon_building-house.svg")).default;

        case Icons.BUILDING_SHOP:
            return (await import("./icon_building-shop.svg")).default;

        case Icons.BUTTON_ADD:
            return (await import("./icon_button-add.svg")).default;

        case Icons.BUTTON_BROKEN_HEART2:
            return (await import("./icon_button-broken-heart 2.svg")).default;

        case Icons.BUTTON_BROKEN_HEART:
            return (await import("./icon_button-broken-heart.svg")).default;

        case Icons.BUTTON_CHECK2:
            return (await import("./icon_button-check-2.svg")).default;

        case Icons.BUTTON_CHECK:
            return (await import("./icon_button-check.svg")).default;

        case Icons.BUTTON_EDIT2:
            return (await import("./icon_button-edit-2.svg")).default;

        case Icons.BUTTON_EDIT:
            return (await import("./icon_button-edit.svg")).default;

        case Icons.BUTTON_EXCLAMATION_MARK2:
            return (await import("./icon_button-exclamation-mark-2.svg")).default;

        case Icons.BUTTON_EXCLAMATION_MARK:
            return (await import("./icon_button-exclamation-mark.svg")).default;

        case Icons.BUTTON_HEART2:
            return (await import("./icon_button-heart 2.svg")).default;

        case Icons.BUTTON_HEART:
            return (await import("./icon_button-heart.svg")).default;

        case Icons.BUTTON_INFO2:
            return (await import("./icon_button-info-2.svg")).default;

        case Icons.BUTTON_INFO:
            return (await import("./icon_button-info.svg")).default;

        case Icons.BUTTON_INVISIBLE2:
            return (await import("./icon_button-invisible 2.svg")).default;

        case Icons.BUTTON_INVISIBLE:
            return (await import("./icon_button-invisible.svg")).default;

        case Icons.BUTTON_MULTIPLY:
            return (await import("./icon_button-multiply.svg")).default;

        case Icons.BUTTON_QUESTION_MARK2:
            return (await import("./icon_button-question-mark-2.svg")).default;

        case Icons.BUTTON_QUESTION_MARK:
            return (await import("./icon_button-question-mark.svg")).default;

        case Icons.BUTTON_SEARCH2:
            return (await import("./icon_button-search 2.svg")).default;

        case Icons.BUTTON_SEARCH:
            return (await import("./icon_button-search.svg")).default;

        case Icons.BUTTON_STAR2:
            return (await import("./icon_button-star 2.svg")).default;

        case Icons.BUTTON_STAR:
            return (await import("./icon_button-star.svg")).default;

        case Icons.BUTTON_SUBTRACT:
            return (await import("./icon_button-subtract.svg")).default;

        case Icons.BUTTON_VISIBLE2:
            return (await import("./icon_button-visible 2.svg")).default;

        case Icons.BUTTON_VISIBLE:
            return (await import("./icon_button-visible.svg")).default;

        case Icons.BUTTON:
            return (await import("./icon_button.svg")).default;

        case Icons.CALENDAR2:
            return (await import("./icon_calendar-2.svg")).default;

        case Icons.CALENDAR:
            return (await import("./icon_calendar.svg")).default;

        case Icons.CHART_BARS_SQUARED:
            return (await import("./icon_chart-bars-squared.svg")).default;

        case Icons.CHART_BUBBLES:
            return (await import("./icon_chart-bubbles.svg")).default;

        case Icons.CHART_CANDLES:
            return (await import("./icon_chart-candles.svg")).default;

        case Icons.CHART_HALF_CIRCLE:
            return (await import("./icon_chart-half-circle.svg")).default;

        case Icons.CHART_LINE_SQUARED:
            return (await import("./icon_chart-line-squared.svg")).default;

        case Icons.CHART_LINE:
            return (await import("./icon_chart-line.svg")).default;

        case Icons.CHART_PIE:
            return (await import("./icon_chart-pie.svg")).default;

        case Icons.CHECK_FAT:
            return (await import("./icon_check-fat.svg")).default;

        case Icons.CHECK_L:
            return (await import("./icon_check-l.svg")).default;

        case Icons.CHECK_LIST:
            return (await import("./icon_check-list.svg")).default;

        case Icons.CHECK_M:
            return (await import("./icon_check-m.svg")).default;

        case Icons.CHECK_S:
            return (await import("./icon_check-s.svg")).default;

        case Icons.CIRCLE_INVISIBLE:
            return (await import("./icon_circle-invisible.svg")).default;

        case Icons.CIRCLE_SUBTRACT:
            return (await import("./icon_circle-subtract.svg")).default;

        case Icons.CIRCLED_ADD:
            return (await import("./icon_circled-add.svg")).default;

        case Icons.CIRCLED_BROKEN_HEART:
            return (await import("./icon_circled-broken-heart.svg")).default;

        case Icons.CIRCLED_CHECK:
            return (await import("./icon_circled-check.svg")).default;

        case Icons.CIRCLED_EDIT:
            return (await import("./icon_circled-edit.svg")).default;

        case Icons.CIRCLED_EXCLAMATION_MARK:
            return (await import("./icon_circled-exclamation-mark.svg")).default;

        case Icons.CIRCLED_HEART:
            return (await import("./icon_circled-heart.svg")).default;

        case Icons.CIRCLED_INFO:
            return (await import("./icon_circled-info.svg")).default;

        case Icons.CIRCLED_MULTIPLY:
            return (await import("./icon_circled-multiply.svg")).default;

        case Icons.CIRCLED_QUESTION_MARK:
            return (await import("./icon_circled-question-mark.svg")).default;

        case Icons.CIRCLED_SEARCH:
            return (await import("./icon_circled-search.svg")).default;

        case Icons.CIRCLED_STAR:
            return (await import("./icon_circled-star.svg")).default;

        case Icons.CIRCLED_VISIBLE:
            return (await import("./icon_circled-visible.svg")).default;

        case Icons.CIRCLED:
            return (await import("./icon_circled.svg")).default;

        case Icons.CIRCULAR_LOADER:
            return (await import("./icon_circular-loader.svg")).default;

        case Icons.CLOCK:
            return (await import("./icon_clock.svg")).default;

        case Icons.CODE_BRACKETS_CIRCLED:
            return (await import("./icon_code-brackets-circled.svg")).default;

        case Icons.CODE_BRACKETS:
            return (await import("./icon_code-brackets.svg")).default;

        case Icons.CODE_CHEVRONS_CIRCLED:
            return (await import("./icon_code-chevrons-circled.svg")).default;

        case Icons.CODE_CHEVRONS_OPEN_CIRCLED:
            return (await import("./icon_code-chevrons-open-circled.svg")).default;

        case Icons.CODE_CHEVRONS_OPEN:
            return (await import("./icon_code-chevrons-open.svg")).default;

        case Icons.CODE_CHEVRONS:
            return (await import("./icon_code-chevrons.svg")).default;

        case Icons.COMPANY:
            return (await import("./icon_company.svg")).default;

        case Icons.DISLIKE:
            return (await import("./icon_dislike.svg")).default;

        case Icons.EDIT_FAT:
            return (await import("./icon_edit-fat.svg")).default;

        case Icons.EDIT_L:
            return (await import("./icon_edit-l.svg")).default;

        case Icons.EDIT_LINE_SWIRL:
            return (await import("./icon_edit-line-swirl.svg")).default;

        case Icons.EDIT_LINE:
            return (await import("./icon_edit-line.svg")).default;

        case Icons.EDIT_M:
            return (await import("./icon_edit-m.svg")).default;

        case Icons.EDIT_S:
            return (await import("./icon_edit-s.svg")).default;

        case Icons.EXCLAMATION_MARK_FAT:
            return (await import("./icon_exclamation-mark-fat.svg")).default;

        case Icons.EXCLAMATION_MARK_L:
            return (await import("./icon_exclamation-mark-l.svg")).default;

        case Icons.EXCLAMATION_MARK_M:
            return (await import("./icon_exclamation-mark-m.svg")).default;

        case Icons.EXCLAMATION_MARK_S:
            return (await import("./icon_exclamation-mark-s.svg")).default;

        case Icons.FEMALE_SIMPLIFIED:
            return (await import("./icon_female-simplified.svg")).default;

        case Icons.FILE_ADD267:
            return (await import("./icon_file-add 2-67.svg")).default;

        case Icons.FILE_ADD269:
            return (await import("./icon_file-add 2-69.svg")).default;

        case Icons.FILE_ADD:
            return (await import("./icon_file-add.svg")).default;

        case Icons.FILE_ARCHIVE:
            return (await import("./icon_file-archive.svg")).default;

        case Icons.FILE_ARROW_UP:
            return (await import("./icon_file-arrow-up.svg")).default;

        case Icons.FILE_BINARY:
            return (await import("./icon_file-binary.svg")).default;

        case Icons.FILE_BROKEN_HEART2:
            return (await import("./icon_file-broken-heart 2.svg")).default;

        case Icons.FILE_BROKEN_HEART:
            return (await import("./icon_file-broken-heart.svg")).default;

        case Icons.FILE_CHECK2:
            return (await import("./icon_file-check 2.svg")).default;

        case Icons.FILE_CHECK:
            return (await import("./icon_file-check.svg")).default;

        case Icons.FILE_CLOUD:
            return (await import("./icon_file-cloud.svg")).default;

        case Icons.FILE_CODE:
            return (await import("./icon_file-code.svg")).default;

        case Icons.FILE_COLUMNS:
            return (await import("./icon_file-columns.svg")).default;

        case Icons.FILE_EDIT2:
            return (await import("./icon_file-edit 2.svg")).default;

        case Icons.FILE_EDIT:
            return (await import("./icon_file-edit.svg")).default;

        case Icons.FILE_EXCLAMATION_MARK2:
            return (await import("./icon_file-exclamation-mark-2.svg")).default;

        case Icons.FILE_EXCLAMATION_MARK:
            return (await import("./icon_file-exclamation-mark.svg")).default;

        case Icons.FILE_GRAPHS:
            return (await import("./icon_file-graphs.svg")).default;

        case Icons.FILE_HEART2:
            return (await import("./icon_file-heart 2.svg")).default;

        case Icons.FILE_HEART:
            return (await import("./icon_file-heart.svg")).default;

        case Icons.FILE_INFO2:
            return (await import("./icon_file-info-2.svg")).default;

        case Icons.FILE_INFO:
            return (await import("./icon_file-info.svg")).default;

        case Icons.FILE_INVISIBLE2:
            return (await import("./icon_file-invisible 2.svg")).default;

        case Icons.FILE_INVISIBLE:
            return (await import("./icon_file-invisible.svg")).default;

        case Icons.FILE_MULTIPLY:
            return (await import("./icon_file-multiply.svg")).default;

        case Icons.FILE_QUESTION_MARK2:
            return (await import("./icon_file-question-mark-2.svg")).default;

        case Icons.FILE_QUESTION_MARK:
            return (await import("./icon_file-question-mark.svg")).default;

        case Icons.FILE_SEARCH2:
            return (await import("./icon_file-search 2.svg")).default;

        case Icons.FILE_SEARCH:
            return (await import("./icon_file-search.svg")).default;

        case Icons.FILE_STAR2:
            return (await import("./icon_file-star 2.svg")).default;

        case Icons.FILE_STAR:
            return (await import("./icon_file-star.svg")).default;

        case Icons.FILE_SUBTRACT2:
            return (await import("./icon_file-subtract 2.svg")).default;

        case Icons.FILE_SUBTRACT:
            return (await import("./icon_file-subtract.svg")).default;

        case Icons.FILE_TEXT:
            return (await import("./icon_file-text.svg")).default;

        case Icons.FILE_TRAY_STACK:
            return (await import("./icon_file-tray-stack.svg")).default;

        case Icons.FILE_TRAY:
            return (await import("./icon_file-tray.svg")).default;

        case Icons.FILE_VISIBLE2:
            return (await import("./icon_file-visible 2.svg")).default;

        case Icons.FILE_VISIBLE:
            return (await import("./icon_file-visible.svg")).default;

        case Icons.FILE:
            return (await import("./icon_file.svg")).default;

        case Icons.FOLDER_ADD2:
            return (await import("./icon_folder-add 2.svg")).default;

        case Icons.FOLDER_ADD:
            return (await import("./icon_folder-add.svg")).default;

        case Icons.FOLDER_BROKEN_HEART2:
            return (await import("./icon_folder-broken-heart 2.svg")).default;

        case Icons.FOLDER_BROKEN_HEART:
            return (await import("./icon_folder-broken-heart.svg")).default;

        case Icons.FOLDER_CHECK2:
            return (await import("./icon_folder-check 2.svg")).default;

        case Icons.FOLDER_CHECK:
            return (await import("./icon_folder-check.svg")).default;

        case Icons.FOLDER_EDIT2:
            return (await import("./icon_folder-edit 2.svg")).default;

        case Icons.FOLDER_EDIT:
            return (await import("./icon_folder-edit.svg")).default;

        case Icons.FOLDER_EXCLAMATION_MARK2:
            return (await import("./icon_folder-exclamation-mark-2.svg")).default;

        case Icons.FOLDER_EXCLAMATION_MARK:
            return (await import("./icon_folder-exclamation-mark.svg")).default;

        case Icons.FOLDER_HEART2:
            return (await import("./icon_folder-heart 2.svg")).default;

        case Icons.FOLDER_HEART:
            return (await import("./icon_folder-heart.svg")).default;

        case Icons.FOLDER_INFO2:
            return (await import("./icon_folder-info-2.svg")).default;

        case Icons.FOLDER_INFO:
            return (await import("./icon_folder-info.svg")).default;

        case Icons.FOLDER_INVISIBLE2:
            return (await import("./icon_folder-invisible 2.svg")).default;

        case Icons.FOLDER_INVISIBLE:
            return (await import("./icon_folder-invisible.svg")).default;

        case Icons.FOLDER_MULTIPLY2:
            return (await import("./icon_folder-multiply 2.svg")).default;

        case Icons.FOLDER_MULTIPLY:
            return (await import("./icon_folder-multiply.svg")).default;

        case Icons.FOLDER_QUESTION_MARK2:
            return (await import("./icon_folder-question-mark-2.svg")).default;

        case Icons.FOLDER_QUESTION_MARK:
            return (await import("./icon_folder-question-mark.svg")).default;

        case Icons.FOLDER_SEARCH2:
            return (await import("./icon_folder-search 2.svg")).default;

        case Icons.FOLDER_SEARCH:
            return (await import("./icon_folder-search.svg")).default;

        case Icons.FOLDER_STAR2:
            return (await import("./icon_folder-star 2.svg")).default;

        case Icons.FOLDER_STAR:
            return (await import("./icon_folder-star.svg")).default;

        case Icons.FOLDER_SUBTRACT2:
            return (await import("./icon_folder-subtract 2.svg")).default;

        case Icons.FOLDER_SUBTRACT:
            return (await import("./icon_folder-subtract.svg")).default;

        case Icons.FOLDER_VISIBLE2:
            return (await import("./icon_folder-visible 2.svg")).default;

        case Icons.FOLDER_VISIBLE:
            return (await import("./icon_folder-visible.svg")).default;

        case Icons.FOLDER:
            return (await import("./icon_folder.svg")).default;

        case Icons.GIRL:
            return (await import("./icon_girl.svg")).default;

        case Icons.GIT_BRANCH:
            return (await import("./icon_git-branch.svg")).default;

        case Icons.GIT_COMPARE:
            return (await import("./icon_git-compare.svg")).default;

        case Icons.GIT_MERGE_QUEUE:
            return (await import("./icon_git-merge-queue.svg")).default;

        case Icons.GIT_MERGE:
            return (await import("./icon_git-merge.svg")).default;

        case Icons.GIT_PULL_REQUEST_CLOSED:
            return (await import("./icon_git-pull-request-closed.svg")).default;

        case Icons.GIT_PULL_REQUEST_DRAFT:
            return (await import("./icon_git-pull-request-draft.svg")).default;

        case Icons.GIT_PULL_REQUEST:
            return (await import("./icon_git-pull-request.svg")).default;

        case Icons.GIT_REPO_FORK:
            return (await import("./icon_git-repo-fork.svg")).default;

        case Icons.HEART_BROKEN_SMALL:
            return (await import("./icon_heart-broken-small.svg")).default;

        case Icons.HEART_FAT:
            return (await import("./icon_heart-fat.svg")).default;

        case Icons.HEART_L:
            return (await import("./icon_heart-l.svg")).default;

        case Icons.HEART_M:
            return (await import("./icon_heart-m.svg")).default;

        case Icons.HEART_SMALL:
            return (await import("./icon_heart-small.svg")).default;

        case Icons.INFO_FAT:
            return (await import("./icon_info-fat.svg")).default;

        case Icons.INFO_L:
            return (await import("./icon_info-l.svg")).default;

        case Icons.INFO_M:
            return (await import("./icon_info-m.svg")).default;

        case Icons.INFO_S:
            return (await import("./icon_info-s.svg")).default;

        case Icons.INVISIBLE_FAT:
            return (await import("./icon_invisible-fat.svg")).default;

        case Icons.INVISIBLE_L:
            return (await import("./icon_invisible-l.svg")).default;

        case Icons.INVISIBLE_M:
            return (await import("./icon_invisible-m.svg")).default;

        case Icons.INVISIBLE_S:
            return (await import("./icon_invisible-s.svg")).default;

        case Icons.KEY_BACKSPACE:
            return (await import("./icon_key-backspace.svg")).default;

        case Icons.KEY_DELETE:
            return (await import("./icon_key-delete.svg")).default;

        case Icons.KEY_DOWN:
            return (await import("./icon_key-down.svg")).default;

        case Icons.KEY_EJECT:
            return (await import("./icon_key-eject.svg")).default;

        case Icons.KEY_ENTER:
            return (await import("./icon_key-enter.svg")).default;

        case Icons.KEY_FUNCTION:
            return (await import("./icon_key-function.svg")).default;

        case Icons.KEY_MAC_COMMAND:
            return (await import("./icon_key-mac-command.svg")).default;

        case Icons.KEY_OPTION:
            return (await import("./icon_key-option.svg")).default;

        case Icons.KEY_PAGE_DOWN:
            return (await import("./icon_key-page-down.svg")).default;

        case Icons.KEY_PAGE_NEXT:
            return (await import("./icon_key-page-next.svg")).default;

        case Icons.KEY_PAGE_UP:
            return (await import("./icon_key-page-up.svg")).default;

        case Icons.KEY_PREVIOUS_UP:
            return (await import("./icon_key-previous-up.svg")).default;

        case Icons.KEY_SHIFT:
            return (await import("./icon_key-shift.svg")).default;

        case Icons.KEY_TAB:
            return (await import("./icon_key-tab.svg")).default;

        case Icons.KEY_UP:
            return (await import("./icon_key-up.svg")).default;

        case Icons.LIKE:
            return (await import("./icon_like.svg")).default;

        case Icons.LINK:
            return (await import("./icon_link.svg")).default;

        case Icons.LOADER_DOTS2:
            return (await import("./icon_loader-dots 2.svg")).default;

        case Icons.LOADER_DOTS:
            return (await import("./icon_loader-dots.svg")).default;

        case Icons.MALE_SIMPLIFIED:
            return (await import("./icon_male-simplified.svg")).default;

        case Icons.MOVING_BLOCK:
            return (await import("./icon_moving-block.svg")).default;

        case Icons.MULTIPLY_FAT:
            return (await import("./icon_multiply-fat.svg")).default;

        case Icons.MULTIPLY_L:
            return (await import("./icon_multiply-l.svg")).default;

        case Icons.MULTIPLY_M:
            return (await import("./icon_multiply-m.svg")).default;

        case Icons.MULTIPLY_S:
            return (await import("./icon_multiply-s.svg")).default;

        case Icons.NOTE_ADD2:
            return (await import("./icon_note-add 2.svg")).default;

        case Icons.NOTE_ADD:
            return (await import("./icon_note-add.svg")).default;

        case Icons.NOTE_BROKEN_HEART2:
            return (await import("./icon_note-broken-heart 2.svg")).default;

        case Icons.NOTE_BROKEN_HEART:
            return (await import("./icon_note-broken-heart.svg")).default;

        case Icons.NOTE_CHECK2:
            return (await import("./icon_note-check 2.svg")).default;

        case Icons.NOTE_CHECK:
            return (await import("./icon_note-check.svg")).default;

        case Icons.NOTE_EDIT2:
            return (await import("./icon_note-edit 2.svg")).default;

        case Icons.NOTE_EDIT:
            return (await import("./icon_note-edit.svg")).default;

        case Icons.NOTE_EXCLAMATION_MARK2:
            return (await import("./icon_note-exclamation-mark-2.svg")).default;

        case Icons.NOTE_EXCLAMATION_MARK:
            return (await import("./icon_note-exclamation-mark.svg")).default;

        case Icons.NOTE_HEART2:
            return (await import("./icon_note-heart 2.svg")).default;

        case Icons.NOTE_HEART:
            return (await import("./icon_note-heart.svg")).default;

        case Icons.NOTE_INFO2:
            return (await import("./icon_note-info-2.svg")).default;

        case Icons.NOTE_INFO:
            return (await import("./icon_note-info.svg")).default;

        case Icons.NOTE_INVISIBLE2:
            return (await import("./icon_note-invisible 2.svg")).default;

        case Icons.NOTE_INVISIBLE:
            return (await import("./icon_note-invisible.svg")).default;

        case Icons.NOTE_MULTIPLY2:
            return (await import("./icon_note-multiply 2.svg")).default;

        case Icons.NOTE_MULTIPLY:
            return (await import("./icon_note-multiply.svg")).default;

        case Icons.NOTE_QUESTION_MARK2:
            return (await import("./icon_note-question-mark-2.svg")).default;

        case Icons.NOTE_QUESTION_MARK:
            return (await import("./icon_note-question-mark.svg")).default;

        case Icons.NOTE_SEARCH2:
            return (await import("./icon_note-search 2.svg")).default;

        case Icons.NOTE_SEARCH:
            return (await import("./icon_note-search.svg")).default;

        case Icons.NOTE_STAR2:
            return (await import("./icon_note-star 2.svg")).default;

        case Icons.NOTE_STAR:
            return (await import("./icon_note-star.svg")).default;

        case Icons.NOTE_SUBTRACT2:
            return (await import("./icon_note-subtract 2.svg")).default;

        case Icons.NOTE_SUBTRACT:
            return (await import("./icon_note-subtract.svg")).default;

        case Icons.NOTE_VISIBLE2:
            return (await import("./icon_note-visible 2.svg")).default;

        case Icons.NOTE_VISIBLE:
            return (await import("./icon_note-visible.svg")).default;

        case Icons.NOTE:
            return (await import("./icon_note.svg")).default;

        case Icons.ON_TARGET:
            return (await import("./icon_on-target.svg")).default;

        case Icons.PARAGRAPH:
            return (await import("./icon_paragraph.svg")).default;

        case Icons.PERFORMANCE2:
            return (await import("./icon_performance 2.svg")).default;

        case Icons.PERFORMANCE:
            return (await import("./icon_performance.svg")).default;

        case Icons.PIN_TILTED:
            return (await import("./icon_pin-tilted.svg")).default;

        case Icons.PIN:
            return (await import("./icon_pin.svg")).default;

        case Icons.PLANNER:
            return (await import("./icon_planner.svg")).default;

        case Icons.POINTER_ARROW_LINE:
            return (await import("./icon_pointer-arrow-line.svg")).default;

        case Icons.POINTER_ARROW:
            return (await import("./icon_pointer-arrow.svg")).default;

        case Icons.POINTER_CROSS:
            return (await import("./icon_pointer-cross.svg")).default;

        case Icons.POINTER_HAND:
            return (await import("./icon_pointer-hand.svg")).default;

        case Icons.POINTER_LEFT:
            return (await import("./icon_pointer-left.svg")).default;

        case Icons.POINTER_MOUSE:
            return (await import("./icon_pointer-mouse.svg")).default;

        case Icons.POINTER_PEN:
            return (await import("./icon_pointer-pen.svg")).default;

        case Icons.POINTER_TEXT:
            return (await import("./icon_pointer-text.svg")).default;

        case Icons.QUESTION_MARK_FAT:
            return (await import("./icon_question-mark-fat.svg")).default;

        case Icons.QUESTION_MARK_L:
            return (await import("./icon_question-mark-l.svg")).default;

        case Icons.QUESTION_MARK_M:
            return (await import("./icon_question-mark-m.svg")).default;

        case Icons.QUESTION_MARK_S:
            return (await import("./icon_question-mark-s.svg")).default;

        case Icons.REMOVE_LINES:
            return (await import("./icon_remove-lines.svg")).default;

        case Icons.SEARCH_FAT:
            return (await import("./icon_search-fat.svg")).default;

        case Icons.SEARCH_L:
            return (await import("./icon_search-l.svg")).default;

        case Icons.SEARCH_M:
            return (await import("./icon_search-m.svg")).default;

        case Icons.SEARCH_SMALL:
            return (await import("./icon_search-small.svg")).default;

        case Icons.SECTION:
            return (await import("./icon_section.svg")).default;

        case Icons.SETTINGS2:
            return (await import("./icon_settings 2.svg")).default;

        case Icons.SETTINGS3:
            return (await import("./icon_settings 3.svg")).default;

        case Icons.SETTINGS4:
            return (await import("./icon_settings 4.svg")).default;

        case Icons.SETTINGS5:
            return (await import("./icon_settings 5.svg")).default;

        case Icons.SETTINGS:
            return (await import("./icon_settings.svg")).default;

        case Icons.SPEECH_BALLOON2:
            return (await import("./icon_speech-balloon-2.svg")).default;

        case Icons.SPEECH_BALLOON_SQUARE2:
            return (await import("./icon_speech-balloon-square 2.svg")).default;

        case Icons.SPEECH_BALLOON_SQUARE_COPY:
            return (await import("./icon_speech-balloon-square copy.svg")).default;

        case Icons.SPEECH_BALLOON_SQUARE_TEXT:
            return (await import("./icon_speech-balloon-square-text.svg")).default;

        case Icons.SPEECH_BALLOON_SQUARE:
            return (await import("./icon_speech-balloon-square.svg")).default;

        case Icons.SPEECH_BALLOON:
            return (await import("./icon_speech-balloon.svg")).default;

        case Icons.SPEECH_BALLOONS:
            return (await import("./icon_speech-balloons.svg")).default;

        case Icons.SQUARED_ADD:
            return (await import("./icon_squared-add.svg")).default;

        case Icons.SQUARED_BROKEN_HEART:
            return (await import("./icon_squared-broken-heart.svg")).default;

        case Icons.SQUARED_CHECK:
            return (await import("./icon_squared-check.svg")).default;

        case Icons.SQUARED_EDIT:
            return (await import("./icon_squared-edit.svg")).default;

        case Icons.SQUARED_EXCLAMATION_MARK:
            return (await import("./icon_squared-exclamation-mark.svg")).default;

        case Icons.SQUARED_HEART:
            return (await import("./icon_squared-heart.svg")).default;

        case Icons.SQUARED_INFO:
            return (await import("./icon_squared-info.svg")).default;

        case Icons.SQUARED_INVISIBLE:
            return (await import("./icon_squared-invisible.svg")).default;

        case Icons.SQUARED_MULTIPLY:
            return (await import("./icon_squared-multiply.svg")).default;

        case Icons.SQUARED_QUESTION_MARK:
            return (await import("./icon_squared-question-mark.svg")).default;

        case Icons.SQUARED_SEARCH:
            return (await import("./icon_squared-search.svg")).default;

        case Icons.SQUARED_STAR:
            return (await import("./icon_squared-star.svg")).default;

        case Icons.SQUARED_SUBTRACT:
            return (await import("./icon_squared-subtract.svg")).default;

        case Icons.SQUARED_VISIBLE:
            return (await import("./icon_squared-visible.svg")).default;

        case Icons.SQUARED:
            return (await import("./icon_squared.svg")).default;

        case Icons.STAMP:
            return (await import("./icon_stamp.svg")).default;

        case Icons.STAR_FAT:
            return (await import("./icon_star-fat.svg")).default;

        case Icons.STAR_L:
            return (await import("./icon_star-l.svg")).default;

        case Icons.STAR_M:
            return (await import("./icon_star-m.svg")).default;

        case Icons.STAR_SMALL:
            return (await import("./icon_star-small.svg")).default;

        case Icons.STICKER:
            return (await import("./icon_sticker.svg")).default;

        case Icons.STOPWATCH:
            return (await import("./icon_stopwatch.svg")).default;

        case Icons.SUBTRACT_FAT:
            return (await import("./icon_subtract-fat.svg")).default;

        case Icons.SUBTRACT_L:
            return (await import("./icon_subtract-l.svg")).default;

        case Icons.SUBTRACT_M:
            return (await import("./icon_subtract-m.svg")).default;

        case Icons.SUBTRACT_S:
            return (await import("./icon_subtract-s.svg")).default;

        case Icons.TABLES:
            return (await import("./icon_tables.svg")).default;

        case Icons.TALK_ADD:
            return (await import("./icon_talk-add.svg")).default;

        case Icons.TALK_CHECK:
            return (await import("./icon_talk-check.svg")).default;

        case Icons.TALK_DELETE:
            return (await import("./icon_talk-delete.svg")).default;

        case Icons.TALK_EDIT:
            return (await import("./icon_talk-edit.svg")).default;

        case Icons.TALK_EXCLAMATION_MARK:
            return (await import("./icon_talk-exclamation-mark.svg")).default;

        case Icons.TALK_HEART_BROKEN:
            return (await import("./icon_talk-heart-broken.svg")).default;

        case Icons.TALK_HEART:
            return (await import("./icon_talk-heart.svg")).default;

        case Icons.TALK_INFO:
            return (await import("./icon_talk-info.svg")).default;

        case Icons.TALK_INVISIBLE:
            return (await import("./icon_talk-invisible.svg")).default;

        case Icons.TALK_QUESTION_MARK:
            return (await import("./icon_talk-question-mark.svg")).default;

        case Icons.TALK_SEARCH:
            return (await import("./icon_talk-search.svg")).default;

        case Icons.TALK_STAR:
            return (await import("./icon_talk-star.svg")).default;

        case Icons.TALK_SUBTRACT:
            return (await import("./icon_talk-subtract.svg")).default;

        case Icons.TALK_VISIBLE:
            return (await import("./icon_talk-visible.svg")).default;

        case Icons.TALK:
            return (await import("./icon_talk.svg")).default;

        case Icons.TARGET:
            return (await import("./icon_target.svg")).default;

        case Icons.TEXT_ALIGN_CENTER:
            return (await import("./icon_text-align-center.svg")).default;

        case Icons.TEXT_ALIGN_JUSTIFY_CENTERED:
            return (await import("./icon_text-align-justify-centered.svg")).default;

        case Icons.TEXT_ALIGN_JUSTIFY_LEFT:
            return (await import("./icon_text-align-justify-left.svg")).default;

        case Icons.TEXT_ALIGN_JUSTIFY_RIGHT:
            return (await import("./icon_text-align-justify-right.svg")).default;

        case Icons.TEXT_ALIGN_JUSTIFY:
            return (await import("./icon_text-align-justify.svg")).default;

        case Icons.TEXT_ALIGN_LEFT:
            return (await import("./icon_text-align-left.svg")).default;

        case Icons.TEXT_ALIGN_RIGHT_ORDER_DESC:
            return (await import("./icon_text-align-right-order-desc.svg")).default;

        case Icons.TEXT_ALIGN_RIGHT:
            return (await import("./icon_text-align-right.svg")).default;

        case Icons.TEXT_BOLD:
            return (await import("./icon_text-bold.svg")).default;

        case Icons.TEXT_DETAIL_LIST:
            return (await import("./icon_text-detail-list.svg")).default;

        case Icons.TEXT_INDENT:
            return (await import("./icon_text-indent.svg")).default;

        case Icons.TEXT_ITALIC:
            return (await import("./icon_text-italic.svg")).default;

        case Icons.TEXT_LINE_THROUGH:
            return (await import("./icon_text-line-through.svg")).default;

        case Icons.TEXT_ORDER_ASC114:
            return (await import("./icon_text-order-asc-114.svg")).default;

        case Icons.TEXT_ORDER_ASC118:
            return (await import("./icon_text-order-asc-118.svg")).default;

        case Icons.TEXT_ORDER_DESC_COPY2:
            return (await import("./icon_text-order-desc copy 2.svg")).default;

        case Icons.TEXT_ORDER_DESC_COPY3:
            return (await import("./icon_text-order-desc copy 3.svg")).default;

        case Icons.TEXT_ORDER_DESC_COPY:
            return (await import("./icon_text-order-desc copy.svg")).default;

        case Icons.TEXT_ORDER_DESC:
            return (await import("./icon_text-order-desc.svg")).default;

        case Icons.TEXT_OUTDENT:
            return (await import("./icon_text-outdent.svg")).default;

        case Icons.TEXT_UNDERLINE:
            return (await import("./icon_text-underline.svg")).default;

        case Icons.TIMER:
            return (await import("./icon_timer.svg")).default;

        case Icons.TRASH2:
            return (await import("./icon_trash-2.svg")).default;

        case Icons.TRASH:
            return (await import("./icon_trash.svg")).default;

        case Icons.TRIANGLED_EXCLAMATION_MARK:
            return (await import("./icon_triangled-exclamation-mark.svg")).default;

        case Icons.TRIANGLED_INFO:
            return (await import("./icon_triangled-info.svg")).default;

        case Icons.TRIANGLED_QUESTION_MARK:
            return (await import("./icon_triangled-question-mark.svg")).default;

        case Icons.TRIANGLED:
            return (await import("./icon_triangled.svg")).default;

        case Icons.USER_ADD:
            return (await import("./icon_user-add.svg")).default;

        case Icons.USER_DELETE:
            return (await import("./icon_user-delete.svg")).default;

        case Icons.USER_GROUP:
            return (await import("./icon_user-group.svg")).default;

        case Icons.USER:
            return (await import("./icon_user.svg")).default;

        case Icons.USERS:
            return (await import("./icon_users.svg")).default;

        case Icons.VISIBLE_FAT:
            return (await import("./icon_visible-fat.svg")).default;

        case Icons.VISIBLE_L:
            return (await import("./icon_visible-l.svg")).default;

        case Icons.VISIBLE_M:
            return (await import("./icon_visible-m.svg")).default;

        case Icons.VISIBLE_S:
            return (await import("./icon_visible-s.svg")).default;

        case Icons.WHEELCHAIR_ACTION:
            return (await import("./icon_wheelchair-action.svg")).default;

        case Icons.WHEELCHAIR:
            return (await import("./icon_wheelchair.svg")).default;

        case Icons.AIRPLANE_ARRIVALS:
            return (await import("./icon_airplane-arrivals.svg")).default;

        case Icons.AIRPLANE_DEPARTURES:
            return (await import("./icon_airplane-departures.svg")).default;

        case Icons.AIRPLANE:
            return (await import("./icon_airplane.svg")).default;

        case Icons.AIRPORT_CONNECT_FLIGHTS:
            return (await import("./icon_airport-connect-flights.svg")).default;

        case Icons.AIRPORT_TRANSFER2:
            return (await import("./icon_airport-transfer 2.svg")).default;

        case Icons.AIRPORT_TRANSFER:
            return (await import("./icon_airport-transfer.svg")).default;

        case Icons.ANCHOR:
            return (await import("./icon_anchor.svg")).default;

        case Icons.BICYCLE_SURFBOARD:
            return (await import("./icon_bicycle-surfboard.svg")).default;

        case Icons.BICYCLE:
            return (await import("./icon_bicycle.svg")).default;

        case Icons.BRIEFCASE_CROSS:
            return (await import("./icon_briefcase-cross.svg")).default;

        case Icons.CAR_PARKING_INDOOR:
            return (await import("./icon_car-parking-indoor.svg")).default;

        case Icons.CAR_PARKING_OUTSIDE:
            return (await import("./icon_car-parking-outside.svg")).default;

        case Icons.CAR_PARKING:
            return (await import("./icon_car-parking.svg")).default;

        case Icons.CAR:
            return (await import("./icon_car.svg")).default;

        case Icons.CHANGING_AREA:
            return (await import("./icon_changing-area.svg")).default;

        case Icons.CHECK_IN:
            return (await import("./icon_check in.svg")).default;

        case Icons.CITY_BUS:
            return (await import("./icon_city-bus.svg")).default;

        case Icons.CROSS_CIRCLED:
            return (await import("./icon_cross-circled.svg")).default;

        case Icons.CROSS:
            return (await import("./icon_cross.svg")).default;

        case Icons.CRUISESHIP:
            return (await import("./icon_cruiseship.svg")).default;

        case Icons.ELEVATOR1:
            return (await import("./icon_elevator 1.svg")).default;

        case Icons.ELEVATOR2:
            return (await import("./icon_elevator 2.svg")).default;

        case Icons.ELEVATOR3:
            return (await import("./icon_elevator 3.svg")).default;

        case Icons.ELEVATOR4:
            return (await import("./icon_elevator 4.svg")).default;

        case Icons.ESCALATOR_DOWN:
            return (await import("./icon_escalator-down.svg")).default;

        case Icons.ESCALATOR_UP:
            return (await import("./icon_escalator-up.svg")).default;

        case Icons.ESCALATOR:
            return (await import("./icon_escalator.svg")).default;

        case Icons.FAMILY:
            return (await import("./icon_family.svg")).default;

        case Icons.FERRY:
            return (await import("./icon_ferry.svg")).default;

        case Icons.FIRE_EXTINGUISHER:
            return (await import("./icon_fire-extinguisher.svg")).default;

        case Icons.FIRE_FLAME:
            return (await import("./icon_fire-flame.svg")).default;

        case Icons.FIRE_HOSE:
            return (await import("./icon_fire-hose.svg")).default;

        case Icons.GRAVESTONE2:
            return (await import("./icon_gravestone 2.svg")).default;

        case Icons.GRAVESTONE3:
            return (await import("./icon_gravestone 3.svg")).default;

        case Icons.GRAVESTONE:
            return (await import("./icon_gravestone.svg")).default;

        case Icons.HELLO_GOODBYE:
            return (await import("./icon_hello-goodbye.svg")).default;

        case Icons.LOCATION_MARKER:
            return (await import("./icon_location-marker.svg")).default;

        case Icons.LOCATION_PATH2:
            return (await import("./icon_location-path 2.svg")).default;

        case Icons.LOCATION_PATH:
            return (await import("./icon_location-path.svg")).default;

        case Icons.LOCATION_PIN:
            return (await import("./icon_location-pin.svg")).default;

        case Icons.LOUNGE:
            return (await import("./icon_lounge.svg")).default;

        case Icons.LUGGAGE_BELT:
            return (await import("./icon_luggage-belt.svg")).default;

        case Icons.LUGGAGE_LOCKER:
            return (await import("./icon_luggage-locker.svg")).default;

        case Icons.LUGGAGE_TROLLEY:
            return (await import("./icon_luggage-trolley.svg")).default;

        case Icons.LUGGAGE:
            return (await import("./icon_luggage.svg")).default;

        case Icons.MAP:
            return (await import("./icon_map.svg")).default;

        case Icons.MAP2:
            return (await import("./icon_map2.svg")).default;

        case Icons.MAP3:
            return (await import("./icon_map3.svg")).default;

        case Icons.METRO2:
            return (await import("./icon_metro 2.svg")).default;

        case Icons.METRO:
            return (await import("./icon_metro.svg")).default;

        case Icons.NO_SMOKING_CIRCLED:
            return (await import("./icon_no-smoking-circled.svg")).default;

        case Icons.NO_SMOKING:
            return (await import("./icon_no-smoking.svg")).default;

        case Icons.OFFICE_SPACE:
            return (await import("./icon_office-space.svg")).default;

        case Icons.PALMTREE_ISLAND_WAVE:
            return (await import("./icon_palmtree-island-wave.svg")).default;

        case Icons.PALMTREE_ISLAND:
            return (await import("./icon_palmtree-island.svg")).default;

        case Icons.PALMTREE:
            return (await import("./icon_palmtree.svg")).default;

        case Icons.PARASOL_ISLAND_WAVE:
            return (await import("./icon_parasol-island-wave.svg")).default;

        case Icons.PARASOL_ISLAND:
            return (await import("./icon_parasol-island.svg")).default;

        case Icons.PARASOL:
            return (await import("./icon_parasol.svg")).default;

        case Icons.PLASTER:
            return (await import("./icon_plaster.svg")).default;

        case Icons.PLASTERS:
            return (await import("./icon_plasters.svg")).default;

        case Icons.POINTER_TARGET:
            return (await import("./icon_pointer-target.svg")).default;

        case Icons.RENTAL_CAR:
            return (await import("./icon_rental-car.svg")).default;

        case Icons.RESTROOM:
            return (await import("./icon_restroom.svg")).default;

        case Icons.SECURITY_CAMERA2:
            return (await import("./icon_security camera 2.svg")).default;

        case Icons.SECURITY_CAMERA3:
            return (await import("./icon_security camera 3.svg")).default;

        case Icons.SECURITY_CAMERA:
            return (await import("./icon_security camera.svg")).default;

        case Icons.SECURITY_CHECK:
            return (await import("./icon_security-check.svg")).default;

        case Icons.SHIP:
            return (await import("./icon_ship.svg")).default;

        case Icons.SIGNPOST2:
            return (await import("./icon_signpost-2.svg")).default;

        case Icons.SIGNPOST:
            return (await import("./icon_signpost.svg")).default;

        case Icons.SMOKING:
            return (await import("./icon_smoking.svg")).default;

        case Icons.STAIRS_DOWN:
            return (await import("./icon_stairs-down.svg")).default;

        case Icons.STAIRS_UP:
            return (await import("./icon_stairs-up.svg")).default;

        case Icons.STAIRS:
            return (await import("./icon_stairs.svg")).default;

        case Icons.TAXI_STOP:
            return (await import("./icon_taxi-stop.svg")).default;

        case Icons.TAXI:
            return (await import("./icon_taxi.svg")).default;

        case Icons.TRAIN_TRACK:
            return (await import("./icon_train-track.svg")).default;

        case Icons.TRAIN:
            return (await import("./icon_train.svg")).default;

        case Icons.WALKING2:
            return (await import("./icon_walking 2.svg")).default;

        case Icons.WALKING:
            return (await import("./icon_walking.svg")).default;

        case Icons.CLOUD_LIGHTNING:
            return (await import("./icon_cloud-lightning.svg")).default;

        case Icons.CLOUD_RAIN2:
            return (await import("./icon_cloud-rain 2.svg")).default;

        case Icons.CLOUD_SMALL_RAIN:
            return (await import("./icon_cloud-small-rain.svg")).default;

        case Icons.CLOUD_SUN:
            return (await import("./icon_cloud-sun.svg")).default;

        case Icons.CLOUD_THERMOMETER:
            return (await import("./icon_cloud-thermometer.svg")).default;

        case Icons.CLOUD:
            return (await import("./icon_cloud.svg")).default;

        case Icons.LIGHT_DARK_MODE2:
            return (await import("./icon_light-dark-mode-2.svg")).default;

        case Icons.LIGHT_DARK_MODE3:
            return (await import("./icon_light-dark-mode-3.svg")).default;

        case Icons.LIGHTNING_FLASH:
            return (await import("./icon_lightning-flash.svg")).default;

        case Icons.MOON01:
            return (await import("./icon_moon-01.svg")).default;

        case Icons.MOON19:
            return (await import("./icon_moon-19.svg")).default;

        case Icons.MOON_DARK_MODE:
            return (await import("./icon_moon-dark-mode.svg")).default;

        case Icons.SIMPLE_SUN:
            return (await import("./icon_simple-sun.svg")).default;

        case Icons.SUN2:
            return (await import("./icon_sun 2.svg")).default;

        case Icons.SUN_LIGHT_MODE:
            return (await import("./icon_sun-light-mode.svg")).default;

        case Icons.SUN:
            return (await import("./icon_sun.svg")).default;

        case Icons.THERMOMETER_COLD:
            return (await import("./icon_thermometer-cold.svg")).default;

        case Icons.THERMOMETER_HOT:
            return (await import("./icon_thermometer-hot.svg")).default;

        case Icons.THERMOMETER:
            return (await import("./icon_thermometer.svg")).default;
        default:
          return null;
    }
      }