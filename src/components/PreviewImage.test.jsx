import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import PreviewImage from './PreviewImage';

const id = 'abc';
const basePreviewIamge = <PreviewImage id={id} src="image.jpg" alt="image" />;

it('is initially hidden', () => {
  const wrapper = shallow(basePreviewIamge);

  expect(wrapper.instance().state.isHidden).toBe(true);
});

it('shows when loads', () => {
  const wrapper = shallow(basePreviewIamge);

  wrapper.simulate('load');

  expect(wrapper.instance().state.isHidden).toBe(false);
});

it('has hidden class name when is hidden', () => {
  const wrapper = shallow(basePreviewIamge);

  expect(wrapper).toHaveClassName('preview-image__hidden');
});

it('does not have hidden class name when is shown', () => {
  const wrapper = shallow(basePreviewIamge);

  wrapper.setState({
    isHidden: false,
  });

  expect(wrapper).not.toHaveClassName('preview-image__hidden');
});

it('adds className that was passed through props', () => {
  const className = 'className';
  const wrapper = shallow(cloneElement(basePreviewIamge, { className }));

  expect(wrapper).toHaveClassName(className);
});

it('calls onClick with id when clicked', () => {
  const onClick = jest.fn();
  const wrapper = shallow(cloneElement(basePreviewIamge, { onClick }));

  wrapper.simulate('click');

  expect(onClick).toBeCalledWith(id);
});
