import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';

import Gallery from './Gallery';

let handleClose;
let gallery;
const image = {
  src: 'image.jpg',
  alt: 'image',
};

beforeEach(() => {
  handleClose = jest.fn();
  gallery = <Gallery image={image} handleClose={handleClose} />;
});

it('calls handleClose on clicking close area', () => {
  const wrapper = shallow(gallery);

  wrapper.find('.gallery__nav_close').simulate('click');

  expect(handleClose).toBeCalled();
});

it('calls handlePrev on clicking prev area', () => {
  const handlePrev = jest.fn();
  const wrapper = shallow(React.cloneElement(gallery, { handlePrev }));

  wrapper.find('.gallery__nav_prev').simulate('click');

  expect(handlePrev).toBeCalled();
});

it('calls handleNext on clicking image', () => {
  const handleNext = jest.fn();
  const wrapper = shallow(React.cloneElement(gallery, { handleNext }));

  wrapper.find('.gallery__image').simulate('click');

  expect(handleNext).toBeCalled();
});

it('calls handleNext on clicking next area', () => {
  const handleNext = jest.fn();
  const wrapper = shallow(cloneElement(gallery, { handleNext }));

  wrapper.find('.gallery__nav_next').simulate('click');

  expect(handleNext).toBeCalled();
});

it('does not have prev icon visiblie by default', () => {
  const wrapper = shallow(gallery);

  expect(wrapper.find('.gallery__icon_prev')).not.toExist();
});

it('does not have next icon visiblie by default', () => {
  const wrapper = shallow(gallery);

  expect(wrapper.find('.gallery__icon_next')).not.toExist();
});

it('renders prev icon when hasPrev prop is passed', () => {
  const wrapper = shallow(cloneElement(gallery, { hasPrev: true }));

  expect(wrapper.find('.gallery__icon_prev')).toExist();
});

it('renders next icon when hasNext is passed', () => {
  const wrapper = shallow(cloneElement(gallery, { hasNext: true }));

  expect(wrapper.find('.gallery__icon_next')).toExist();
});

describe('interaction with document.body', () => {
  const noscrollClassName = 'gallery_noscroll';

  beforeEach(() => {
    document.body.classList.remove(noscrollClassName);
  });

  it('adds noscroll to body', () => {
    shallow(gallery);

    expect(document.body.classList.contains(noscrollClassName)).toBeTruthy();
  });

  it('removes noscroll from body on unmount', () => {
    const wrapper = shallow(gallery);

    wrapper.unmount();

    expect(document.body.classList.contains(noscrollClassName)).toBeFalsy();
  });
});
