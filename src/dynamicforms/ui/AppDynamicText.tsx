import {DynamicFormField} from "~/dynamicforms/core/model/DynamicForm.model";

export interface AppDynamicTextProps {
    dynamicFormField: DynamicFormField
}

export function AppDynamicText(props: AppDynamicTextProps) {
    return (
        <p id={props.dynamicFormField.id} textContent={props.dynamicFormField.value}></p>
    )
}
