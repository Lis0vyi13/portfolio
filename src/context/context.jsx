import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isActive, IsActiveSetter] = useState('');

  const setIsActive = (newValue) => {
    IsActiveSetter(newValue);
  };

  return (
    <Context.Provider value={{ isActive, setIsActive }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
