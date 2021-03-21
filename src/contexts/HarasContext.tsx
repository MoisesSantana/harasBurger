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
}

interface HarasContextProps {
  filtroAtual: string;
  setFiltroAtual: Dispatch<SetStateAction<string>>;
  detalheAtivado: boolean;
  lidaComDetalhes: (objeto: DetalhesParams) => void;
  alimentoSelecionado: (DetalhesParams);
  adicionaPedidos: (objeto: DetalhesParams) => void;
  pedidos: Array<DetalhesParams>;
  removePedidos: (objeto: DetalhesParams) => void;
}

interface HarasProviderProps {
  children: ReactNode;
}

export const HarasContext = createContext({} as HarasContextProps);

export const HarasProvider: React.FC = ({ children }: HarasProviderProps) => {
  const [filtroAtual, setFiltroAtual] = useState(filtros[0].nome);
  const [detalheAtivado, setDetalheAtivado] = useState(false);
  const [alimentoSelecionado, setAlimentoSelecionado] = useState({} as DetalhesParams);
  const [pedidos, setPedidos] = useState([] as Array<DetalhesParams>);

  const lidaComDetalhes = (objeto: DetalhesParams) => {
    setDetalheAtivado(!detalheAtivado);
    setAlimentoSelecionado(objeto);
  };

  const adicionaPedidos = (objeto: DetalhesParams) => {
    pedidos.push(objeto)
  };

  const removePedidos = (objeto: DetalhesParams) => {
    const pedidosAtualizado = [...pedidos];
    const pedidoASerDeletado = pedidos.find((pedidoAtual) => pedidoAtual.nome === objeto.nome);
    pedidosAtualizado.splice(pedidosAtualizado.indexOf(pedidoASerDeletado, 0), 1);
    setPedidos(pedidosAtualizado);
  };

  return (
    <HarasContext.Provider value={{
      filtroAtual,
      setFiltroAtual,
      detalheAtivado,
      lidaComDetalhes,
      alimentoSelecionado,
      adicionaPedidos,
      pedidos,
      removePedidos,
    }}
    >
      { children }
    </HarasContext.Provider>
  );
};
