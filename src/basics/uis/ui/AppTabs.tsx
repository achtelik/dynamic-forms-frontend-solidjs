import {Accessor, For, Setter, Show} from "solid-js";
import {I18n} from "~/basics/i18n/I18n";

export interface AppTabsProps {
    tabTextArray: string[]
    tabSelectSetIndex: Setter<number>
    tabSelectGetIndex: Accessor<number>
    filterEnabled?: boolean
}

export default function AppTabs(props: AppTabsProps) {
    console.log(props.tabSelectGetIndex())
    return (
        <div class="tabs tabs-boxed items-center">
            <For each={props.tabTextArray}>
                {(item, index) => (
                    <a class="tab" classList={{"tab-active": props.tabSelectGetIndex() == index()}}
                       onClick={() => props.tabSelectSetIndex(index)}>{item}</a>
                )}
            </For>
            <Show when={props.filterEnabled}>
                <input type="text" placeholder={I18n.t('global:universe.selectionmenu.filter').toString()}
                       class="input input-xs flex-1 min-w-0"/>
            </Show>
        </div>)
}
