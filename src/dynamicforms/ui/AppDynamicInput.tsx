import {DynamicFormField} from "~/dynamicforms/core/model/DynamicForm.model";

export interface AppDynamicInputProps {
    dynamicFormField: DynamicFormField
}

export function AppDynamicInput(props: AppDynamicInputProps) {
    return (
        <input id={props.dynamicFormField.id} value={props.dynamicFormField.value} class="input input-bordered w-full"></input>
    )
}
