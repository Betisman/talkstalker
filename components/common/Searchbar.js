import React, { useContext, useState } from 'react';
import Router from 'next/router';
import { SearchContext } from '../../context';
import '../../styles/common/searchbar.scss';

const SearchBar = () => {
  const { city, handleChangeCity } = useContext(SearchContext);
  const [cityName, setCityname] = useState(city);
 
  const searchCity = () => {
    handleChangeCity(cityName);
    Router.push('/events');
  };

  return(
    <div className="searchbar">
      <input placeholder='where' value={cityName} onChange={(e)=>setCityname(e.target.value)} />
      <button onClick={searchCity}>search</button>
    </div>
  );
};

export default SearchBar;