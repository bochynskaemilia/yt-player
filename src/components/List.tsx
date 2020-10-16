import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import selectors from '../store/selectors';
import ListItem from './ListItem';
import { VideoType } from '../types/videos';

const List: FC = () => {
  const videos = useSelector(selectors.searchVideos.getVideos);

  return (
    <>
      {!!videos.length && (
        <div className="container list-container flex-center">
          <h3>Other videos:</h3>
          <ul className="list">
            {videos.map((video: VideoType) => (
              <ListItem {...{ video }} key={video.id} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default List;
