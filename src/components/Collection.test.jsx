import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';

import Collection from './Collection';

// eslint-disable-next-line react/no-array-index-key
const children = Array(2).fill().map((_, index) => <div className="child" key={index} />);
const collection = (
  <Collection>
    { children }
  </Collection>
);

it('adds correct class name to children', () => {
  const wrapper = shallow(collection);

  expect(wrapper.find('.collection__item').length).toBe(2);
});

it('saves original children class names', () => {
  const wrapper = shallow(collection);

  expect(wrapper.find('.child').length).toBe(2);
});

it('adds className passed through props', () => {
  const className = 'className';
  const wrapper = shallow(cloneElement(collection, { className }));

  expect(wrapper.find(`.${className}`)).toExist();
});
