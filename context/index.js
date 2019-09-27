import React from 'react';
import { SearchProvider, SearchContext } from './SearchProvider';


const CombinedCtxProvider = ({ children }) => (
  <SearchProvider>
    {children}
  </SearchProvider>
);
export default CombinedCtxProvider;

export {
  CombinedCtxProvider,
  SearchContext
}
;
