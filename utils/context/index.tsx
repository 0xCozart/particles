import { SelfID } from "@self.id/framework";
import { AppContext } from "next/app";
import { createContext, ReactNode } from "react";

interface ContextType {
  selfid: SelfID | null;
  // login: () => void;
  // logout: () => void;
}

const defaultContext: ContextType = {
  selfid: null,
  // login: () => {},
  // logout: () => {},
};

const AppContext = createContext<ContextType>(defaultContext);

type Props = {
  children: ReactNode;
};

function AppWrapper({ children }: Props) {
  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
}

export { AppWrapper };
