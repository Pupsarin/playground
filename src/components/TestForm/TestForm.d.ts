import React, {Ref} from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";

export interface IRenderField {
    label: string
    id: string
    type: string
    inputRef: any
    onKeyPress?: onKeyPressType
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    showOnSubmit: boolean
}

export type onKeyPressType = (e: React.KeyboardEvent) => void

export interface IRefs {
    [key: string]: HTMLInputElement | HTMLButtonElement | null
}

export type SetRefType = (ref: HTMLInputElement | HTMLButtonElement) => void;
export type SetupSetRef = (name: string, refs: IRefs) => SetRefType;

export type NextInputHandlerType = (e: React.KeyboardEvent) => void;
export type SetupNextInputType = (nextInputName: string, refs: IRefs) => NextInputHandlerType;

export type ObjectOfString = {
    [key: string]: string
}

export type ValidationType = (values: ObjectOfString) => ObjectOfString;