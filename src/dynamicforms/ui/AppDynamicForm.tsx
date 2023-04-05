import {DynamicFormFieldType, DynamicFormModel} from "~/dynamicforms/core/model/DynamicForm.model";
import {createMemo, createSignal, For, JSX} from "solid-js";
import {AppDynamicLabel} from "~/dynamicforms/ui/AppDynamicLabel";
import {AppDynamicText} from "~/dynamicforms/ui/AppDynamicText";
import {AppDynamicInput} from "~/dynamicforms/ui/AppDynamicInput";
import {AppDynamicRange} from "~/dynamicforms/ui/AppDynamicRange";

export interface AppDynamicFormProps {
    dynamicFormModel: DynamicFormModel
}

export default function AppDynamicForm(props: AppDynamicFormProps) {
    const [getDynamicFormModel, setDynamicFormModel] = createSignal<DynamicFormModel>(props.dynamicFormModel)
    const jsxElements = createMemo(() => mapModelToJsx(getDynamicFormModel()))
    const [isDropAreaVisible, setDropAreaVisible] = createSignal(true)
    return (
        <div class="text-base-content flex flex-col items-start gap-2">
            <div class="w-full flex justify-end">
                <button class="btn" onClick={() => setDropAreaVisible(!isDropAreaVisible())}>Toggle Drop Areas</button>
            </div>
            <For each={jsxElements()}>
                {(element, index) =>
                    <>
                        <div class="h-1 w-full bg-base-200 hover:h-8 overflow-hidden"
                             classList={{hidden: !isDropAreaVisible()}}
                             onDragOver={(e) => e.preventDefault()}
                             onDragEnter={(e) => {
                                 e?.currentTarget?.classList.add("h-8")
                             }}
                             onDragLeave={(e) => {
                                 e?.currentTarget?.classList.remove("h-8")
                             }}
                             onDrop={(e) => {
                                 e?.currentTarget?.classList.remove("h-8")
                                 const data = e?.dataTransfer?.getData("data")
                                 if (data) {
                                     const dynamicFormModel = getDynamicFormModel()
                                     dynamicFormModel.fields.splice(index(), 0, JSON.parse(data))
                                     setDynamicFormModel({...dynamicFormModel})
                                     console.log(dynamicFormModel)
                                 }
                             }}
                        >Drop here new elements!
                        </div>
                        {element}
                    </>}
            </For>
        </div>
    )
}

function mapModelToJsx(fieldsModel: DynamicFormModel): JSX.Element[] {
    return fieldsModel.fields.map(field => {
        switch (field.type) {
            case DynamicFormFieldType.INPUT:
                return (<AppDynamicInput dynamicFormField={field}></AppDynamicInput>)
            case DynamicFormFieldType.LABEL:
                return (<AppDynamicLabel dynamicFormField={field}></AppDynamicLabel>)
            case DynamicFormFieldType.RANGE:
                return (<AppDynamicRange dynamicFormField={field}></AppDynamicRange>)
            case DynamicFormFieldType.TEXT:
                return (<AppDynamicText dynamicFormField={field}></AppDynamicText>)
        }
    })
}
