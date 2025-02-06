import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  user: string;
  password: string;
  routerAvaible: string;
  printerFound: string;
  setUser: (name: string) => void;
  setPassword: (password: string) => void;
  setrouterAvaible: (routerAvaible: string) => void;
  setPrinterFound: (printerFound: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [routerAvaible, setrouterAvaible] = useState("");
  const [printerFound, setPrinterFound] = useState("");

  return (
    <AppContext.Provider
      value={{
        user,
        password,
        routerAvaible,
        printerFound,
        setUser,
        setPassword,
        setrouterAvaible,
        setPrinterFound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
