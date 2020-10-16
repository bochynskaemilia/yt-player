import { call, put, takeLatest } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';
import actions from '../../actions';
import { runFetchVideos } from '../../../services/videosService';

export function* runSearchVideos({ payload }: PayloadAction<string>) {
  yield put(actions.searchVideos.setIsSearchPending(true));

  const response = yield call(runFetchVideos, payload);

  const { isError, data } = response;

  if (isError || !data) {
    yield put(actions.searchVideos.setIsSearchError(true));
    yield put(actions.searchVideos.setSelectedVideo(null));
  } else {
    yield put(actions.searchVideos.setVideos(data));
    yield put(actions.searchVideos.setSelectedVideo(data[0] || null));
  }

  yield put(actions.searchVideos.setIsSearchPending(false));
}

export function* searchVideosSaga() {
  yield takeLatest(actions.searchVideosSaga.searchVideos, runSearchVideos);
}
