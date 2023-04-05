import {For, JSX} from "solid-js";

export interface AppSideBarProps {
    children?: JSX.Element[]
}

export default function AppSideBar(props: AppSideBarProps) {

    return (<nav aria-label="alternative nav">
        <div
            class="bg-neutral shadow-xl fixed bottom-0  md:relative z-10 w-full md:w-32 content-center">
            <div
                class="md:mt-12 md:w-32 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                {props.children}
            </div>
        </div>
    </nav>);
}
