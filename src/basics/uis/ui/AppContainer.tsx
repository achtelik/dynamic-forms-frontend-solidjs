import {JSX} from "solid-js";

export type AppContainerProps = {
    children?: JSX.Element
};


export default function AppContainer(props: AppContainerProps) {
    return (
        <div class="bg-base-200 rounded-xl p-4">
            {props.children}
        </div>
    );
}
