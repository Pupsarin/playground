import {ObjectOfString, ValidationType} from "./TestForm";

export const validate: ValidationType = (values) => {
    const {username, email, password, 'repeat-password': repeatPassword} = values;
    const errors: ObjectOfString = {};
    if (!username) {
        errors.username = 'Required'
    }
    if (!email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (repeatPassword && password !== repeatPassword) {
        errors.password = 'Passwords do not match';
    }
    return errors;
}
