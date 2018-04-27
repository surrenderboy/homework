import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';

import Collection from './Collection';
import InfiniteCollection from './InfiniteCollection';

// eslint-disable-next-line react/no-array-index-key
const children = Array(2).fill().map((_, index) => <div className="child" key={index} />);
const baseInfiniteCollection = (
  <InfiniteCollection>
    { children }
  </InfiniteCollection>
);

it('passes down children to Collection', () => {
  const wrapper = shallow(baseInfiniteCollection);

  expect(wrapper.find(Collection).children().length).toBe(children.length);
});

it('calls fetchNext when has no children', () => {
  const fetchNext = jest.fn();

  shallow(cloneElement(baseInfiniteCollection, { children: [], fetchNext }));

  expect(fetchNext).toBeCalled();
});

describe('scroll position is close to bottom', () => {
  let fetchNext;
  let infiniteCollection;
  const event = {
    target: {
      scrollHeight: 1500,
      clientHeight: 1000,
      scrollTop: 0,
    },
  };

  beforeEach(() => {
    fetchNext = jest.fn();
    infiniteCollection = cloneElement(baseInfiniteCollection, { fetchNext });
  });

  it('calls fetchNext on scroll', () => {
    const wrapper = shallow(infiniteCollection);

    wrapper.simulate('scroll', event);

    expect(fetchNext).toBeCalled();
  });

  it('does not call fetchNext on scroll when isFetching is passed to props', () => {
    const wrapper = shallow(cloneElement(infiniteCollection, { isFetching: true }));

    wrapper.simulate('scroll', event);

    expect(fetchNext).not.toBeCalled();
  });
});
