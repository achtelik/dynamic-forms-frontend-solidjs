import {DynamicFormField} from "~/dynamicforms/core/model/DynamicForm.model";

export interface AppDynamicLabelProps {
    dynamicFormField: DynamicFormField
}

export function AppDynamicLabel(props: AppDynamicLabelProps) {
    return (
        <label id={props.dynamicFormField.id} textContent={props.dynamicFormField.value}></label>
    )
}
