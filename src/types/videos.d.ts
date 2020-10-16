export interface VideosFetchedType {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ResourceType[];
}

interface ResourceType {
  kind: 'youtube#searchResult';
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailType;
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

type ThumbnailType = { [key: string]: Thumbnail };

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoType {
  id: string;
  title: string;
  description: string;
  channelTitle: string;
}
