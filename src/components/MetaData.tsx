import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../store/selectors';
import Loader from './Loader';

const MetaData = () => {
  const selectedVideo = useSelector(selectors.searchVideos.getSelectedVideo);
  const videosPending = useSelector(selectors.searchVideos.getVideosPending);
  const videosError = useSelector(selectors.searchVideos.getVideosError);

  return (
    <>
      {selectedVideo && (
        <div className="container flex-center">
          <div className="meta">
            <h3>{selectedVideo.title}</h3>
            <h5>{`Channel: ${selectedVideo.channelTitle}`}</h5>
            <h5>{`Description: ${selectedVideo?.description}`}</h5>
          </div>
        </div>
      )}
      {selectedVideo === null && (
        <div className="container">
          <h3>No search results.</h3>
        </div>
      )}
      {videosPending && <Loader />}
      {videosError && (
        <div className="error">
          <h3>There has been an error.</h3>
        </div>
      )}
    </>
  );
};

export default MetaData;
