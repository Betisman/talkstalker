import React, { createContext, useState } from 'react';

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [city, setCity] = useState('');
  console.log('city', city);
  const handleChangeCity = (city) => setCity(city);
  return(
    <SearchContext.Provider value={{
      city,
      handleChangeCity
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
