export const API_KEY = 'AIzaSyBBwDvy8L6WzgHhgRZ5aQkoKJtge6YnNsw';

export const fetchVideosUrl = (query: string): string =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}`;

export const STATUS_CODE = {
  OK: 200,
  NOT_MODIFIED: 304,
};
