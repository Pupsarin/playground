import React, {useEffect} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {RenderField} from "./RenderField";
import {IRefs} from "./TestForm";
import { validate } from './validate';
import { setRef, nextInput } from "./utils";

const FirstStep: React.FC<InjectedFormProps> = ({handleSubmit}) => {
    const refs: IRefs = {};

    useEffect(() => {
        refs?.email?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Field
                id="email-input"
                component={RenderField}
                label="Email"
                name="email"
                type="email"
                inputRef={setRef('email', refs)}
                onKeyPress={nextInput('username', refs)}
            />
            <Field
                id="username-input"
                label="Username"
                name="username"
                type="text"
                component={RenderField}
                inputRef={setRef('username', refs)}
                onKeyPress={nextInput('submit', refs)}
            />
            <button
                type="submit"
                ref={(el) => refs['submit'] = el}
            >
                Next
            </button>
        </form>
    )
}

export const Step1 = reduxForm({
    form: 'auth-form',
    destroyOnUnmount: false,
    validate
})(FirstStep);