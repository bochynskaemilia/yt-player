import { all } from 'redux-saga/effects';
import { searchVideosSaga } from './reducers/searchVideos/searchVideosSagas';

function* rootSaga() {
  yield all([searchVideosSaga()]);
}

export default rootSaga;
