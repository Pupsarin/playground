import React from "react";
import { reduxForm } from "redux-form";

const Test: React.FC = () => {
    return (
        <div></div>
    )
}

export const TestForm = reduxForm({
    form: 'testForm'
})(Test);

