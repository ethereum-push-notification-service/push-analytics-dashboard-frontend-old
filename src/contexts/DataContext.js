import { useState, useContext, createContext, useEffect } from 'react';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginHistory = localStorage.getItem('userLogin');
    setIsLoggedIn(loginHistory);
  }, []);

  return <DataContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
