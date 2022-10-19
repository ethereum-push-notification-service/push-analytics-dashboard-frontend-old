import { useState, useContext, createContext, useEffect } from 'react';

const defaultState = { isLoggedIn: true };

const DataContext = createContext(defaultState);

const DataProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('userLogin')) {
      setIsLoggedIn(true);
    }
  }, []);

  return <DataContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
