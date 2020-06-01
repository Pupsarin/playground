import { ShallowWrapper } from "enzyme";
import { setupTest, findByTestAttr } from "../../utils/tests";
import { Counter } from './';

describe('counter component', () => {
    const setup = setupTest(Counter);
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    })

    test('counter renders without error', () => {
        expect(wrapper).toBeTruthy();
    });

    test('renders increment button', () => {
        const incrementButton = findByTestAttr(wrapper, 'component-counter-increment');
        expect(incrementButton.length).toBe(1);
    });

    test('renders decrement button', () => {
        const decrementButton = findByTestAttr(wrapper, 'component-counter-decrement');
        expect(decrementButton.length).toBe(1);
    });

    test('counter starts at 0', () => {
        const value = findByTestAttr(wrapper, 'component-counter-value');
        expect(value.text()).toBe("0");
    });

    test('decrement button update value', () => {
        const decrementButton = findByTestAttr(wrapper, 'component-counter-decrement');
        decrementButton.simulate('click');
        const value = findByTestAttr(wrapper, 'component-counter-value');
        expect(value.text()).toBe("-1");
    });

    test('increment button update value', () => {
        const decrementButton = findByTestAttr(wrapper, 'component-counter-increment');
        decrementButton.simulate('click');
        const value = findByTestAttr(wrapper, 'component-counter-value');
        expect(value.text()).toBe("1");
    });
});