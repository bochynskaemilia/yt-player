import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideoType } from '../../../types/videos';

interface InitialState {
  videos: VideoType[];
  isPending: boolean;
  isSearchError: boolean;
  selectedVideo?: null | VideoType;
}

const initialState: InitialState = {
  videos: [],
  isPending: false,
  isSearchError: false,
  selectedVideo: undefined,
};

const searchVideosReducer = createSlice({
  name: 'searchVideos',
  initialState,

  reducers: {
    setVideos(state, { payload }: PayloadAction<VideoType[]>) {
      state.videos = payload;
    },
    setIsSearchPending(state, { payload }: PayloadAction<boolean>) {
      state.isPending = payload;
    },
    setIsSearchError(state, { payload }: PayloadAction<boolean>) {
      state.isSearchError = payload;
    },
    setSelectedVideo(state, { payload }: PayloadAction<VideoType | null>) {
      state.selectedVideo = payload;
    },
  },
});

export const searchVideosActions = searchVideosReducer.actions;
export default searchVideosReducer.reducer;
