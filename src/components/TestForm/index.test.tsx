import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { TestForm } from './';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('TestForm renders without error', () => {
    const wrapper = shallow(<TestForm />);
    expect(wrapper).toBeTruthy();
});
