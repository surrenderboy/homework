import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_ID,
});

export default unsplash;
