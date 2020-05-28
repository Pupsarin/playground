import { TestActionTypes } from "./types";
import { TEST } from "../actionTypes";

export const testReducer = (state= {}, action: TestActionTypes) => {
    switch (action.type) {
        case TEST:
        default:
            return state
    }
};
