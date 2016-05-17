export const isBrowser = typeof window === "object";

//Grab variables from process.env or window
export const {
    DEV_ENDPOINT_BASE
} = isBrowser ? window.__APP_ENV_VARS__ : process.env;
