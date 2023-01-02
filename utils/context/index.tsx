import { BasicProfile } from "@self.id/framework";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

// Context object type >>> extend this
interface ContextType {
  basicProfile: BasicProfile | null;
}

interface UpdatableContext {
  context: ContextType | null;
  setContext: Dispatch<SetStateAction<ContextType | null>> | null;
}

// initial context state
const defaultContextState: UpdatableContext = {
  context: null,
  setContext: null,
};

const AppContext = createContext<UpdatableContext>(defaultContextState);

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
