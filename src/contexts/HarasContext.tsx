import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { filtros } from '../data/listaDeAlimentos';

interface HarasContextProps {
  filtroAtual: string;
  setFiltroAtual: Dispatch<SetStateAction<string>>;
}

interface HarasProviderProps {
  children: ReactNode;
}

export const HarasContext = createContext({} as HarasContextProps);

export function HarasProvider({ children }: HarasProviderProps) {
  const [filtroAtual, setFiltroAtual] = useState(filtros[0].nome);

  return (
    <HarasContext.Provider value={ {
      filtroAtual,
      setFiltroAtual,
    } }>
      { children }
    </HarasContext.Provider>
  );
}
