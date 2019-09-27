import React, { createContext, useState } from 'react';

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [city, setCity] = useState('');
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
