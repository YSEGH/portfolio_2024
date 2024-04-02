"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultContext: ContextType = {
  open: false,
  setOpen: () => null,
};

const AppContext = createContext<ContextType>(defaultContext);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [contrast, setContrast] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
