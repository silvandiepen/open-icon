import { Icons } from "./types";


export const getIcon = async (icon: Icons) => {
    switch(icon) {
    
        case Icons.ICON24:
            return (await import("./icon24")).IconIcon24;
    
        case Icons.ARROW_CORNER_DOWN:
            return (await import("./arrow-corner-down")).IconArrowCornerDown;
    
        case Icons.ARROW_CORNER_LEFT:
            return (await import("./arrow-corner-left")).IconArrowCornerLeft;
    
        case Icons.ARROW_CORNER_RIGHT:
            return (await import("./arrow-corner-right")).IconArrowCornerRight;
    
        case Icons.ARROW_CORNER_UP:
            return (await import("./arrow-corner-up")).IconArrowCornerUp;
    
        case Icons.ARROW_DIAGONAL_BL_TR_STOP:
            return (await import("./arrow-diagonal-bl-tr-stop")).IconArrowDiagonalBlTrStop;
    
        case Icons.ARROW_DIAGONAL_BR_TL_STOP:
            return (await import("./arrow-diagonal-br-tl-stop")).IconArrowDiagonalBrTlStop;
    
        case Icons.ARROW_DIAGONAL_IN_LT_BR:
            return (await import("./arrow-diagonal-in-lt-br")).IconArrowDiagonalInLtBr;
    
        case Icons.ARROW_DIAGONAL_IN_TR_BL:
            return (await import("./arrow-diagonal-in-tr-bl")).IconArrowDiagonalInTrBl;
    
        case Icons.ARROW_DIAGONAL_TL_BR_SPLIT:
            return (await import("./arrow-diagonal-tl-br-split")).IconArrowDiagonalTlBrSplit;
    
        case Icons.ARROW_DIAGONAL_TL_BR_STOP:
            return (await import("./arrow-diagonal-tl-br-stop")).IconArrowDiagonalTlBrStop;
    
        case Icons.ARROW_DIAGONAL_TL_BR:
            return (await import("./arrow-diagonal-tl-br")).IconArrowDiagonalTlBr;
    
        case Icons.ARROW_DIAGONAL_TR_BL_SPLIT:
            return (await import("./arrow-diagonal-tr-bl-split")).IconArrowDiagonalTrBlSplit;
    
        case Icons.ARROW_DIAGONAL_TR_BL_STOP:
            return (await import("./arrow-diagonal-tr-bl-stop")).IconArrowDiagonalTrBlStop;
    
        case Icons.ARROW_DIAGONAL_TR_BL:
            return (await import("./arrow-diagonal-tr-bl")).IconArrowDiagonalTrBl;
    
        case Icons.ARROW_DOWN_COPY:
            return (await import("./arrow-down-copy")).IconArrowDownCopy;
    
        case Icons.ARROW_DOWN_LEFT:
            return (await import("./arrow-down-left")).IconArrowDownLeft;
    
        case Icons.ARROW_DOWN_RIGHT:
            return (await import("./arrow-down-right")).IconArrowDownRight;
    
        case Icons.ARROW_DOWN:
            return (await import("./arrow-down")).IconArrowDown;
    
        case Icons.ARROW_DOWNLOAD:
            return (await import("./arrow-download")).IconArrowDownload;
    
        case Icons.ARROW_HEADED_CORNER_DOWN:
            return (await import("./arrow-headed-corner-down")).IconArrowHeadedCornerDown;
    
        case Icons.ARROW_HEADED_CORNER_LEFT:
            return (await import("./arrow-headed-corner-left")).IconArrowHeadedCornerLeft;
    
        case Icons.ARROW_HEADED_CORNER_RIGHT:
            return (await import("./arrow-headed-corner-right")).IconArrowHeadedCornerRight;
    
        case Icons.ARROW_HEADED_CORNER_UP:
            return (await import("./arrow-headed-corner-up")).IconArrowHeadedCornerUp;
    
        case Icons.ARROW_HEADED_DIAGONAL_BL_TR_STOP:
            return (await import("./arrow-headed-diagonal-bl-tr-stop")).IconArrowHeadedDiagonalBlTrStop;
    
        case Icons.ARROW_HEADED_DIAGONAL_BR_TL_STOP:
            return (await import("./arrow-headed-diagonal-br-tl-stop")).IconArrowHeadedDiagonalBrTlStop;
    
        case Icons.ARROW_HEADED_DIAGONAL_IN_LT_BR:
            return (await import("./arrow-headed-diagonal-in-lt-br")).IconArrowHeadedDiagonalInLtBr;
    
        case Icons.ARROW_HEADED_DIAGONAL_IN_TR_BL:
            return (await import("./arrow-headed-diagonal-in-tr-bl")).IconArrowHeadedDiagonalInTrBl;
    
        case Icons.ARROW_HEADED_DIAGONAL_TL_BR_SPLIT:
            return (await import("./arrow-headed-diagonal-tl-br-split")).IconArrowHeadedDiagonalTlBrSplit;
    
        case Icons.ARROW_HEADED_DIAGONAL_TL_BR_STOP:
            return (await import("./arrow-headed-diagonal-tl-br-stop")).IconArrowHeadedDiagonalTlBrStop;
    
        case Icons.ARROW_HEADED_DIAGONAL_TL_BR:
            return (await import("./arrow-headed-diagonal-tl-br")).IconArrowHeadedDiagonalTlBr;
    
        case Icons.ARROW_HEADED_DIAGONAL_TR_BL_SPLIT:
            return (await import("./arrow-headed-diagonal-tr-bl-split")).IconArrowHeadedDiagonalTrBlSplit;
    
        case Icons.ARROW_HEADED_DIAGONAL_TR_BL_STOP:
            return (await import("./arrow-headed-diagonal-tr-bl-stop")).IconArrowHeadedDiagonalTrBlStop;
    
        case Icons.ARROW_HEADED_DIAGONAL_TR_BL:
            return (await import("./arrow-headed-diagonal-tr-bl")).IconArrowHeadedDiagonalTrBl;
    
        case Icons.ARROW_HEADED_DOWN_LEFT:
            return (await import("./arrow-headed-down-left")).IconArrowHeadedDownLeft;
    
        case Icons.ARROW_HEADED_DOWN_RIGHT:
            return (await import("./arrow-headed-down-right")).IconArrowHeadedDownRight;
    
        case Icons.ARROW_HEADED_DOWN_STOP:
            return (await import("./arrow-headed-down-stop")).IconArrowHeadedDownStop;
    
        case Icons.ARROW_HEADED_DOWN:
            return (await import("./arrow-headed-down")).IconArrowHeadedDown;
    
        case Icons.ARROW_HEADED_DOWNLOAD:
            return (await import("./arrow-headed-download")).IconArrowHeadedDownload;
    
        case Icons.ARROW_HEADED_IN_CENTER:
            return (await import("./arrow-headed-in-center")).IconArrowHeadedInCenter;
    
        case Icons.ARROW_HEADED_IN_DIAGONAL:
            return (await import("./arrow-headed-in-diagonal")).IconArrowHeadedInDiagonal;
    
        case Icons.ARROW_HEADED_IN:
            return (await import("./arrow-headed-in")).IconArrowHeadedIn;
    
        case Icons.ARROW_HEADED_LEFT_RIGHT_SPLIT:
            return (await import("./arrow-headed-left-right-split")).IconArrowHeadedLeftRightSplit;
    
        case Icons.ARROW_HEADED_LEFT_RIGHT_STOP:
            return (await import("./arrow-headed-left-right-stop")).IconArrowHeadedLeftRightStop;
    
        case Icons.ARROW_HEADED_LEFT_RIGHT:
            return (await import("./arrow-headed-left-right")).IconArrowHeadedLeftRight;
    
        case Icons.ARROW_HEADED_LEFT_STOP:
            return (await import("./arrow-headed-left-stop")).IconArrowHeadedLeftStop;
    
        case Icons.ARROW_HEADED_LEFT:
            return (await import("./arrow-headed-left")).IconArrowHeadedLeft;
    
        case Icons.ARROW_HEADED_OUT_CENTER:
            return (await import("./arrow-headed-out-center")).IconArrowHeadedOutCenter;
    
        case Icons.ARROW_HEADED_RELOAD_DOWN_UP:
            return (await import("./arrow-headed-reload-down-up")).IconArrowHeadedReloadDownUp;
    
        case Icons.ARROW_HEADED_RELOAD_LEFT_RIGHT:
            return (await import("./arrow-headed-reload-left-right")).IconArrowHeadedReloadLeftRight;
    
        case Icons.ARROW_HEADED_RELOAD_RIGHT_LEFT:
            return (await import("./arrow-headed-reload-right-left")).IconArrowHeadedReloadRightLeft;
    
        case Icons.ARROW_HEADED_RELOAD_UP_DOWN:
            return (await import("./arrow-headed-reload-up-down")).IconArrowHeadedReloadUpDown;
    
        case Icons.ARROW_HEADED_RETURN_DOWN:
            return (await import("./arrow-headed-return-down")).IconArrowHeadedReturnDown;
    
        case Icons.ARROW_HEADED_RETURN_LEFT:
            return (await import("./arrow-headed-return-left")).IconArrowHeadedReturnLeft;
    
        case Icons.ARROW_HEADED_RETURN_RIGHT:
            return (await import("./arrow-headed-return-right")).IconArrowHeadedReturnRight;
    
        case Icons.ARROW_HEADED_RETURN_UP:
            return (await import("./arrow-headed-return-up")).IconArrowHeadedReturnUp;
    
        case Icons.ARROW_HEADED_RIGHT:
            return (await import("./arrow-headed-right")).IconArrowHeadedRight;
    
        case Icons.ARROW_HEADED_ROTATE_BOTTOM_LEFT:
            return (await import("./arrow-headed-rotate-bottom-left")).IconArrowHeadedRotateBottomLeft;
    
        case Icons.ARROW_HEADED_ROTATE_BOTTOM_RIGHT:
            return (await import("./arrow-headed-rotate-bottom-right")).IconArrowHeadedRotateBottomRight;
    
        case Icons.ARROW_HEADED_ROTATE_TOP_LEFT:
            return (await import("./arrow-headed-rotate-top-left")).IconArrowHeadedRotateTopLeft;
    
        case Icons.ARROW_HEADED_ROTATE_TOP_RIGHT:
            return (await import("./arrow-headed-rotate-top-right")).IconArrowHeadedRotateTopRight;
    
        case Icons.ARROW_HEADED_ROUNDED_LEFT_UP:
            return (await import("./arrow-headed-rounded-left-up")).IconArrowHeadedRoundedLeftUp;
    
        case Icons.ARROW_HEADED_ROUNDED_RIGHT_DOWN:
            return (await import("./arrow-headed-rounded-right-down")).IconArrowHeadedRoundedRightDown;
    
        case Icons.ARROW_HEADED_ROUNDED_RIGHT_UP:
            return (await import("./arrow-headed-rounded-right-up")).IconArrowHeadedRoundedRightUp;
    
        case Icons.ARROW_HEADED_ROUNED_LEFT_DOWN:
            return (await import("./arrow-headed-rouned-left-down")).IconArrowHeadedRounedLeftDown;
    
        case Icons.ARROW_HEADED_SHARE:
            return (await import("./arrow-headed-share")).IconArrowHeadedShare;
    
        case Icons.ARROW_HEADED_SPREAD_SPLIT:
            return (await import("./arrow-headed-spread-split")).IconArrowHeadedSpreadSplit;
    
        case Icons.ARROW_HEADED_SPREAD:
            return (await import("./arrow-headed-spread")).IconArrowHeadedSpread;
    
        case Icons.ARROW_HEADED_TWOWAY_DIAGONAL_LR:
            return (await import("./arrow-headed-twoway-diagonal-lr")).IconArrowHeadedTwowayDiagonalLr;
    
        case Icons.ARROW_HEADED_TWOWAY_DIAGONAL_RL:
            return (await import("./arrow-headed-twoway-diagonal-rl")).IconArrowHeadedTwowayDiagonalRl;
    
        case Icons.ARROW_HEADED_TWOWAY_HORIZONTAL:
            return (await import("./arrow-headed-twoway-horizontal")).IconArrowHeadedTwowayHorizontal;
    
        case Icons.ARROW_HEADED_TWOWAY_VERTICAL:
            return (await import("./arrow-headed-twoway-vertical")).IconArrowHeadedTwowayVertical;
    
        case Icons.ARROW_HEADED_UP_DOWN_SPLIT:
            return (await import("./arrow-headed-up-down-split")).IconArrowHeadedUpDownSplit;
    
        case Icons.ARROW_HEADED_UP_DOWN_STOP:
            return (await import("./arrow-headed-up-down-stop")).IconArrowHeadedUpDownStop;
    
        case Icons.ARROW_HEADED_UP_DOWN:
            return (await import("./arrow-headed-up-down")).IconArrowHeadedUpDown;
    
        case Icons.ARROW_HEADED_UP_LEFT:
            return (await import("./arrow-headed-up-left")).IconArrowHeadedUpLeft;
    
        case Icons.ARROW_HEADED_UP_RIGHT:
            return (await import("./arrow-headed-up-right")).IconArrowHeadedUpRight;
    
        case Icons.ARROW_HEADED_UP_STOP76:
            return (await import("./arrow-headed-up-stop76")).IconArrowHeadedUpStop76;
    
        case Icons.ARROW_HEADED_UP_STOP78:
            return (await import("./arrow-headed-up-stop78")).IconArrowHeadedUpStop78;
    
        case Icons.ARROW_HEADED_UP:
            return (await import("./arrow-headed-up")).IconArrowHeadedUp;
    
        case Icons.ARROW_HEADED_UPLOAD:
            return (await import("./arrow-headed-upload")).IconArrowHeadedUpload;
    
        case Icons.ARROW_IN_CENTER:
            return (await import("./arrow-in-center")).IconArrowInCenter;
    
        case Icons.ARROW_INVERT:
            return (await import("./arrow-invert")).IconArrowInvert;
    
        case Icons.ARROW_LEFT_RIGHT_SPLIT:
            return (await import("./arrow-left-right-split")).IconArrowLeftRightSplit;
    
        case Icons.ARROW_LEFT_RIGHT_STOP:
            return (await import("./arrow-left-right-stop")).IconArrowLeftRightStop;
    
        case Icons.ARROW_LEFT_RIGHT:
            return (await import("./arrow-left-right")).IconArrowLeftRight;
    
        case Icons.ARROW_LEFT_STOP:
            return (await import("./arrow-left-stop")).IconArrowLeftStop;
    
        case Icons.ARROW_LEFT:
            return (await import("./arrow-left")).IconArrowLeft;
    
        case Icons.ARROW_OUT_CENTER:
            return (await import("./arrow-out-center")).IconArrowOutCenter;
    
        case Icons.ARROW_RELOAD_DOWN_UP:
            return (await import("./arrow-reload-down-up")).IconArrowReloadDownUp;
    
        case Icons.ARROW_RELOAD_LEFT_RIGHT:
            return (await import("./arrow-reload-left-right")).IconArrowReloadLeftRight;
    
        case Icons.ARROW_RELOAD_RIGHT_LEFT:
            return (await import("./arrow-reload-right-left")).IconArrowReloadRightLeft;
    
        case Icons.ARROW_RELOAD_UP_DOWN:
            return (await import("./arrow-reload-up-down")).IconArrowReloadUpDown;
    
        case Icons.ARROW_RETURN_DOWN:
            return (await import("./arrow-return-down")).IconArrowReturnDown;
    
        case Icons.ARROW_RETURN_LEFT:
            return (await import("./arrow-return-left")).IconArrowReturnLeft;
    
        case Icons.ARROW_RETURN_RIGHT:
            return (await import("./arrow-return-right")).IconArrowReturnRight;
    
        case Icons.ARROW_RETURN_UP:
            return (await import("./arrow-return-up")).IconArrowReturnUp;
    
        case Icons.ARROW_RIGHT_STOP:
            return (await import("./arrow-right-stop")).IconArrowRightStop;
    
        case Icons.ARROW_RIGHT:
            return (await import("./arrow-right")).IconArrowRight;
    
        case Icons.ARROW_ROATE_BOTTOM_RIGHT:
            return (await import("./arrow-roate-bottom-right")).IconArrowRoateBottomRight;
    
        case Icons.ARROW_ROTATE_BOTTOM_LEFT:
            return (await import("./arrow-rotate-bottom-left")).IconArrowRotateBottomLeft;
    
        case Icons.ARROW_ROTATE_TOP_LEFT:
            return (await import("./arrow-rotate-top-left")).IconArrowRotateTopLeft;
    
        case Icons.ARROW_ROTATE_TOP_RIGHT:
            return (await import("./arrow-rotate-top-right")).IconArrowRotateTopRight;
    
        case Icons.ARROW_ROUNDED_LEFT_DOWN:
            return (await import("./arrow-rounded-left-down")).IconArrowRoundedLeftDown;
    
        case Icons.ARROW_ROUNDED_LEFT_UP:
            return (await import("./arrow-rounded-left-up")).IconArrowRoundedLeftUp;
    
        case Icons.ARROW_ROUNDED_RIGHT_DOWN:
            return (await import("./arrow-rounded-right-down")).IconArrowRoundedRightDown;
    
        case Icons.ARROW_ROUNDED_RIGHT_UP:
            return (await import("./arrow-rounded-right-up")).IconArrowRoundedRightUp;
    
        case Icons.ARROW_SHARE:
            return (await import("./arrow-share")).IconArrowShare;
    
        case Icons.ARROW_SPREAD_SPLIT:
            return (await import("./arrow-spread-split")).IconArrowSpreadSplit;
    
        case Icons.ARROW_SPREAD:
            return (await import("./arrow-spread")).IconArrowSpread;
    
        case Icons.ARROW_TRANSFER_BL_TR:
            return (await import("./arrow-transfer-bl-tr")).IconArrowTransferBlTr;
    
        case Icons.ARROW_TRANSFER_LEFT_RIGHT:
            return (await import("./arrow-transfer-left-right")).IconArrowTransferLeftRight;
    
        case Icons.ARROW_TRANSFER_LT_BR:
            return (await import("./arrow-transfer-lt-br")).IconArrowTransferLtBr;
    
        case Icons.ARROW_TRANSFER_UP_DOWN:
            return (await import("./arrow-transfer-up-down")).IconArrowTransferUpDown;
    
        case Icons.ARROW_TWOWAY_DIAGONAL_LR:
            return (await import("./arrow-twoway-diagonal-lr")).IconArrowTwowayDiagonalLr;
    
        case Icons.ARROW_TWOWAY_DIAGONAL_RL:
            return (await import("./arrow-twoway-diagonal-rl")).IconArrowTwowayDiagonalRl;
    
        case Icons.ARROW_TWOWAY_HORIZONTAL:
            return (await import("./arrow-twoway-horizontal")).IconArrowTwowayHorizontal;
    
        case Icons.ARROW_TWOWAY_VERTICAL:
            return (await import("./arrow-twoway-vertical")).IconArrowTwowayVertical;
    
        case Icons.ARROW_UP_COPY:
            return (await import("./arrow-up-copy")).IconArrowUpCopy;
    
        case Icons.ARROW_UP_DOWN_SPLIT:
            return (await import("./arrow-up-down-split")).IconArrowUpDownSplit;
    
        case Icons.ARROW_UP_DOWN_STOP:
            return (await import("./arrow-up-down-stop")).IconArrowUpDownStop;
    
        case Icons.ARROW_UP_DOWN:
            return (await import("./arrow-up-down")).IconArrowUpDown;
    
        case Icons.ARROW_UP_LEFT:
            return (await import("./arrow-up-left")).IconArrowUpLeft;
    
        case Icons.ARROW_UP_RIGHT:
            return (await import("./arrow-up-right")).IconArrowUpRight;
    
        case Icons.ARROW_UP:
            return (await import("./arrow-up")).IconArrowUp;
    
        case Icons.ARROW_UPLOAD:
            return (await import("./arrow-upload")).IconArrowUpload;
    
        case Icons.CHEVRON_CONNECT2:
            return (await import("./chevron-connect2")).IconChevronConnect2;
    
        case Icons.CHEVRON_CONNECT:
            return (await import("./chevron-connect")).IconChevronConnect;
    
        case Icons.CHEVRON_DISCONNECT2:
            return (await import("./chevron-disconnect2")).IconChevronDisconnect2;
    
        case Icons.CHEVRON_DISCONNECT:
            return (await import("./chevron-disconnect")).IconChevronDisconnect;
    
        case Icons.CHEVRON_DOUBLE_DOWN:
            return (await import("./chevron-double-down")).IconChevronDoubleDown;
    
        case Icons.CHEVRON_DOUBLE_LEFT:
            return (await import("./chevron-double-left")).IconChevronDoubleLeft;
    
        case Icons.CHEVRON_DOUBLE_RIGHT:
            return (await import("./chevron-double-right")).IconChevronDoubleRight;
    
        case Icons.CHEVRON_DOUBLE_UP:
            return (await import("./chevron-double-up")).IconChevronDoubleUp;
    
        case Icons.CHEVRON_DOWN:
            return (await import("./chevron-down")).IconChevronDown;
    
        case Icons.CHEVRON_LEFT:
            return (await import("./chevron-left")).IconChevronLeft;
    
        case Icons.CHEVRON_RIGHT:
            return (await import("./chevron-right")).IconChevronRight;
    
        case Icons.CHEVRON_UP:
            return (await import("./chevron-up")).IconChevronUp;
    
        case Icons.ICON01:
            return (await import("./icon01")).IconIcon01;
    
        case Icons.BOTTLE:
            return (await import("./bottle")).IconBottle;
    
        case Icons.BOTTLES:
            return (await import("./bottles")).IconBottles;
    
        case Icons.BREAD_SLICE:
            return (await import("./bread-slice")).IconBreadSlice;
    
        case Icons.COFFEE_CUP:
            return (await import("./coffee-cup")).IconCoffeeCup;
    
        case Icons.COFFEE_MACHINE:
            return (await import("./coffee-machine")).IconCoffeeMachine;
    
        case Icons.COGNAC_GLASS:
            return (await import("./cognac-glass")).IconCognacGlass;
    
        case Icons.ESPRESS_MACHINE2:
            return (await import("./espress-machine2")).IconEspressMachine2;
    
        case Icons.ESPRESSO_MACHINE_E61:
            return (await import("./espresso-machine-e61")).IconEspressoMachineE61;
    
        case Icons.ESPRESSO_MACHINE:
            return (await import("./espresso-machine")).IconEspressoMachine;
    
        case Icons.ESPRESSO_PISTOL:
            return (await import("./espresso-pistol")).IconEspressoPistol;
    
        case Icons.HAMBURGER:
            return (await import("./hamburger")).IconHamburger;
    
        case Icons.PERCULATOR:
            return (await import("./perculator")).IconPerculator;
    
        case Icons.WINE_GLASS:
            return (await import("./wine-glass")).IconWineGlass;
    
        case Icons.ALARM_BELL2:
            return (await import("./alarm-bell2")).IconAlarmBell2;
    
        case Icons.ALARM_BELL3:
            return (await import("./alarm-bell3")).IconAlarmBell3;
    
        case Icons.ALARM_BELL:
            return (await import("./alarm-bell")).IconAlarmBell;
    
        case Icons.ART_SUPPLIES:
            return (await import("./art-supplies")).IconArtSupplies;
    
        case Icons.AUDIO_WAVES:
            return (await import("./audio-waves")).IconAudioWaves;
    
        case Icons.CAMERA:
            return (await import("./camera")).IconCamera;
    
        case Icons.CLIPBOARD:
            return (await import("./clipboard")).IconClipboard;
    
        case Icons.COLOR_PALLETTE:
            return (await import("./color-pallette")).IconColorPallette;
    
        case Icons.COLOR_RGB:
            return (await import("./color-rgb")).IconColorRgb;
    
        case Icons.COLOR_SWATCHES:
            return (await import("./color-swatches")).IconColorSwatches;
    
        case Icons.DESKTOP:
            return (await import("./desktop")).IconDesktop;
    
        case Icons.FILMROLL:
            return (await import("./filmroll")).IconFilmroll;
    
        case Icons.GAMEPAD_CLASSIC:
            return (await import("./gamepad-classic")).IconGamepadClassic;
    
        case Icons.GAMEPAD:
            return (await import("./gamepad")).IconGamepad;
    
        case Icons.HIGHLIGHT:
            return (await import("./highlight")).IconHighlight;
    
        case Icons.IMAGE:
            return (await import("./image")).IconImage;
    
        case Icons.LAPTOP:
            return (await import("./laptop")).IconLaptop;
    
        case Icons.MAIL_OPEN:
            return (await import("./mail-open")).IconMailOpen;
    
        case Icons.MAIL:
            return (await import("./mail")).IconMail;
    
        case Icons.MEDIA:
            return (await import("./media")).IconMedia;
    
        case Icons.MICROPHONE:
            return (await import("./microphone")).IconMicrophone;
    
        case Icons.MUSIC_NOTE_SINGLE:
            return (await import("./music-note-single")).IconMusicNoteSingle;
    
        case Icons.MUSIC_NOTE:
            return (await import("./music-note")).IconMusicNote;
    
        case Icons.PACMAN:
            return (await import("./pacman")).IconPacman;
    
        case Icons.PAPERPLANE:
            return (await import("./paperplane")).IconPaperplane;
    
        case Icons.PLAYBACK_BACKWARD:
            return (await import("./playback-backward")).IconPlaybackBackward;
    
        case Icons.PLAYBACK_END:
            return (await import("./playback-end")).IconPlaybackEnd;
    
        case Icons.PLAYBACK_FORWARD:
            return (await import("./playback-forward")).IconPlaybackForward;
    
        case Icons.PLAYBACK_NEXT:
            return (await import("./playback-next")).IconPlaybackNext;
    
        case Icons.PLAYBACK_PAUSE:
            return (await import("./playback-pause")).IconPlaybackPause;
    
        case Icons.PLAYBACK_PLAY:
            return (await import("./playback-play")).IconPlaybackPlay;
    
        case Icons.PLAYBACK_PREVIOUS:
            return (await import("./playback-previous")).IconPlaybackPrevious;
    
        case Icons.PLAYBACK_START:
            return (await import("./playback-start")).IconPlaybackStart;
    
        case Icons.PLAYBACK_STOP:
            return (await import("./playback-stop")).IconPlaybackStop;
    
        case Icons.PRINTER:
            return (await import("./printer")).IconPrinter;
    
        case Icons.RECORD:
            return (await import("./record")).IconRecord;
    
        case Icons.REELS:
            return (await import("./reels")).IconReels;
    
        case Icons.TABLET_LANDSCAPE:
            return (await import("./tablet-landscape")).IconTabletLandscape;
    
        case Icons.TABLET:
            return (await import("./tablet")).IconTablet;
    
        case Icons.TELEVISION:
            return (await import("./television")).IconTelevision;
    
        case Icons.TERMINAL:
            return (await import("./terminal")).IconTerminal;
    
        case Icons.VIDEO_CAMERA:
            return (await import("./video-camera")).IconVideoCamera;
    
        case Icons.VIDEOS:
            return (await import("./videos")).IconVideos;
    
        case Icons.VOLUME_I:
            return (await import("./volume-i")).IconVolumeI;
    
        case Icons.VOLUME_II:
            return (await import("./volume-ii")).IconVolumeIi;
    
        case Icons.VOLUME_III:
            return (await import("./volume-iii")).IconVolumeIii;
    
        case Icons.VOLUME_MUTE:
            return (await import("./volume-mute")).IconVolumeMute;
    
        case Icons.VOLUME_OFF:
            return (await import("./volume-off")).IconVolumeOff;
    
        case Icons.WEBSITE:
            return (await import("./website")).IconWebsite;
    
        case Icons.ICON43:
            return (await import("./icon43")).IconIcon43;
    
        case Icons.BAHT_SYMBOL:
            return (await import("./baht-symbol")).IconBahtSymbol;
    
        case Icons.DICE1:
            return (await import("./dice1")).IconDice1;
    
        case Icons.DICE2:
            return (await import("./dice2")).IconDice2;
    
        case Icons.DICE3:
            return (await import("./dice3")).IconDice3;
    
        case Icons.DICE4:
            return (await import("./dice4")).IconDice4;
    
        case Icons.DICE5:
            return (await import("./dice5")).IconDice5;
    
        case Icons.DICE6:
            return (await import("./dice6")).IconDice6;
    
        case Icons.DICE7:
            return (await import("./dice7")).IconDice7;
    
        case Icons.DICE8:
            return (await import("./dice8")).IconDice8;
    
        case Icons.DICE9:
            return (await import("./dice9")).IconDice9;
    
        case Icons.DIGIT_DIGITAL1:
            return (await import("./digit-digital1")).IconDigitDigital1;
    
        case Icons.DIGIT_DIGITAL2:
            return (await import("./digit-digital2")).IconDigitDigital2;
    
        case Icons.DIGIT_DIGITAL3:
            return (await import("./digit-digital3")).IconDigitDigital3;
    
        case Icons.DIGIT_DIGITAL4:
            return (await import("./digit-digital4")).IconDigitDigital4;
    
        case Icons.DIGIT_DIGITAL5:
            return (await import("./digit-digital5")).IconDigitDigital5;
    
        case Icons.DIGIT_DIGITAL6:
            return (await import("./digit-digital6")).IconDigitDigital6;
    
        case Icons.DIGIT_DIGITAL7:
            return (await import("./digit-digital7")).IconDigitDigital7;
    
        case Icons.DIGIT_DIGITAL8:
            return (await import("./digit-digital8")).IconDigitDigital8;
    
        case Icons.DIGIT_DIGITAL9:
            return (await import("./digit-digital9")).IconDigitDigital9;
    
        case Icons.DIGIT_DIGTAL0:
            return (await import("./digit-digtal0")).IconDigitDigtal0;
    
        case Icons.DOLLAR:
            return (await import("./dollar")).IconDollar;
    
        case Icons.EURO:
            return (await import("./euro")).IconEuro;
    
        case Icons.PERCENTAGE:
            return (await import("./percentage")).IconPercentage;
    
        case Icons.POUND_SYMBOL:
            return (await import("./pound-symbol")).IconPoundSymbol;
    
        case Icons.PROMILLE:
            return (await import("./promille")).IconPromille;
    
        case Icons.RUBLES_SYMBOL:
            return (await import("./rubles-symbol")).IconRublesSymbol;
    
        case Icons.RUPEE_SYMBOL_COPY:
            return (await import("./rupee-symbol-copy")).IconRupeeSymbolCopy;
    
        case Icons.RUPEE_SYMBOL:
            return (await import("./rupee-symbol")).IconRupeeSymbol;
    
        case Icons.SYMBOL_FEMALE:
            return (await import("./symbol-female")).IconSymbolFemale;
    
        case Icons.SYMBOL_MALE:
            return (await import("./symbol-male")).IconSymbolMale;
    
        case Icons.SYMBOL_UNISEX:
            return (await import("./symbol-unisex")).IconSymbolUnisex;
    
        case Icons.THREE_DOTS_DIAGONAL_MAJOR:
            return (await import("./three-dots-diagonal-major")).IconThreeDotsDiagonalMajor;
    
        case Icons.THREE_DOTS_DIAGONAL_MINOR:
            return (await import("./three-dots-diagonal-minor")).IconThreeDotsDiagonalMinor;
    
        case Icons.THREE_DOTS_HORIZONTAL:
            return (await import("./three-dots-horizontal")).IconThreeDotsHorizontal;
    
        case Icons.THREE_DOTS_LINES:
            return (await import("./three-dots-lines")).IconThreeDotsLines;
    
        case Icons.THREE_DOTS_VERTICAL:
            return (await import("./three-dots-vertical")).IconThreeDotsVertical;
    
        case Icons.TWO_DOTS_DIAGONAL_MAJOR:
            return (await import("./two-dots-diagonal-major")).IconTwoDotsDiagonalMajor;
    
        case Icons.TWO_DOTS_DIAGONAL_MINOR:
            return (await import("./two-dots-diagonal-minor")).IconTwoDotsDiagonalMinor;
    
        case Icons.TWO_DOTS_HORIZONTAL:
            return (await import("./two-dots-horizontal")).IconTwoDotsHorizontal;
    
        case Icons.TWO_DOTS_LINES:
            return (await import("./two-dots-lines")).IconTwoDotsLines;
    
        case Icons.TWO_DOTS_VERTICAL:
            return (await import("./two-dots-vertical")).IconTwoDotsVertical;
    
        case Icons.YEN:
            return (await import("./yen")).IconYen;
    
        case Icons.AI_FACE:
            return (await import("./ai-face")).IconAiFace;
    
        case Icons.AI_LETTERS_BLOCKED:
            return (await import("./ai-letters-blocked")).IconAiLettersBlocked;
    
        case Icons.AI_LETTERS_CIRCLED:
            return (await import("./ai-letters-circled")).IconAiLettersCircled;
    
        case Icons.AI_LETTERS:
            return (await import("./ai-letters")).IconAiLetters;
    
        case Icons.ANIMAL_STEP:
            return (await import("./animal-step")).IconAnimalStep;
    
        case Icons.ARTWORK_FRAME:
            return (await import("./artwork-frame")).IconArtworkFrame;
    
        case Icons.BARBECUE:
            return (await import("./barbecue")).IconBarbecue;
    
        case Icons.BATHROOM_ESSENTIALS:
            return (await import("./bathroom-essentials")).IconBathroomEssentials;
    
        case Icons.BINOCULARS:
            return (await import("./binoculars")).IconBinoculars;
    
        case Icons.BLENDER:
            return (await import("./blender")).IconBlender;
    
        case Icons.BOOKCASE:
            return (await import("./bookcase")).IconBookcase;
    
        case Icons.BULB:
            return (await import("./bulb")).IconBulb;
    
        case Icons.CHIP:
            return (await import("./chip")).IconChip;
    
        case Icons.CLEANING_BUCKET:
            return (await import("./cleaning-bucket")).IconCleaningBucket;
    
        case Icons.CLEANING_SPRAY:
            return (await import("./cleaning-spray")).IconCleaningSpray;
    
        case Icons.CLOSET:
            return (await import("./closet")).IconCloset;
    
        case Icons.COFFEE_BEANS:
            return (await import("./coffee-beans")).IconCoffeeBeans;
    
        case Icons.COINS:
            return (await import("./coins")).IconCoins;
    
        case Icons.COMPASS2:
            return (await import("./compass2")).IconCompass2;
    
        case Icons.COMPASS:
            return (await import("./compass")).IconCompass;
    
        case Icons.CUBE3D:
            return (await import("./cube3d")).IconCube3d;
    
        case Icons.EDUCATION:
            return (await import("./education")).IconEducation;
    
        case Icons.FACTORY_ARM:
            return (await import("./factory-arm")).IconFactoryArm;
    
        case Icons.FACTORY_BELT:
            return (await import("./factory-belt")).IconFactoryBelt;
    
        case Icons.FACTORY:
            return (await import("./factory")).IconFactory;
    
        case Icons.FINGERPRINT:
            return (await import("./fingerprint")).IconFingerprint;
    
        case Icons.FRIDGE:
            return (await import("./fridge")).IconFridge;
    
        case Icons.FURNITURE_BED:
            return (await import("./furniture-bed")).IconFurnitureBed;
    
        case Icons.FURNITURE_BEDSIDE_TABLE:
            return (await import("./furniture-bedside-table")).IconFurnitureBedsideTable;
    
        case Icons.FURNITURE_CHAIR:
            return (await import("./furniture-chair")).IconFurnitureChair;
    
        case Icons.FURNITURE_COUCH:
            return (await import("./furniture-couch")).IconFurnitureCouch;
    
        case Icons.FURNITURE_DESK:
            return (await import("./furniture-desk")).IconFurnitureDesk;
    
        case Icons.FURNITURE_DRESSOIR:
            return (await import("./furniture-dressoir")).IconFurnitureDressoir;
    
        case Icons.GRAPH_UP_ROUND:
            return (await import("./graph-up-round")).IconGraphUpRound;
    
        case Icons.GRAPH_UP:
            return (await import("./graph-up")).IconGraphUp;
    
        case Icons.HAIRDRYER:
            return (await import("./hairdryer")).IconHairdryer;
    
        case Icons.IDEA_FACTORY:
            return (await import("./idea-factory")).IconIdeaFactory;
    
        case Icons.INDUSTRY3:
            return (await import("./industry3")).IconIndustry3;
    
        case Icons.IRON:
            return (await import("./iron")).IconIron;
    
        case Icons.KITCHEN_CUTLERY:
            return (await import("./kitchen-cutlery")).IconKitchenCutlery;
    
        case Icons.KITCHEN_UTENSILS:
            return (await import("./kitchen-utensils")).IconKitchenUtensils;
    
        case Icons.LEAF2:
            return (await import("./leaf2")).IconLeaf2;
    
        case Icons.LEAF3:
            return (await import("./leaf3")).IconLeaf3;
    
        case Icons.LEAF:
            return (await import("./leaf")).IconLeaf;
    
        case Icons.LEAFS:
            return (await import("./leafs")).IconLeafs;
    
        case Icons.LIQUID_SOAP2:
            return (await import("./liquid-soap2")).IconLiquidSoap2;
    
        case Icons.LIQUID_SOAP:
            return (await import("./liquid-soap")).IconLiquidSoap;
    
        case Icons.MICROWAVE:
            return (await import("./microwave")).IconMicrowave;
    
        case Icons.MONEY:
            return (await import("./money")).IconMoney;
    
        case Icons.MONEYBAG:
            return (await import("./moneybag")).IconMoneybag;
    
        case Icons.OVEN:
            return (await import("./oven")).IconOven;
    
        case Icons.PLANT:
            return (await import("./plant")).IconPlant;
    
        case Icons.POLITICIAN2:
            return (await import("./politician2")).IconPolitician2;
    
        case Icons.POLITICIAN:
            return (await import("./politician")).IconPolitician;
    
        case Icons.ROOM_SHADE:
            return (await import("./room-shade")).IconRoomShade;
    
        case Icons.STOVE:
            return (await import("./stove")).IconStove;
    
        case Icons.TEMPLE2:
            return (await import("./temple2")).IconTemple2;
    
        case Icons.TEMPLE:
            return (await import("./temple")).IconTemple;
    
        case Icons.TREE2:
            return (await import("./tree2")).IconTree2;
    
        case Icons.TREE3:
            return (await import("./tree3")).IconTree3;
    
        case Icons.TREE:
            return (await import("./tree")).IconTree;
    
        case Icons.TREES2:
            return (await import("./trees2")).IconTrees2;
    
        case Icons.TREES:
            return (await import("./trees")).IconTrees;
    
        case Icons.TURTLE:
            return (await import("./turtle")).IconTurtle;
    
        case Icons.VOTE:
            return (await import("./vote")).IconVote;
    
        case Icons.WALLET:
            return (await import("./wallet")).IconWallet;
    
        case Icons.WASHING_MACHINE:
            return (await import("./washing-machine")).IconWashingMachine;
    
        case Icons.WATERCOOKER:
            return (await import("./watercooker")).IconWatercooker;
    
        case Icons.ACCESSIBILITY_PERSON_CIRCLED:
            return (await import("./accessibility-person-circled")).IconAccessibilityPersonCircled;
    
        case Icons.ACCESSIBILITY_PERSON:
            return (await import("./accessibility-person")).IconAccessibilityPerson;
    
        case Icons.ADD_FAT:
            return (await import("./add-fat")).IconAddFat;
    
        case Icons.ADD_L:
            return (await import("./add-l")).IconAddL;
    
        case Icons.ADD_LINES:
            return (await import("./add-lines")).IconAddLines;
    
        case Icons.ADD_M:
            return (await import("./add-m")).IconAddM;
    
        case Icons.ADD_S:
            return (await import("./add-s")).IconAddS;
    
        case Icons.AT_SIGN:
            return (await import("./at-sign")).IconAtSign;
    
        case Icons.BLOCK_PARTIALS:
            return (await import("./block-partials")).IconBlockPartials;
    
        case Icons.BOARD_ADD2:
            return (await import("./board-add2")).IconBoardAdd2;
    
        case Icons.BOARD_MULTI2_HORIZONTAL:
            return (await import("./board-multi2-horizontal")).IconBoardMulti2Horizontal;
    
        case Icons.BOARD_MULTI2_VERTICAL:
            return (await import("./board-multi2-vertical")).IconBoardMulti2Vertical;
    
        case Icons.BOARD_MULTI_DASHBOARD:
            return (await import("./board-multi-dashboard")).IconBoardMultiDashboard;
    
        case Icons.BOARD_MULTI_T_DOWN:
            return (await import("./board-multi-t-down")).IconBoardMultiTDown;
    
        case Icons.BOARD_MULTI_T_LEFT:
            return (await import("./board-multi-t-left")).IconBoardMultiTLeft;
    
        case Icons.BOARD_MULTI_T_RIGHT:
            return (await import("./board-multi-t-right")).IconBoardMultiTRight;
    
        case Icons.BOARD_MULTI_T_UP:
            return (await import("./board-multi-t-up")).IconBoardMultiTUp;
    
        case Icons.BOARD_MULTI:
            return (await import("./board-multi")).IconBoardMulti;
    
        case Icons.BOARD_MULTIPLY2:
            return (await import("./board-multiply2")).IconBoardMultiply2;
    
        case Icons.BOARD_SPLIT13_HORIZONTAL:
            return (await import("./board-split13-horizontal")).IconBoardSplit13Horizontal;
    
        case Icons.BOARD_SPLIT13_VERTICAL:
            return (await import("./board-split13-vertical")).IconBoardSplit13Vertical;
    
        case Icons.BOARD_SPLIT2_HORIZONTAL:
            return (await import("./board-split2-horizontal")).IconBoardSplit2Horizontal;
    
        case Icons.BOARD_SPLIT2_VERTICAL:
            return (await import("./board-split2-vertical")).IconBoardSplit2Vertical;
    
        case Icons.BOARD_SPLIT31_HORIZONTAL:
            return (await import("./board-split31-horizontal")).IconBoardSplit31Horizontal;
    
        case Icons.BOARD_SPLIT31_VERTICAL:
            return (await import("./board-split31-vertical")).IconBoardSplit31Vertical;
    
        case Icons.BOARD_SPLIT3_HORIZONTAL:
            return (await import("./board-split3-horizontal")).IconBoardSplit3Horizontal;
    
        case Icons.BOARD_SPLIT3_VERTICAL:
            return (await import("./board-split3-vertical")).IconBoardSplit3Vertical;
    
        case Icons.BOARD_SPLIT4_HORIZONTAL:
            return (await import("./board-split4-horizontal")).IconBoardSplit4Horizontal;
    
        case Icons.BOARD_SPLIT4_VERTICAL:
            return (await import("./board-split4-vertical")).IconBoardSplit4Vertical;
    
        case Icons.BOARD_SPLIT_T_DOWN:
            return (await import("./board-split-t-down")).IconBoardSplitTDown;
    
        case Icons.BOARD_SPLIT_T_LEFT:
            return (await import("./board-split-t-left")).IconBoardSplitTLeft;
    
        case Icons.BOARD_SPLIT_T_RIGHT:
            return (await import("./board-split-t-right")).IconBoardSplitTRight;
    
        case Icons.BOARD_SPLIT_T_UP:
            return (await import("./board-split-t-up")).IconBoardSplitTUp;
    
        case Icons.BOARD_SUBTRACT2:
            return (await import("./board-subtract2")).IconBoardSubtract2;
    
        case Icons.BOARD:
            return (await import("./board")).IconBoard;
    
        case Icons.BOX_IN:
            return (await import("./box-in")).IconBoxIn;
    
        case Icons.BOX_OUT:
            return (await import("./box-out")).IconBoxOut;
    
        case Icons.BOX:
            return (await import("./box")).IconBox;
    
        case Icons.BOY:
            return (await import("./boy")).IconBoy;
    
        case Icons.BROKEN_HEART_F:
            return (await import("./broken-heart-f")).IconBrokenHeartF;
    
        case Icons.BROKEN_HEART_L:
            return (await import("./broken-heart-l")).IconBrokenHeartL;
    
        case Icons.BROKEN_HEART_M:
            return (await import("./broken-heart-m")).IconBrokenHeartM;
    
        case Icons.BUILDING_CHURCH:
            return (await import("./building-church")).IconBuildingChurch;
    
        case Icons.BUILDING_HOUSE2:
            return (await import("./building-house2")).IconBuildingHouse2;
    
        case Icons.BUILDING_HOUSE:
            return (await import("./building-house")).IconBuildingHouse;
    
        case Icons.BUILDING_SHOP:
            return (await import("./building-shop")).IconBuildingShop;
    
        case Icons.BUTTON_ADD:
            return (await import("./button-add")).IconButtonAdd;
    
        case Icons.BUTTON_BROKEN_HEART2:
            return (await import("./button-broken-heart2")).IconButtonBrokenHeart2;
    
        case Icons.BUTTON_BROKEN_HEART:
            return (await import("./button-broken-heart")).IconButtonBrokenHeart;
    
        case Icons.BUTTON_CHECK2:
            return (await import("./button-check2")).IconButtonCheck2;
    
        case Icons.BUTTON_CHECK:
            return (await import("./button-check")).IconButtonCheck;
    
        case Icons.BUTTON_EDIT2:
            return (await import("./button-edit2")).IconButtonEdit2;
    
        case Icons.BUTTON_EDIT:
            return (await import("./button-edit")).IconButtonEdit;
    
        case Icons.BUTTON_EXCLAMATION_MARK2:
            return (await import("./button-exclamation-mark2")).IconButtonExclamationMark2;
    
        case Icons.BUTTON_EXCLAMATION_MARK:
            return (await import("./button-exclamation-mark")).IconButtonExclamationMark;
    
        case Icons.BUTTON_HEART2:
            return (await import("./button-heart2")).IconButtonHeart2;
    
        case Icons.BUTTON_HEART:
            return (await import("./button-heart")).IconButtonHeart;
    
        case Icons.BUTTON_INFO2:
            return (await import("./button-info2")).IconButtonInfo2;
    
        case Icons.BUTTON_INFO:
            return (await import("./button-info")).IconButtonInfo;
    
        case Icons.BUTTON_INVISIBLE2:
            return (await import("./button-invisible2")).IconButtonInvisible2;
    
        case Icons.BUTTON_INVISIBLE:
            return (await import("./button-invisible")).IconButtonInvisible;
    
        case Icons.BUTTON_MULTIPLY:
            return (await import("./button-multiply")).IconButtonMultiply;
    
        case Icons.BUTTON_QUESTION_MARK2:
            return (await import("./button-question-mark2")).IconButtonQuestionMark2;
    
        case Icons.BUTTON_QUESTION_MARK:
            return (await import("./button-question-mark")).IconButtonQuestionMark;
    
        case Icons.BUTTON_SEARCH2:
            return (await import("./button-search2")).IconButtonSearch2;
    
        case Icons.BUTTON_SEARCH:
            return (await import("./button-search")).IconButtonSearch;
    
        case Icons.BUTTON_STAR2:
            return (await import("./button-star2")).IconButtonStar2;
    
        case Icons.BUTTON_STAR:
            return (await import("./button-star")).IconButtonStar;
    
        case Icons.BUTTON_SUBTRACT:
            return (await import("./button-subtract")).IconButtonSubtract;
    
        case Icons.BUTTON_VISIBLE2:
            return (await import("./button-visible2")).IconButtonVisible2;
    
        case Icons.BUTTON_VISIBLE:
            return (await import("./button-visible")).IconButtonVisible;
    
        case Icons.BUTTON:
            return (await import("./button")).IconButton;
    
        case Icons.CALENDAR2:
            return (await import("./calendar2")).IconCalendar2;
    
        case Icons.CALENDAR:
            return (await import("./calendar")).IconCalendar;
    
        case Icons.CHART_BARS_SQUARED:
            return (await import("./chart-bars-squared")).IconChartBarsSquared;
    
        case Icons.CHART_BUBBLES:
            return (await import("./chart-bubbles")).IconChartBubbles;
    
        case Icons.CHART_CANDLES:
            return (await import("./chart-candles")).IconChartCandles;
    
        case Icons.CHART_HALF_CIRCLE:
            return (await import("./chart-half-circle")).IconChartHalfCircle;
    
        case Icons.CHART_LINE_SQUARED:
            return (await import("./chart-line-squared")).IconChartLineSquared;
    
        case Icons.CHART_LINE:
            return (await import("./chart-line")).IconChartLine;
    
        case Icons.CHART_PIE:
            return (await import("./chart-pie")).IconChartPie;
    
        case Icons.CHECK_FAT:
            return (await import("./check-fat")).IconCheckFat;
    
        case Icons.CHECK_L:
            return (await import("./check-l")).IconCheckL;
    
        case Icons.CHECK_LIST:
            return (await import("./check-list")).IconCheckList;
    
        case Icons.CHECK_M:
            return (await import("./check-m")).IconCheckM;
    
        case Icons.CHECK_S:
            return (await import("./check-s")).IconCheckS;
    
        case Icons.CIRCLE_INVISIBLE:
            return (await import("./circle-invisible")).IconCircleInvisible;
    
        case Icons.CIRCLE_SUBTRACT:
            return (await import("./circle-subtract")).IconCircleSubtract;
    
        case Icons.CIRCLED_ADD:
            return (await import("./circled-add")).IconCircledAdd;
    
        case Icons.CIRCLED_BROKEN_HEART:
            return (await import("./circled-broken-heart")).IconCircledBrokenHeart;
    
        case Icons.CIRCLED_CHECK:
            return (await import("./circled-check")).IconCircledCheck;
    
        case Icons.CIRCLED_EDIT:
            return (await import("./circled-edit")).IconCircledEdit;
    
        case Icons.CIRCLED_EXCLAMATION_MARK:
            return (await import("./circled-exclamation-mark")).IconCircledExclamationMark;
    
        case Icons.CIRCLED_HEART:
            return (await import("./circled-heart")).IconCircledHeart;
    
        case Icons.CIRCLED_INFO:
            return (await import("./circled-info")).IconCircledInfo;
    
        case Icons.CIRCLED_MULTIPLY:
            return (await import("./circled-multiply")).IconCircledMultiply;
    
        case Icons.CIRCLED_QUESTION_MARK:
            return (await import("./circled-question-mark")).IconCircledQuestionMark;
    
        case Icons.CIRCLED_SEARCH:
            return (await import("./circled-search")).IconCircledSearch;
    
        case Icons.CIRCLED_STAR:
            return (await import("./circled-star")).IconCircledStar;
    
        case Icons.CIRCLED_VISIBLE:
            return (await import("./circled-visible")).IconCircledVisible;
    
        case Icons.CIRCLED:
            return (await import("./circled")).IconCircled;
    
        case Icons.CLOCK:
            return (await import("./clock")).IconClock;
    
        case Icons.CLOUD_LIGHTNING:
            return (await import("./cloud-lightning")).IconCloudLightning;
    
        case Icons.CLOUD_RAIN_COPY2:
            return (await import("./cloud-rain-copy2")).IconCloudRainCopy2;
    
        case Icons.CLOUD_SMALL_RAIN:
            return (await import("./cloud-small-rain")).IconCloudSmallRain;
    
        case Icons.CLOUD_SUN:
            return (await import("./cloud-sun")).IconCloudSun;
    
        case Icons.CLOUD_THERMOMETER:
            return (await import("./cloud-thermometer")).IconCloudThermometer;
    
        case Icons.CLOUD:
            return (await import("./cloud")).IconCloud;
    
        case Icons.CODE_BRACKETS_CIRCLED:
            return (await import("./code-brackets-circled")).IconCodeBracketsCircled;
    
        case Icons.CODE_BRACKETS:
            return (await import("./code-brackets")).IconCodeBrackets;
    
        case Icons.CODE_CHEVRONS_CIRCLED:
            return (await import("./code-chevrons-circled")).IconCodeChevronsCircled;
    
        case Icons.CODE_CHEVRONS_OPEN_CIRCLED:
            return (await import("./code-chevrons-open-circled")).IconCodeChevronsOpenCircled;
    
        case Icons.CODE_CHEVRONS_OPEN:
            return (await import("./code-chevrons-open")).IconCodeChevronsOpen;
    
        case Icons.CODE_CHEVRONS:
            return (await import("./code-chevrons")).IconCodeChevrons;
    
        case Icons.COMPANY:
            return (await import("./company")).IconCompany;
    
        case Icons.DISLIKE:
            return (await import("./dislike")).IconDislike;
    
        case Icons.EDIT_FAT:
            return (await import("./edit-fat")).IconEditFat;
    
        case Icons.EDIT_L:
            return (await import("./edit-l")).IconEditL;
    
        case Icons.EDIT_LINE_SWIRL:
            return (await import("./edit-line-swirl")).IconEditLineSwirl;
    
        case Icons.EDIT_LINE:
            return (await import("./edit-line")).IconEditLine;
    
        case Icons.EDIT_M:
            return (await import("./edit-m")).IconEditM;
    
        case Icons.EDIT_S:
            return (await import("./edit-s")).IconEditS;
    
        case Icons.EXCLAMATION_MARK_FAT:
            return (await import("./exclamation-mark-fat")).IconExclamationMarkFat;
    
        case Icons.EXCLAMATION_MARK_L:
            return (await import("./exclamation-mark-l")).IconExclamationMarkL;
    
        case Icons.EXCLAMATION_MARK_M:
            return (await import("./exclamation-mark-m")).IconExclamationMarkM;
    
        case Icons.EXCLAMATION_MARK_S:
            return (await import("./exclamation-mark-s")).IconExclamationMarkS;
    
        case Icons.FEMALE_SIMPLIFIED:
            return (await import("./female-simplified")).IconFemaleSimplified;
    
        case Icons.FILE_ADD267:
            return (await import("./file-add267")).IconFileAdd267;
    
        case Icons.FILE_ADD269:
            return (await import("./file-add269")).IconFileAdd269;
    
        case Icons.FILE_ADD:
            return (await import("./file-add")).IconFileAdd;
    
        case Icons.FILE_ARCHIVE:
            return (await import("./file-archive")).IconFileArchive;
    
        case Icons.FILE_ARROW_UP:
            return (await import("./file-arrow-up")).IconFileArrowUp;
    
        case Icons.FILE_BINARY:
            return (await import("./file-binary")).IconFileBinary;
    
        case Icons.FILE_BROKEN_HEART2:
            return (await import("./file-broken-heart2")).IconFileBrokenHeart2;
    
        case Icons.FILE_BROKEN_HEART:
            return (await import("./file-broken-heart")).IconFileBrokenHeart;
    
        case Icons.FILE_CHECK2:
            return (await import("./file-check2")).IconFileCheck2;
    
        case Icons.FILE_CHECK:
            return (await import("./file-check")).IconFileCheck;
    
        case Icons.FILE_CLOUD:
            return (await import("./file-cloud")).IconFileCloud;
    
        case Icons.FILE_CODE:
            return (await import("./file-code")).IconFileCode;
    
        case Icons.FILE_COLUMNS:
            return (await import("./file-columns")).IconFileColumns;
    
        case Icons.FILE_EDIT2:
            return (await import("./file-edit2")).IconFileEdit2;
    
        case Icons.FILE_EDIT:
            return (await import("./file-edit")).IconFileEdit;
    
        case Icons.FILE_EXCLAMATION_MARK2:
            return (await import("./file-exclamation-mark2")).IconFileExclamationMark2;
    
        case Icons.FILE_EXCLAMATION_MARK:
            return (await import("./file-exclamation-mark")).IconFileExclamationMark;
    
        case Icons.FILE_GRAPHS:
            return (await import("./file-graphs")).IconFileGraphs;
    
        case Icons.FILE_HEART2:
            return (await import("./file-heart2")).IconFileHeart2;
    
        case Icons.FILE_HEART:
            return (await import("./file-heart")).IconFileHeart;
    
        case Icons.FILE_INFO2:
            return (await import("./file-info2")).IconFileInfo2;
    
        case Icons.FILE_INFO:
            return (await import("./file-info")).IconFileInfo;
    
        case Icons.FILE_INVISIBLE2:
            return (await import("./file-invisible2")).IconFileInvisible2;
    
        case Icons.FILE_INVISIBLE:
            return (await import("./file-invisible")).IconFileInvisible;
    
        case Icons.FILE_MULTIPLY:
            return (await import("./file-multiply")).IconFileMultiply;
    
        case Icons.FILE_QUESTION_MARK2:
            return (await import("./file-question-mark2")).IconFileQuestionMark2;
    
        case Icons.FILE_QUESTION_MARK:
            return (await import("./file-question-mark")).IconFileQuestionMark;
    
        case Icons.FILE_SEARCH2:
            return (await import("./file-search2")).IconFileSearch2;
    
        case Icons.FILE_SEARCH:
            return (await import("./file-search")).IconFileSearch;
    
        case Icons.FILE_STAR2:
            return (await import("./file-star2")).IconFileStar2;
    
        case Icons.FILE_STAR:
            return (await import("./file-star")).IconFileStar;
    
        case Icons.FILE_SUBTRACT2:
            return (await import("./file-subtract2")).IconFileSubtract2;
    
        case Icons.FILE_SUBTRACT:
            return (await import("./file-subtract")).IconFileSubtract;
    
        case Icons.FILE_TEXT:
            return (await import("./file-text")).IconFileText;
    
        case Icons.FILE_TRAY_STACK:
            return (await import("./file-tray-stack")).IconFileTrayStack;
    
        case Icons.FILE_TRAY:
            return (await import("./file-tray")).IconFileTray;
    
        case Icons.FILE_VISIBLE2:
            return (await import("./file-visible2")).IconFileVisible2;
    
        case Icons.FILE_VISIBLE:
            return (await import("./file-visible")).IconFileVisible;
    
        case Icons.FILE:
            return (await import("./file")).IconFile;
    
        case Icons.FOLDER_ADD2:
            return (await import("./folder-add2")).IconFolderAdd2;
    
        case Icons.FOLDER_ADD:
            return (await import("./folder-add")).IconFolderAdd;
    
        case Icons.FOLDER_BROKEN_HEART2:
            return (await import("./folder-broken-heart2")).IconFolderBrokenHeart2;
    
        case Icons.FOLDER_BROKEN_HEART:
            return (await import("./folder-broken-heart")).IconFolderBrokenHeart;
    
        case Icons.FOLDER_CHECK2:
            return (await import("./folder-check2")).IconFolderCheck2;
    
        case Icons.FOLDER_CHECK:
            return (await import("./folder-check")).IconFolderCheck;
    
        case Icons.FOLDER_EDIT2:
            return (await import("./folder-edit2")).IconFolderEdit2;
    
        case Icons.FOLDER_EDIT:
            return (await import("./folder-edit")).IconFolderEdit;
    
        case Icons.FOLDER_EXCLAMATION_MARK2:
            return (await import("./folder-exclamation-mark2")).IconFolderExclamationMark2;
    
        case Icons.FOLDER_EXCLAMATION_MARK:
            return (await import("./folder-exclamation-mark")).IconFolderExclamationMark;
    
        case Icons.FOLDER_HEART2:
            return (await import("./folder-heart2")).IconFolderHeart2;
    
        case Icons.FOLDER_HEART:
            return (await import("./folder-heart")).IconFolderHeart;
    
        case Icons.FOLDER_INFO2:
            return (await import("./folder-info2")).IconFolderInfo2;
    
        case Icons.FOLDER_INFO:
            return (await import("./folder-info")).IconFolderInfo;
    
        case Icons.FOLDER_INVISIBLE2:
            return (await import("./folder-invisible2")).IconFolderInvisible2;
    
        case Icons.FOLDER_INVISIBLE:
            return (await import("./folder-invisible")).IconFolderInvisible;
    
        case Icons.FOLDER_MULTIPLY2:
            return (await import("./folder-multiply2")).IconFolderMultiply2;
    
        case Icons.FOLDER_MULTIPLY:
            return (await import("./folder-multiply")).IconFolderMultiply;
    
        case Icons.FOLDER_QUESTION_MARK2:
            return (await import("./folder-question-mark2")).IconFolderQuestionMark2;
    
        case Icons.FOLDER_QUESTION_MARK:
            return (await import("./folder-question-mark")).IconFolderQuestionMark;
    
        case Icons.FOLDER_SEARCH2:
            return (await import("./folder-search2")).IconFolderSearch2;
    
        case Icons.FOLDER_SEARCH:
            return (await import("./folder-search")).IconFolderSearch;
    
        case Icons.FOLDER_STAR2:
            return (await import("./folder-star2")).IconFolderStar2;
    
        case Icons.FOLDER_STAR:
            return (await import("./folder-star")).IconFolderStar;
    
        case Icons.FOLDER_SUBTRACT2:
            return (await import("./folder-subtract2")).IconFolderSubtract2;
    
        case Icons.FOLDER_SUBTRACT:
            return (await import("./folder-subtract")).IconFolderSubtract;
    
        case Icons.FOLDER_VISIBLE2:
            return (await import("./folder-visible2")).IconFolderVisible2;
    
        case Icons.FOLDER_VISIBLE:
            return (await import("./folder-visible")).IconFolderVisible;
    
        case Icons.FOLDER:
            return (await import("./folder")).IconFolder;
    
        case Icons.GIRL:
            return (await import("./girl")).IconGirl;
    
        case Icons.GIT_BRANCH:
            return (await import("./git-branch")).IconGitBranch;
    
        case Icons.GIT_COMPARE:
            return (await import("./git-compare")).IconGitCompare;
    
        case Icons.GIT_MERGE_QUEUE:
            return (await import("./git-merge-queue")).IconGitMergeQueue;
    
        case Icons.GIT_MERGE:
            return (await import("./git-merge")).IconGitMerge;
    
        case Icons.GIT_PULL_REQUEST_CLOSED:
            return (await import("./git-pull-request-closed")).IconGitPullRequestClosed;
    
        case Icons.GIT_PULL_REQUEST_DRAFT:
            return (await import("./git-pull-request-draft")).IconGitPullRequestDraft;
    
        case Icons.GIT_PULL_REQUEST:
            return (await import("./git-pull-request")).IconGitPullRequest;
    
        case Icons.GIT_REPO_FORK:
            return (await import("./git-repo-fork")).IconGitRepoFork;
    
        case Icons.HEART_BROKEN_SMALL:
            return (await import("./heart-broken-small")).IconHeartBrokenSmall;
    
        case Icons.HEART_FAT:
            return (await import("./heart-fat")).IconHeartFat;
    
        case Icons.HEART_L:
            return (await import("./heart-l")).IconHeartL;
    
        case Icons.HEART_M:
            return (await import("./heart-m")).IconHeartM;
    
        case Icons.HEART_SMALL:
            return (await import("./heart-small")).IconHeartSmall;
    
        case Icons.INFO_FAT:
            return (await import("./info-fat")).IconInfoFat;
    
        case Icons.INFO_L:
            return (await import("./info-l")).IconInfoL;
    
        case Icons.INFO_M:
            return (await import("./info-m")).IconInfoM;
    
        case Icons.INFO_S:
            return (await import("./info-s")).IconInfoS;
    
        case Icons.INVISIBLE_FAT:
            return (await import("./invisible-fat")).IconInvisibleFat;
    
        case Icons.INVISIBLE_L:
            return (await import("./invisible-l")).IconInvisibleL;
    
        case Icons.INVISIBLE_M:
            return (await import("./invisible-m")).IconInvisibleM;
    
        case Icons.INVISIBLE_S:
            return (await import("./invisible-s")).IconInvisibleS;
    
        case Icons.KEY_BACKSPACE:
            return (await import("./key-backspace")).IconKeyBackspace;
    
        case Icons.KEY_DELETE:
            return (await import("./key-delete")).IconKeyDelete;
    
        case Icons.KEY_DOWN:
            return (await import("./key-down")).IconKeyDown;
    
        case Icons.KEY_EJECT:
            return (await import("./key-eject")).IconKeyEject;
    
        case Icons.KEY_ENTER:
            return (await import("./key-enter")).IconKeyEnter;
    
        case Icons.KEY_FUNCTION:
            return (await import("./key-function")).IconKeyFunction;
    
        case Icons.KEY_MAC_COMMAND:
            return (await import("./key-mac-command")).IconKeyMacCommand;
    
        case Icons.KEY_OPTION:
            return (await import("./key-option")).IconKeyOption;
    
        case Icons.KEY_PAGE_DOWN:
            return (await import("./key-page-down")).IconKeyPageDown;
    
        case Icons.KEY_PAGE_NEXT:
            return (await import("./key-page-next")).IconKeyPageNext;
    
        case Icons.KEY_PAGE_UP:
            return (await import("./key-page-up")).IconKeyPageUp;
    
        case Icons.KEY_PREVIOUS_UP:
            return (await import("./key-previous-up")).IconKeyPreviousUp;
    
        case Icons.KEY_SHIFT:
            return (await import("./key-shift")).IconKeyShift;
    
        case Icons.KEY_TAB:
            return (await import("./key-tab")).IconKeyTab;
    
        case Icons.KEY_UP:
            return (await import("./key-up")).IconKeyUp;
    
        case Icons.LIGHTNING_FLASH:
            return (await import("./lightning-flash")).IconLightningFlash;
    
        case Icons.LIKE:
            return (await import("./like")).IconLike;
    
        case Icons.LINK:
            return (await import("./link")).IconLink;
    
        case Icons.LOADER_DOTS2:
            return (await import("./loader-dots2")).IconLoaderDots2;
    
        case Icons.LOADER_DOTS:
            return (await import("./loader-dots")).IconLoaderDots;
    
        case Icons.LOCATION_MARKER:
            return (await import("./location-marker")).IconLocationMarker;
    
        case Icons.LOCATION_PIN:
            return (await import("./location-pin")).IconLocationPin;
    
        case Icons.MALE_SIMPLIFIED:
            return (await import("./male-simplified")).IconMaleSimplified;
    
        case Icons.MOON:
            return (await import("./moon")).IconMoon;
    
        case Icons.MOVING_BLOCK:
            return (await import("./moving-block")).IconMovingBlock;
    
        case Icons.MULTIPLY_FAT:
            return (await import("./multiply-fat")).IconMultiplyFat;
    
        case Icons.MULTIPLY_L:
            return (await import("./multiply-l")).IconMultiplyL;
    
        case Icons.MULTIPLY_M:
            return (await import("./multiply-m")).IconMultiplyM;
    
        case Icons.MULTIPLY_S:
            return (await import("./multiply-s")).IconMultiplyS;
    
        case Icons.NOTE_ADD2:
            return (await import("./note-add2")).IconNoteAdd2;
    
        case Icons.NOTE_ADD:
            return (await import("./note-add")).IconNoteAdd;
    
        case Icons.NOTE_BROKEN_HEART2:
            return (await import("./note-broken-heart2")).IconNoteBrokenHeart2;
    
        case Icons.NOTE_BROKEN_HEART:
            return (await import("./note-broken-heart")).IconNoteBrokenHeart;
    
        case Icons.NOTE_CHECK2:
            return (await import("./note-check2")).IconNoteCheck2;
    
        case Icons.NOTE_CHECK:
            return (await import("./note-check")).IconNoteCheck;
    
        case Icons.NOTE_EDIT2:
            return (await import("./note-edit2")).IconNoteEdit2;
    
        case Icons.NOTE_EDIT:
            return (await import("./note-edit")).IconNoteEdit;
    
        case Icons.NOTE_EXCLAMATION_MARK2:
            return (await import("./note-exclamation-mark2")).IconNoteExclamationMark2;
    
        case Icons.NOTE_EXCLAMATION_MARK:
            return (await import("./note-exclamation-mark")).IconNoteExclamationMark;
    
        case Icons.NOTE_HEART2:
            return (await import("./note-heart2")).IconNoteHeart2;
    
        case Icons.NOTE_HEART:
            return (await import("./note-heart")).IconNoteHeart;
    
        case Icons.NOTE_INFO2:
            return (await import("./note-info2")).IconNoteInfo2;
    
        case Icons.NOTE_INFO:
            return (await import("./note-info")).IconNoteInfo;
    
        case Icons.NOTE_INVISIBLE2:
            return (await import("./note-invisible2")).IconNoteInvisible2;
    
        case Icons.NOTE_INVISIBLE:
            return (await import("./note-invisible")).IconNoteInvisible;
    
        case Icons.NOTE_MULTIPLY2:
            return (await import("./note-multiply2")).IconNoteMultiply2;
    
        case Icons.NOTE_MULTIPLY:
            return (await import("./note-multiply")).IconNoteMultiply;
    
        case Icons.NOTE_QUESTION_MARK2:
            return (await import("./note-question-mark2")).IconNoteQuestionMark2;
    
        case Icons.NOTE_QUESTION_MARK:
            return (await import("./note-question-mark")).IconNoteQuestionMark;
    
        case Icons.NOTE_SEARCH2:
            return (await import("./note-search2")).IconNoteSearch2;
    
        case Icons.NOTE_SEARCH:
            return (await import("./note-search")).IconNoteSearch;
    
        case Icons.NOTE_STAR2:
            return (await import("./note-star2")).IconNoteStar2;
    
        case Icons.NOTE_STAR:
            return (await import("./note-star")).IconNoteStar;
    
        case Icons.NOTE_SUBTRACT2:
            return (await import("./note-subtract2")).IconNoteSubtract2;
    
        case Icons.NOTE_SUBTRACT:
            return (await import("./note-subtract")).IconNoteSubtract;
    
        case Icons.NOTE_VISIBLE2:
            return (await import("./note-visible2")).IconNoteVisible2;
    
        case Icons.NOTE_VISIBLE:
            return (await import("./note-visible")).IconNoteVisible;
    
        case Icons.NOTE:
            return (await import("./note")).IconNote;
    
        case Icons.ON_TARGET:
            return (await import("./on-target")).IconOnTarget;
    
        case Icons.PARAGRAPH:
            return (await import("./paragraph")).IconParagraph;
    
        case Icons.PERFORMANCE2:
            return (await import("./performance2")).IconPerformance2;
    
        case Icons.PERFORMANCE:
            return (await import("./performance")).IconPerformance;
    
        case Icons.PIN_TILTED:
            return (await import("./pin-tilted")).IconPinTilted;
    
        case Icons.PIN:
            return (await import("./pin")).IconPin;
    
        case Icons.PLANNER:
            return (await import("./planner")).IconPlanner;
    
        case Icons.POINTER_ARROW_LINE:
            return (await import("./pointer-arrow-line")).IconPointerArrowLine;
    
        case Icons.POINTER_ARROW:
            return (await import("./pointer-arrow")).IconPointerArrow;
    
        case Icons.POINTER_CROSS:
            return (await import("./pointer-cross")).IconPointerCross;
    
        case Icons.POINTER_HAND:
            return (await import("./pointer-hand")).IconPointerHand;
    
        case Icons.POINTER_LEFT:
            return (await import("./pointer-left")).IconPointerLeft;
    
        case Icons.POINTER_MOUSE:
            return (await import("./pointer-mouse")).IconPointerMouse;
    
        case Icons.POINTER_PEN:
            return (await import("./pointer-pen")).IconPointerPen;
    
        case Icons.POINTER_TARGET:
            return (await import("./pointer-target")).IconPointerTarget;
    
        case Icons.POINTER_TEXT:
            return (await import("./pointer-text")).IconPointerText;
    
        case Icons.QUESTION_MARK_FAT:
            return (await import("./question-mark-fat")).IconQuestionMarkFat;
    
        case Icons.QUESTION_MARK_L:
            return (await import("./question-mark-l")).IconQuestionMarkL;
    
        case Icons.QUESTION_MARK_M:
            return (await import("./question-mark-m")).IconQuestionMarkM;
    
        case Icons.QUESTION_MARK_S:
            return (await import("./question-mark-s")).IconQuestionMarkS;
    
        case Icons.REMOVE_LINES:
            return (await import("./remove-lines")).IconRemoveLines;
    
        case Icons.SEARCH_FAT:
            return (await import("./search-fat")).IconSearchFat;
    
        case Icons.SEARCH_L:
            return (await import("./search-l")).IconSearchL;
    
        case Icons.SEARCH_M:
            return (await import("./search-m")).IconSearchM;
    
        case Icons.SEARCH_SMALL:
            return (await import("./search-small")).IconSearchSmall;
    
        case Icons.SECTION:
            return (await import("./section")).IconSection;
    
        case Icons.SETTINGS2:
            return (await import("./settings2")).IconSettings2;
    
        case Icons.SETTINGS3:
            return (await import("./settings3")).IconSettings3;
    
        case Icons.SETTINGS4:
            return (await import("./settings4")).IconSettings4;
    
        case Icons.SETTINGS5:
            return (await import("./settings5")).IconSettings5;
    
        case Icons.SETTINGS:
            return (await import("./settings")).IconSettings;
    
        case Icons.SIMPLE_SUN:
            return (await import("./simple-sun")).IconSimpleSun;
    
        case Icons.SPEECH_BALLOON2:
            return (await import("./speech-balloon2")).IconSpeechBalloon2;
    
        case Icons.SPEECH_BALLOON_SQUARE2:
            return (await import("./speech-balloon-square2")).IconSpeechBalloonSquare2;
    
        case Icons.SPEECH_BALLOON_SQUARE_COPY:
            return (await import("./speech-balloon-square-copy")).IconSpeechBalloonSquareCopy;
    
        case Icons.SPEECH_BALLOON_SQUARE:
            return (await import("./speech-balloon-square")).IconSpeechBalloonSquare;
    
        case Icons.SPEECH_BALLOON:
            return (await import("./speech-balloon")).IconSpeechBalloon;
    
        case Icons.SPEECH_BALLOONS:
            return (await import("./speech-balloons")).IconSpeechBalloons;
    
        case Icons.SQUARED_ADD:
            return (await import("./squared-add")).IconSquaredAdd;
    
        case Icons.SQUARED_BROKEN_HEART:
            return (await import("./squared-broken-heart")).IconSquaredBrokenHeart;
    
        case Icons.SQUARED_CHECK:
            return (await import("./squared-check")).IconSquaredCheck;
    
        case Icons.SQUARED_EDIT:
            return (await import("./squared-edit")).IconSquaredEdit;
    
        case Icons.SQUARED_EXCLAMATION_MARK:
            return (await import("./squared-exclamation-mark")).IconSquaredExclamationMark;
    
        case Icons.SQUARED_HEART:
            return (await import("./squared-heart")).IconSquaredHeart;
    
        case Icons.SQUARED_INFO:
            return (await import("./squared-info")).IconSquaredInfo;
    
        case Icons.SQUARED_INVISIBLE:
            return (await import("./squared-invisible")).IconSquaredInvisible;
    
        case Icons.SQUARED_MULTIPLY:
            return (await import("./squared-multiply")).IconSquaredMultiply;
    
        case Icons.SQUARED_QUESTION_MARK:
            return (await import("./squared-question-mark")).IconSquaredQuestionMark;
    
        case Icons.SQUARED_SEARCH:
            return (await import("./squared-search")).IconSquaredSearch;
    
        case Icons.SQUARED_STAR:
            return (await import("./squared-star")).IconSquaredStar;
    
        case Icons.SQUARED_SUBTRACT:
            return (await import("./squared-subtract")).IconSquaredSubtract;
    
        case Icons.SQUARED_VISIBLE:
            return (await import("./squared-visible")).IconSquaredVisible;
    
        case Icons.SQUARED:
            return (await import("./squared")).IconSquared;
    
        case Icons.STAMP:
            return (await import("./stamp")).IconStamp;
    
        case Icons.STAR_FAT:
            return (await import("./star-fat")).IconStarFat;
    
        case Icons.STAR_L:
            return (await import("./star-l")).IconStarL;
    
        case Icons.STAR_M:
            return (await import("./star-m")).IconStarM;
    
        case Icons.STAR_SMALL:
            return (await import("./star-small")).IconStarSmall;
    
        case Icons.STICKER:
            return (await import("./sticker")).IconSticker;
    
        case Icons.STOPWATCH:
            return (await import("./stopwatch")).IconStopwatch;
    
        case Icons.SUBTRACT_FAT:
            return (await import("./subtract-fat")).IconSubtractFat;
    
        case Icons.SUBTRACT_L:
            return (await import("./subtract-l")).IconSubtractL;
    
        case Icons.SUBTRACT_M:
            return (await import("./subtract-m")).IconSubtractM;
    
        case Icons.SUBTRACT_S:
            return (await import("./subtract-s")).IconSubtractS;
    
        case Icons.SUN2:
            return (await import("./sun2")).IconSun2;
    
        case Icons.SUN:
            return (await import("./sun")).IconSun;
    
        case Icons.TABLES:
            return (await import("./tables")).IconTables;
    
        case Icons.TALK_ADD:
            return (await import("./talk-add")).IconTalkAdd;
    
        case Icons.TALK_CHECK:
            return (await import("./talk-check")).IconTalkCheck;
    
        case Icons.TALK_DELETE:
            return (await import("./talk-delete")).IconTalkDelete;
    
        case Icons.TALK_EDIT:
            return (await import("./talk-edit")).IconTalkEdit;
    
        case Icons.TALK_EXCLAMATION_MARK:
            return (await import("./talk-exclamation-mark")).IconTalkExclamationMark;
    
        case Icons.TALK_HEART_BROKEN:
            return (await import("./talk-heart-broken")).IconTalkHeartBroken;
    
        case Icons.TALK_HEART:
            return (await import("./talk-heart")).IconTalkHeart;
    
        case Icons.TALK_INFO:
            return (await import("./talk-info")).IconTalkInfo;
    
        case Icons.TALK_INVISIBLE:
            return (await import("./talk-invisible")).IconTalkInvisible;
    
        case Icons.TALK_QUESTION_MARK:
            return (await import("./talk-question-mark")).IconTalkQuestionMark;
    
        case Icons.TALK_SEARCH:
            return (await import("./talk-search")).IconTalkSearch;
    
        case Icons.TALK_STAR:
            return (await import("./talk-star")).IconTalkStar;
    
        case Icons.TALK_SUBTRACT:
            return (await import("./talk-subtract")).IconTalkSubtract;
    
        case Icons.TALK_VISIBLE:
            return (await import("./talk-visible")).IconTalkVisible;
    
        case Icons.TALK:
            return (await import("./talk")).IconTalk;
    
        case Icons.TARGET:
            return (await import("./target")).IconTarget;
    
        case Icons.TEXT_ALIGN_CENTER:
            return (await import("./text-align-center")).IconTextAlignCenter;
    
        case Icons.TEXT_ALIGN_JUSTIFY_CENTERED:
            return (await import("./text-align-justify-centered")).IconTextAlignJustifyCentered;
    
        case Icons.TEXT_ALIGN_JUSTIFY_LEFT:
            return (await import("./text-align-justify-left")).IconTextAlignJustifyLeft;
    
        case Icons.TEXT_ALIGN_JUSTIFY_RIGHT:
            return (await import("./text-align-justify-right")).IconTextAlignJustifyRight;
    
        case Icons.TEXT_ALIGN_JUSTIFY:
            return (await import("./text-align-justify")).IconTextAlignJustify;
    
        case Icons.TEXT_ALIGN_LEFT:
            return (await import("./text-align-left")).IconTextAlignLeft;
    
        case Icons.TEXT_ALIGN_RIGHT_ORDER_DESC:
            return (await import("./text-align-right-order-desc")).IconTextAlignRightOrderDesc;
    
        case Icons.TEXT_ALIGN_RIGHT:
            return (await import("./text-align-right")).IconTextAlignRight;
    
        case Icons.TEXT_BOLD:
            return (await import("./text-bold")).IconTextBold;
    
        case Icons.TEXT_DETAIL_LIST:
            return (await import("./text-detail-list")).IconTextDetailList;
    
        case Icons.TEXT_INDENT:
            return (await import("./text-indent")).IconTextIndent;
    
        case Icons.TEXT_ITALIC:
            return (await import("./text-italic")).IconTextItalic;
    
        case Icons.TEXT_LINE_THROUGH:
            return (await import("./text-line-through")).IconTextLineThrough;
    
        case Icons.TEXT_ORDER_ASC123:
            return (await import("./text-order-asc123")).IconTextOrderAsc123;
    
        case Icons.TEXT_ORDER_ASC127:
            return (await import("./text-order-asc127")).IconTextOrderAsc127;
    
        case Icons.TEXT_ORDER_DESC_COPY2:
            return (await import("./text-order-desc-copy2")).IconTextOrderDescCopy2;
    
        case Icons.TEXT_ORDER_DESC_COPY3:
            return (await import("./text-order-desc-copy3")).IconTextOrderDescCopy3;
    
        case Icons.TEXT_ORDER_DESC_COPY:
            return (await import("./text-order-desc-copy")).IconTextOrderDescCopy;
    
        case Icons.TEXT_ORDER_DESC:
            return (await import("./text-order-desc")).IconTextOrderDesc;
    
        case Icons.TEXT_OUTDENT:
            return (await import("./text-outdent")).IconTextOutdent;
    
        case Icons.TEXT_UNDERLINE:
            return (await import("./text-underline")).IconTextUnderline;
    
        case Icons.THERMOMETER_COLD:
            return (await import("./thermometer-cold")).IconThermometerCold;
    
        case Icons.THERMOMETER_HOT:
            return (await import("./thermometer-hot")).IconThermometerHot;
    
        case Icons.THERMOMETER:
            return (await import("./thermometer")).IconThermometer;
    
        case Icons.TIMER:
            return (await import("./timer")).IconTimer;
    
        case Icons.TRASH2:
            return (await import("./trash2")).IconTrash2;
    
        case Icons.TRASH:
            return (await import("./trash")).IconTrash;
    
        case Icons.TRIANGLED_EXCLAMATION_MARK:
            return (await import("./triangled-exclamation-mark")).IconTriangledExclamationMark;
    
        case Icons.TRIANGLED_INFO:
            return (await import("./triangled-info")).IconTriangledInfo;
    
        case Icons.TRIANGLED_QUESTION_MARK:
            return (await import("./triangled-question-mark")).IconTriangledQuestionMark;
    
        case Icons.TRIANGLED:
            return (await import("./triangled")).IconTriangled;
    
        case Icons.USER_ADD:
            return (await import("./user-add")).IconUserAdd;
    
        case Icons.USER_DELETE:
            return (await import("./user-delete")).IconUserDelete;
    
        case Icons.USER_GROUP:
            return (await import("./user-group")).IconUserGroup;
    
        case Icons.USER:
            return (await import("./user")).IconUser;
    
        case Icons.USERS:
            return (await import("./users")).IconUsers;
    
        case Icons.VISIBLE_FAT:
            return (await import("./visible-fat")).IconVisibleFat;
    
        case Icons.VISIBLE_L:
            return (await import("./visible-l")).IconVisibleL;
    
        case Icons.VISIBLE_M:
            return (await import("./visible-m")).IconVisibleM;
    
        case Icons.VISIBLE_S:
            return (await import("./visible-s")).IconVisibleS;
    
        case Icons.WHEELCHAIR_ACTION:
            return (await import("./wheelchair-action")).IconWheelchairAction;
    
        case Icons.WHEELCHAIR:
            return (await import("./wheelchair")).IconWheelchair;
    
        case Icons.AIRPLANE_ARRIVALS:
            return (await import("./airplane-arrivals")).IconAirplaneArrivals;
    
        case Icons.AIRPLANE_DEPARTURES:
            return (await import("./airplane-departures")).IconAirplaneDepartures;
    
        case Icons.AIRPLANE:
            return (await import("./airplane")).IconAirplane;
    
        case Icons.AIRPORT_CONNECT_FLIGHTS:
            return (await import("./airport-connect-flights")).IconAirportConnectFlights;
    
        case Icons.AIRPORT_TRANSFER2:
            return (await import("./airport-transfer2")).IconAirportTransfer2;
    
        case Icons.AIRPORT_TRANSFER:
            return (await import("./airport-transfer")).IconAirportTransfer;
    
        case Icons.ANCHOR:
            return (await import("./anchor")).IconAnchor;
    
        case Icons.BICYCLE_SURFBOARD:
            return (await import("./bicycle-surfboard")).IconBicycleSurfboard;
    
        case Icons.BICYCLE:
            return (await import("./bicycle")).IconBicycle;
    
        case Icons.BRIEFCASE_CROSS:
            return (await import("./briefcase-cross")).IconBriefcaseCross;
    
        case Icons.CAR:
            return (await import("./car")).IconCar;
    
        case Icons.CROSS_CIRCLED:
            return (await import("./cross-circled")).IconCrossCircled;
    
        case Icons.CROSS:
            return (await import("./cross")).IconCross;
    
        case Icons.CRUISESHIP:
            return (await import("./cruiseship")).IconCruiseship;
    
        case Icons.ELEVATOR1:
            return (await import("./elevator1")).IconElevator1;
    
        case Icons.ELEVATOR2:
            return (await import("./elevator2")).IconElevator2;
    
        case Icons.ELEVATOR3:
            return (await import("./elevator3")).IconElevator3;
    
        case Icons.ELEVATOR4:
            return (await import("./elevator4")).IconElevator4;
    
        case Icons.ESCALATOR_DOWN:
            return (await import("./escalator-down")).IconEscalatorDown;
    
        case Icons.ESCALATOR_UP:
            return (await import("./escalator-up")).IconEscalatorUp;
    
        case Icons.ESCALATOR:
            return (await import("./escalator")).IconEscalator;
    
        case Icons.FERRY:
            return (await import("./ferry")).IconFerry;
    
        case Icons.FIRE_EXTINGUISHER:
            return (await import("./fire-extinguisher")).IconFireExtinguisher;
    
        case Icons.FIRE_HOSE:
            return (await import("./fire-hose")).IconFireHose;
    
        case Icons.FIRE:
            return (await import("./fire")).IconFire;
    
        case Icons.GRAVESTONE2:
            return (await import("./gravestone2")).IconGravestone2;
    
        case Icons.GRAVESTONE3:
            return (await import("./gravestone3")).IconGravestone3;
    
        case Icons.GRAVESTONE:
            return (await import("./gravestone")).IconGravestone;
    
        case Icons.LUGGAGE_BELT:
            return (await import("./luggage-belt")).IconLuggageBelt;
    
        case Icons.LUGGAGE_LOCKER:
            return (await import("./luggage-locker")).IconLuggageLocker;
    
        case Icons.LUGGAGE_TROLLEY:
            return (await import("./luggage-trolley")).IconLuggageTrolley;
    
        case Icons.LUGGAGE:
            return (await import("./luggage")).IconLuggage;
    
        case Icons.METRO2:
            return (await import("./metro2")).IconMetro2;
    
        case Icons.METRO:
            return (await import("./metro")).IconMetro;
    
        case Icons.NO_SMOKING_CIRCLED:
            return (await import("./no-smoking-circled")).IconNoSmokingCircled;
    
        case Icons.NO_SMOKING:
            return (await import("./no-smoking")).IconNoSmoking;
    
        case Icons.PALMTREE_ISLAND_WAVE:
            return (await import("./palmtree-island-wave")).IconPalmtreeIslandWave;
    
        case Icons.PALMTREE_ISLAND:
            return (await import("./palmtree-island")).IconPalmtreeIsland;
    
        case Icons.PALMTREE:
            return (await import("./palmtree")).IconPalmtree;
    
        case Icons.PARASOL_ISLAND_WAVE:
            return (await import("./parasol-island-wave")).IconParasolIslandWave;
    
        case Icons.PARASOL_ISLAND:
            return (await import("./parasol-island")).IconParasolIsland;
    
        case Icons.PARASOL:
            return (await import("./parasol")).IconParasol;
    
        case Icons.PLASTER:
            return (await import("./plaster")).IconPlaster;
    
        case Icons.PLASTERS:
            return (await import("./plasters")).IconPlasters;
    
        case Icons.RENTAL_CAR:
            return (await import("./rental-car")).IconRentalCar;
    
        case Icons.SECURITY_CAMERA2:
            return (await import("./security-camera2")).IconSecurityCamera2;
    
        case Icons.SECURITY_CAMERA3:
            return (await import("./security-camera3")).IconSecurityCamera3;
    
        case Icons.SECURITY_CAMERA:
            return (await import("./security-camera")).IconSecurityCamera;
    
        case Icons.SHIP:
            return (await import("./ship")).IconShip;
    
        case Icons.SIGNPOST2:
            return (await import("./signpost2")).IconSignpost2;
    
        case Icons.SIGNPOST:
            return (await import("./signpost")).IconSignpost;
    
        case Icons.SMOKING:
            return (await import("./smoking")).IconSmoking;
    
        case Icons.STAIRS_DOWN:
            return (await import("./stairs-down")).IconStairsDown;
    
        case Icons.STAIRS_UP:
            return (await import("./stairs-up")).IconStairsUp;
    
        case Icons.STAIRS:
            return (await import("./stairs")).IconStairs;
    
        case Icons.TAXI:
            return (await import("./taxi")).IconTaxi;
    
        case Icons.TRAIN_TRACK:
            return (await import("./train-track")).IconTrainTrack;
    
        case Icons.TRAIN:
            return (await import("./train")).IconTrain;
            default:
            return null;
    }
}

const findIt = (needle: string | string[], haystack: string | string[]): boolean => {

    const needles = (Array.isArray(needle) ? needle : [needle]).map((str) => str.toLowerCase());
    const haystacks = (Array.isArray(haystack) ? haystack : [haystack]).map((str) => str.toLowerCase());

    return needles.some(n => haystacks.some(h => h.includes(n)));
}



export const searchIcon = (term: string, searchIn: 'name' | 'category' | 'tag' | 'description' | undefined = undefined): {
    id: string;
    name: string;
    title: string;
    category: string[];
    tag: string[];
    description: string;
}[] | undefined => {


    const meta = {};

    const mergedIcons = Object.keys(Icons).map((key) => {
        const value = Icons[key as keyof typeof Icons];
        const metaData = meta[key as keyof typeof Icons];
        return {
            id: key,
            name: value,
            ...metaData
        }
    });
    return mergedIcons.filter((icon) => {
        if (searchIn) {
            // If searchIn is provided, search in the specified field
            return findIt(term, icon[searchIn as keyof typeof icon]);
        } else {
            // If searchIn is not provided, search in all fields
            return ['name', 'category', 'tag', 'description', 'title'].some(field => findIt(term, icon[field as keyof typeof icon]));
        }
    });

}



export {
    Icons
}