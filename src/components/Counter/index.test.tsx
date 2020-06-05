import React from "react";
import { ShallowWrapper } from "enzyme";
import { setupTest, findByTestAttr } from "../../utils/tests";
import { Counter } from './';

const setup = setupTest(Counter);
let wrapper: ShallowWrapper;

describe('counter component', () => {
    beforeEach(() => {
        wrapper = setup();
    })

    test('counter renders without error', () => {
        expect(wrapper).toBeTruthy();
    });

    test('renders increment button', () => {
        const incrementButton = findByTestAttr(wrapper, 'increment-button');
        expect(incrementButton.length).toBe(1);
    });

    test('renders decrement button', () => {
        const decrementButton = findByTestAttr(wrapper, 'decrement-button');
        expect(decrementButton.length).toBe(1);
    });
});

describe('counter component state', () => {
    let useStateSpy;
    let setState: any;

    beforeEach(() => {
        setState = jest.fn();
        useStateSpy = jest.spyOn(React, 'useState');
        // @ts-ignore
        useStateSpy.mockImplementation((init) => [init = 1, setState]);
        wrapper = setup();
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('increment button update state', () => {
        const incrementButton = findByTestAttr(wrapper, 'increment-button');
        const click: Function = incrementButton.prop('onClick');
        click();
        expect(setState).toHaveBeenCalledWith(2);
    });

    test('decrement button update state', () => {
        const decrementButton = findByTestAttr(wrapper, 'decrement-button');
        const click: Function = decrementButton.prop('onClick');
        click();
        expect(setState).toHaveBeenCalledWith(0);
    });

    test('double button update state', () => {
        const doubleButton = findByTestAttr(wrapper, 'double-button');
        const click: Function = doubleButton.prop('onClick');
        click();
        expect(setState).toHaveBeenCalledWith(2);
    });
})

