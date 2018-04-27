import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import PreviewImagesCollection from './PreviewImagesCollection';
import InfiniteCollection from './InfiniteCollection';
import PreviewImage from './PreviewImage';

const images =
  Array(2)
    .fill()
    .map((_, index) => ({
      id: index.toString(),
      src: `image${index}.jpg`,
      alt: `image${index}`,
    }));
const basePreviewImagesCollection = <PreviewImagesCollection images={images} />;

it('renders InfiniteCollection', () => {
  const wrapper = shallow(basePreviewImagesCollection);

  expect(wrapper.find(InfiniteCollection)).toExist();
});

it('passes isFetching to InfiniteCollection', () => {
  const isFetching = true;
  const wrapper = shallow(cloneElement(basePreviewImagesCollection, { isFetching }));

  expect(wrapper.find(InfiniteCollection)).toHaveProp('isFetching', isFetching);
});

it('passes fetchNext to InfiniteCollection', () => {
  const fetchNext = jest.fn();
  const wrapper = shallow(cloneElement(basePreviewImagesCollection, { fetchNext }));

  expect(wrapper.find(InfiniteCollection)).toHaveProp('fetchNext', fetchNext);
});

it('passes an array of PreviewImage as children to InfiniteCollection', () => {
  const wrapper = shallow(basePreviewImagesCollection);

  expect(wrapper.find(InfiniteCollection).children(PreviewImage).length).toBe(images.length);
});

it('passes correct props to PreviewImage from image', () => {
  const wrapper = shallow(basePreviewImagesCollection);
  const arrayOfProps =
    wrapper
      .find(PreviewImage)
      .map(node => ({
        id: node.props().id,
        src: node.props().src,
        alt: node.props().alt,
      }));

  expect(arrayOfProps).toEqual(images);
});

it('passes onImageClick to PreviewImage', () => {
  const onImageClick = jest.fn();
  const wrapper = shallow(cloneElement(basePreviewImagesCollection, { onImageClick }));
  const arrayOfProps =
    wrapper
      .find(PreviewImage)
      .map(node => ({
        onImageClick: node.props().onClick,
      }));

  expect(arrayOfProps).toEqual(Array(images.length).fill({ onImageClick }));
});
