import {JSX} from "solid-js";
import {AppDynamicLabel} from "~/dynamicforms/ui/AppDynamicLabel";
import {DynamicFormField, DynamicFormFieldType} from "~/dynamicforms/core/model/DynamicForm.model";
import {AppDynamicInput} from "~/dynamicforms/ui/AppDynamicInput";
import {AppDynamicText} from "~/dynamicforms/ui/AppDynamicText";
import {AppDynamicRange} from "~/dynamicforms/ui/AppDynamicRange";


export function AppDynamicFormComponents() {
    let formFieldConfigMap = new Map<DynamicFormFieldType, DynamicFormField>([
        [DynamicFormFieldType.LABEL, {
            id: "1",
            type: DynamicFormFieldType.LABEL,
            value: "Label"
        }],
        [DynamicFormFieldType.INPUT, {
            id: "2",
            type: DynamicFormFieldType.INPUT,
            value: "Input"
        }],
        [DynamicFormFieldType.RANGE, {
            id: "3",
            type: DynamicFormFieldType.RANGE,
            value: "50"
        }],
        [DynamicFormFieldType.TEXT, {
            id: "3",
            type: DynamicFormFieldType.TEXT,
            value: "Text"
        }],
    ])
    return (
        <ul class="list-reset flex flex-row md:flex-col py-1 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li class="flex-1 border w-full p-2" draggable={true}
                onDragStart={(e) => e?.dataTransfer?.setData("data", JSON.stringify(formFieldConfigMap.get(DynamicFormFieldType.LABEL)))}>
                <AppDynamicLabel
                    dynamicFormField={formFieldConfigMap.get(DynamicFormFieldType.LABEL)!}></AppDynamicLabel>
            </li>
            <li class="flex-1 border w-full p-2" draggable={true}
                onDragStart={(e) => e?.dataTransfer?.setData("data", JSON.stringify(formFieldConfigMap.get(DynamicFormFieldType.INPUT)))}>
                <AppDynamicInput
                    dynamicFormField={formFieldConfigMap.get(DynamicFormFieldType.INPUT)!}></AppDynamicInput>
            </li>
            <li class="flex-1 border w-full p-2" draggable={true}
                onDragStart={(e) => e?.dataTransfer?.setData("data", JSON.stringify(formFieldConfigMap.get(DynamicFormFieldType.RANGE)))}>
                <AppDynamicRange
                    dynamicFormField={formFieldConfigMap.get(DynamicFormFieldType.RANGE)!}></AppDynamicRange>
            </li>
            <li class="flex-1 border w-full p-2" draggable={true}
                onDragStart={(e) => e?.dataTransfer?.setData("data", JSON.stringify(formFieldConfigMap.get(DynamicFormFieldType.TEXT)))}>
                <AppDynamicText
                    dynamicFormField={formFieldConfigMap.get(DynamicFormFieldType.TEXT)!}></AppDynamicText>
            </li>
        </ul>
    )
}
