import React, { FC } from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import selectors from '../store/selectors';

const Player: FC = () => {
  const selectedVideo = useSelector(selectors.searchVideos.getSelectedVideo);

  return (
    <YouTube
      className="player"
      videoId={selectedVideo?.id}
      id={selectedVideo?.id}
    />
  );
};

export default Player;
