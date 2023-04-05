export interface DynamicFormModel {
    fields: DynamicFormField[]
}

export enum DynamicFormFieldType {
    INPUT = "INPUT",
    LABEL = "LABEL",
    RANGE = "RANGE",
    TEXT = "TEXT",

}


export interface DynamicFormField {
    type: DynamicFormFieldType,
    id: string,
    value: string
}
