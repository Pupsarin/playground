import React from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";

export interface IRenderField {
    label: string
    id: string
    type: string
    inputRef: any
    onEnter?: OnEnterType
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}

export type OnEnterType = (e: React.KeyboardEvent) => void

export interface IRefs {
    [key: string]: HTMLInputElement | null
}

export type SetRefType = (ref: HTMLInputElement) => void;
export type SetupSetRef = (name: string) => SetRefType;