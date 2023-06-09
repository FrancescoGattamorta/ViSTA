import { supportsLocalStorage } from './helpers';
const localStorageAdapter = {
    getItem: (key) => {
        if (!supportsLocalStorage()) {
            return null;
        }
        return globalThis.localStorage.getItem(key);
    },
    setItem: (key, value) => {
        if (!supportsLocalStorage()) {
            return;
        }
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key) => {
        if (!supportsLocalStorage()) {
            return;
        }
        globalThis.localStorage.removeItem(key);
    },
};
export default localStorageAdapter;
//# sourceMappingURL=local-storage.js.map