import { createAction } from '@reduxjs/toolkit';

export default {
  searchVideos: createAction<string>('searchVideos'),
};
