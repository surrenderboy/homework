import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';

import App from './App';
import PreviewPhotosCollection from '../containers/PreviewPhotosCollection';
import PhotoGallery from '../containers/PhotoGallery';

const baseApp = <App />;

it('renders PreviewPhotosCollection', () => {
  const wrapper = shallow(baseApp);

  expect(wrapper.find(PreviewPhotosCollection)).toExist();
});

it('does not render PhotoGallery', () => {
  const wrapper = shallow(baseApp);

  expect(wrapper.find(PhotoGallery)).not.toExist();
});

describe('showGallery prop is passed', () => {
  // eslint-disable-next-line no-shadow
  const app = cloneElement(baseApp, { showGallery: true });

  it('renders PreviewPhotosCollection', () => {
    const wrapper = shallow(app);

    expect(wrapper.find(PreviewPhotosCollection)).toExist();
  });

  it('renders PhotoGallery', () => {
    const wrapper = shallow(app);

    expect(wrapper.find(PhotoGallery)).toExist();
  });
});
