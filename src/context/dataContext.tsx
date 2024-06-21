import { createContext, ReactNode, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }: {children: ReactNode}) => {
  const [state, setState] = useState("default value");

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
