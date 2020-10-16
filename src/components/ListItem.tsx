import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../store/actions';
import { VideoType } from '../types/videos';

interface Props {
  video: VideoType;
}

const ListItem: FC<Props> = ({ video }) => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(actions.searchVideos.setSelectedVideo(video));
  };

  return (
    <li className="item">
      <button type="button" onClick={handleSelect} className="list-button">
        {video.title}
      </button>
    </li>
  );
};

export default ListItem;
