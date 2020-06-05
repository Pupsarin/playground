import React from "react";
import { IRenderField } from "./TestForm";

export const RenderField: React.FC<IRenderField> = ({onEnter, inputRef, id, label, type, input, meta}) => {
    console.log(input)
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input onKeyPress={onEnter} ref={inputRef} id={id} type={type}/>
        </div>
    )
}