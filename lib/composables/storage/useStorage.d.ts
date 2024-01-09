import { StorageOptions } from "./types";
export declare const retrieveState: (defaultState: Object, key: string, options?: Partial<StorageOptions>) => Promise<any>;
export declare const watchState: (state: Object, key: string, options?: Partial<StorageOptions>) => void;
export declare const saveState: (state: Object, key: string, options?: Partial<StorageOptions>) => void;
export declare const clearState: (key: string, options?: Partial<StorageOptions>) => void;
