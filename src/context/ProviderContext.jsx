import React, { createContext, useContext, useState } from "react";
const Context = createContext(null);
const ProviderContext = ({ children }) => {
  const [data, setData] = useState("Hello from Context!");
  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  );
};
const useContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { ProviderContext, useContext };
