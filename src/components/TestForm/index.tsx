import React, {FormEvent, useEffect} from "react";
import {reduxForm, Field} from "redux-form";
import {RenderField} from "./RenderField";
import {IRefs, SetupSetRef} from "./TestForm";

const Test: React.FC = (props) => {
    const refs: IRefs = {};

    const setRef: SetupSetRef = (name) => (ref) => {
        refs[name] = ref;
    }

    const nextInput = (nextInputName: string) => (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            refs[nextInputName]?.focus();
        }
    }

    return (
        <form onSubmit={(e: FormEvent) => e.preventDefault()}>
            <Field
                id="email-input"
                component={RenderField}
                label="Email"
                name="email"
                type="email"
                inputRef={setRef('email')}
                onEnter={nextInput('username')}
            />
            <Field
                id="username-input"
                label="Username"
                name="username"
                type="text"
                component={RenderField}
                inputRef={setRef('username')}
            />
        </form>
    )
}

export const TestForm = reduxForm({
    form: 'testForm'
})(Test);

