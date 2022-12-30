import { SelfID } from "@self.id/framework";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ContextType {
  selfid: SelfID | null;
  // login: () => void;
  // logout: () => void;
}

interface UpdatableContext {
  context: ContextType | null;
  setContext: Dispatch<SetStateAction<ContextType | null>>;
}

const defaultContext = {
  selfid: null,
  // login: () => {},
  // logout: () => {},
};

const AppContext = createContext<UpdatableContext | null>(null);

type Props = {
  children: ReactNode;
};
// context now passed down w/ state dispatcher
function ContextWrapper({ children }: Props) {
  const [context, setContext] = useState<ContextType | null>(null);
  return (
    <AppContext.Provider value={{ context, setContext }}>
      {children}
    </AppContext.Provider>
  );
}

export { ContextWrapper, AppContext };
