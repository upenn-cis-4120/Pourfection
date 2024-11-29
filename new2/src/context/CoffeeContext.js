import React, { createContext, useContext, useState } from 'react';

const CoffeeContext = createContext();

export const useCoffeeParams = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error('useCoffeeParams must be used within a CoffeeProvider');
  }
  return context;
};

export const CoffeeProvider = ({ children }) => {
  const [coffeeParams, setCoffeeParams] = useState({
    weight: '18g',
    grindSize: '15',
    pressure: '9 bars',
    extractionTime: '25s'
  });

  const updateParams = (newParams) => {
    setCoffeeParams(prevParams => ({
      ...prevParams,
      ...newParams
    }));
  };

  return (
    <CoffeeContext.Provider value={{ coffeeParams, updateParams }}>
      {children}
    </CoffeeContext.Provider>
  );
};