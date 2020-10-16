import { VideosFetchedType, VideoType } from '../types/videos';
import apiService from './apiService/apiService';
import { fetchVideosUrl } from '../consts';

export const processVideos = (videosFetched: VideosFetchedType): VideoType[] =>
  videosFetched.items.map((video) => {
    const {
      snippet: { title, description, channelTitle },
      id,
    } = video;

    return {
      id: id.videoId,
      title,
      description,
      channelTitle,
    };
  });

export const runFetchVideos = (query: string) =>
  apiService.request('get', {
    url: fetchVideosUrl(query),
    processData: processVideos,
  });
