// @refresh reload
import {Show, Suspense} from "solid-js";
import {Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title,} from "solid-start";
import "./root.css";
import {I18n} from "~/basics/i18n/I18n";
import AppNavBar from "~/basics/template/ui/AppNavBar";
import AppFooter from "~/footer/Footer";
import AppSideBar from "~/basics/template/ui/AppSideBar";
import {AppDynamicFormComponents} from "~/dynamicforms/ui/AppDynamicFormComponents";

export default function Root() {
    I18n.init()

    return (
        <Html lang="en">
            <Head>
                <Title>AIgenrator</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Meta name="description" content="AIgenrator - An AI tool set."/>
            </Head>

            <Body class="bg-neutral font-sans leading-normal tracking-normal">
                <Suspense>
                    <ErrorBoundary>
                        <Show when={I18n.getState() != ""} fallback={<div>Loading application files...</div>}>
                            <div class="h-screen">
                                <AppNavBar/>
                                <div class="h-full">
                                    <div class="h-full flex flex-col md:flex-row">
                                        <AppSideBar children={[AppDynamicFormComponents]}/>
                                        <main id="main"
                                              class="main-content w-full flex-1 bg-gray-900 overflow-auto pt-14 pb-18 md:pb-2 px-2">
                                            <Routes>
                                                <FileRoutes/>
                                            </Routes>
                                        </main>
                                    </div>
                                    <AppFooter/>
                                </div>
                            </div>
                        </Show>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
                <script src="/env/env.js"></script>
            </Body>
        </Html>
    );
}
