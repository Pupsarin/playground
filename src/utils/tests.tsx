import React from "react";
import {shallow, ShallowWrapper} from "enzyme";

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
    return wrapper.find(`[data-testId="${val}"]`);
}

export const setupTest = (Component: React.ComponentType): Function  => (props: object = {},  state: object = {}) => {
    return shallow(<Component {...props}/>);
}