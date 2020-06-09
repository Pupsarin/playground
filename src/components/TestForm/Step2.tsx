import React, {useEffect} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {RenderField} from "./RenderField";
import {IRefs} from "./TestForm";
import { setRef, nextInput } from "./utils";
import {validate} from "./validate";

interface IStep2Props {
    previousPage: () => void
}

const SecondStep: React.FC<IStep2Props & InjectedFormProps<{}, IStep2Props>> = ({previousPage, handleSubmit}) => {
    const refs: IRefs = {};
    useEffect(() => {
        refs?.password?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Field
                id="password-input"
                component={RenderField}
                label="Password"
                name="password"
                type="password"
                inputRef={setRef('password', refs)}
                onKeyPress={nextInput('repeat-password', refs)}
                showOnSubmit
            />
            <Field
                id="repeat-password-input"
                label="Repeat password"
                name="repeat-password"
                type="password"
                component={RenderField}
                inputRef={setRef('repeat-password', refs)}
                onKeyPress={nextInput('submit', refs)}
                showOnSubmit
            />
            <button onClick={previousPage}>
                Back
            </button>
            <button
                type="submit"
                ref={(el) => refs['submit'] = el}
            >
                Submit
            </button>
        </form>
    )
}

export const Step2 = reduxForm<{}, IStep2Props>({
    form: 'auth-form',
    destroyOnUnmount: false,
    validate
})(SecondStep);