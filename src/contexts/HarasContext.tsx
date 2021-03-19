import React, {
  createContext,
  ReactNode,
} from 'react';

interface HarasContextProps {
  passarValue: string;
}

interface HarasProviderProps {
  children: ReactNode;
}

export const HarasContext = createContext({} as HarasContextProps);

export function HarasProvider({ children }: HarasProviderProps) {
  const passarValue = 'qualquercoisa';

  return (
    <HarasContext.Provider value={ { passarValue } }>
      { children }
    </HarasContext.Provider>
  );
}
