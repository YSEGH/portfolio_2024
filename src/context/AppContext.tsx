"use client";

import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { getPathName } from "@/libs/getPathName";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type BackgroundColor =
  | "var(--white)"
  | "var(--green)"
  | "var(--blue)"
  | "transparent";

type ContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isMobileServer: boolean;
  isMobileClient: boolean | null;
  backgroundColor: BackgroundColor;
  setBackgroundColor: Dispatch<SetStateAction<BackgroundColor>>;
  contrast: boolean;
  setContrast: Dispatch<SetStateAction<boolean>>;
};

const defaultContext: ContextType = {
  open: getPathName() !== "/",
  setOpen: () => null,
  isMobileServer: false,
  isMobileClient: null,
  backgroundColor: "var(--white)",
  setBackgroundColor: () => null,
  contrast: false,
  setContrast: () => null,
};

const AppContext = createContext<ContextType>(defaultContext);

const AppProvider: React.FC<{
  children: React.ReactNode;
  isMobileServer: boolean;
}> = ({ children, isMobileServer }) => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [contrast, setContrast] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(defaultContext.open);
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>(
    defaultContext.backgroundColor
  );
  const isMobileClient = useClientMediaQuery("(max-width: 1020px)");

  return (
    <AppContext.Provider
      value={{
        open,
        setOpen,
        isMobileServer,
        isMobileClient,
        backgroundColor,
        setBackgroundColor,
        contrast,
        setContrast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
