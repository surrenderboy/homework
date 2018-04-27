import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

const spinner = <Spinner />;

it('adds className from props', () => {
  const className = 'className';
  const wrapper = shallow(cloneElement(spinner, { className }));

  expect(wrapper).toHaveClassName(className);
});
