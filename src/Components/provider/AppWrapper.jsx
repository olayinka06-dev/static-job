import React from 'react';
import { StaticJobContext } from './Context';


export const AppWrapper = ({children}) => {
  return (
    <StaticJobContext.Provider value={""}>
        {children}
    </StaticJobContext.Provider>
  )
}
