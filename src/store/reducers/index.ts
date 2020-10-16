import { combineReducers } from '@reduxjs/toolkit';
import searchVideos from './searchVideos/searchVideosReducer';

const rootReducer = combineReducers({
  searchVideos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
