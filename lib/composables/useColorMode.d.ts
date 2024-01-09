import { ColorMode } from '../types';
export declare const setBodyAttribute: () => void;
export declare const useColorMode: () => {
    setColorMode: (mode: ColorMode) => void;
    toggleColorMode: () => void;
    colorMode: import("vue").ComputedRef<string>;
};
