export const isBrowser = typeof window === "object";

//Grab variables from process.env or window
export const {
    APP_WEB_BASE_PATH,
    DEV_ENDPOINT_BASE
} = isBrowser ? window.__APP_ENV_VARS__ : process.env;
