import {DynamicFormField} from "~/dynamicforms/core/model/DynamicForm.model";

export interface AppDynamicRangeProps {
    dynamicFormField: DynamicFormField
}

export function AppDynamicRange(props: AppDynamicRangeProps) {
    return (
        <input id={props.dynamicFormField.id} type="range" min="0" max="100" value={props.dynamicFormField.value} class="range range-primary"/>
    )
}
