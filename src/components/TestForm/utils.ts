import {IRefs, SetupSetRef, SetupNextInputType} from "./TestForm";

export const setRef: SetupSetRef = (name, refs: IRefs) => (ref) => {
    refs[name] = ref;
}

export const nextInput: SetupNextInputType = (nextInputName, refs) => (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        refs[nextInputName]?.focus();
    }
}