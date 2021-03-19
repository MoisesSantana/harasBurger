import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { filtros } from '../data/listaDeAlimentos';

interface DetalhesParams {
  nome: string;
  preco: number;
  acompanhamento: Array<string>;
  ingredientes: Array<string>;
};

interface HarasContextProps {
  filtroAtual: string;
  setFiltroAtual: Dispatch<SetStateAction<string>>;
  detalheAtivado: boolean;
  lidaComDetalhes: (objeto: DetalhesParams) => void;
  alimentoSelecionado: (DetalhesParams);
};

interface HarasProviderProps {
  children: ReactNode;
};

export const HarasContext = createContext({} as HarasContextProps);

export const HarasProvider: React.FC = ({ children }: HarasProviderProps) => {
  const [filtroAtual, setFiltroAtual] = useState(filtros[0].nome);
  const [detalheAtivado, setDetalheAtivado] = useState(false);
  const [alimentoSelecionado, setAlimentoSelecionado] = useState({} as DetalhesParams);

  const lidaComDetalhes = (objeto: DetalhesParams) => {
    setDetalheAtivado(!detalheAtivado);
    setAlimentoSelecionado(objeto);
  };

  return (
    <HarasContext.Provider value={{
      filtroAtual,
      setFiltroAtual,
      detalheAtivado,
      lidaComDetalhes,
      alimentoSelecionado,
    }}
    >
      { children }
    </HarasContext.Provider>
  );
};
