import {Show} from "solid-js";

export type AppImageButtonProps = {
    active: boolean,
    onClick?: () => void
    src: string
    text?: string | null
};

export default function AppImageButton(props: AppImageButtonProps) {
    return (
        <div class="h-auto max-w-lg">
            <img
                class="btn p-0 w-full h-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                classList={{"grayscale-0": props.active}}
                src={props.src}
                onClick={() => props.onClick?.()}/>
            <Show when={props.text}>
                <div class="absolute bottom-0 left-0 right-0 bg-base-300/80">{props.text}</div>
            </Show>
        </div>
    );
}
