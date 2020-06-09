import React from "react";
import {IRenderField} from "./TestForm";

export const RenderField: React.FC<IRenderField> = ({onKeyPress, inputRef, id, label, type, input, meta, showOnSubmit}) => {
    if (label === 'Repeat password' && showOnSubmit) console.log(`${label}: `, meta.submitFailed)

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input {...input} onKeyPress={onKeyPress} ref={inputRef} id={id} type={type}/>
            {showOnSubmit
                ? meta.submitFailed &&  <span>{meta.error}</span>
                : meta.touched && <span>{meta.error}</span>
            }
        </div>
    )
}