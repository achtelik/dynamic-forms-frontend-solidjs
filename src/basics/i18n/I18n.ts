import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {createSignal} from "solid-js";

export namespace I18n {
    export const [getState, setState] = createSignal("");

    export const next = i18next
    export const t = i18next.t


    export function init() {
        i18next
            .use(I18nextBrowserLanguageDetector)
            .use(I18NextHttpBackend)
            .init({
                fallbackLng: 'en',
                debug: false,
                ns: 'global',
                defaultNS: 'global',
                backend: {
                    // for all available options read the backend's repository readme file
                    loadPath: '/i18n/{{lng}}/{{ns}}.json'
                },
            })
        i18next.on("initialized", options => {
            setState("")
            setState(new Date().toISOString())
        })
        i18next.on("languageChanged", lng => {
            setState("")
            setState(new Date().toISOString())
        })
    }
}
