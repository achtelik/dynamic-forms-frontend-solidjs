import AppDynamicForm from "~/dynamicforms/ui/AppDynamicForm";
import {DynamicFormFieldType, DynamicFormModel} from "~/dynamicforms/core/model/DynamicForm.model";

export default function Index() {
    const dynamicFormModel: DynamicFormModel = {
        fields: [
            {id: "labelFullName", value: "Full name:", type: DynamicFormFieldType.LABEL},
            {id: "inputFullName", value: "Matthias Achtelik", type: DynamicFormFieldType.INPUT},
            {
                id: "textFullName",
                value: "Please share your full name with us. We don't do any bad things with it. Believe us. :D",
                type: DynamicFormFieldType.TEXT
            },
        ]
    }
    return (
        <div class="text-center mx-auto text-gray-700">
            <AppDynamicForm dynamicFormModel={dynamicFormModel}></AppDynamicForm>
        </div>
    );
}
