import { searchVideosActions } from './reducers/searchVideos/searchVideosReducer';
import searchVideosSagaActions from './reducers/searchVideos/searchVideosSagaActions';

const actions = {
  searchVideos: searchVideosActions,
  searchVideosSaga: searchVideosSagaActions,
};

export default actions;
