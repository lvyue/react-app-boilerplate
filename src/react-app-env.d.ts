/// <reference types="react-scripts" />

export {};

declare global {
    // define new props on window
    interface Window {
        CUSTOME_PROP: unknown;
    }
    namespace React {
        interface DOMAttributes<T> {
            clstag?: string;
        }
    }
}
