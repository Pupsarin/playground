import { TEST } from "../actionTypes";

interface TEST {
    type: typeof TEST;
    payload?: object;
}

export type TestActionTypes = TEST;