import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../store/actions';

const SearchInput: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (): void => {
    setSearchValue('');
    dispatch(actions.searchVideosSaga.searchVideos(searchValue));
  };

  return (
    <div className="container">
      <input className="item" value={searchValue} onChange={handleChange} />
      <button className="item search" type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
