import { RootState } from '../index';
import { VideoType } from '../../../types/videos';

const getVideos = (state: RootState): VideoType[] => state.searchVideos.videos;
const getVideosPending = (state: RootState): boolean =>
  state.searchVideos.isPending;
const getVideosError = (state: RootState): boolean =>
  state.searchVideos.isSearchError;
const getSelectedVideo = (state: RootState): VideoType | null | undefined =>
  state.searchVideos.selectedVideo;

export default {
  getVideos,
  getSelectedVideo,
  getVideosPending,
  getVideosError,
};
