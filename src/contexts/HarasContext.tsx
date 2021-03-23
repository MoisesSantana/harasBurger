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

interface EnderecoState {
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
}

interface FormaDePagamentoState {
  forma: string;
  troco: string;
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
  renderizaPedidoFeito: boolean;
  setRenderizaPedidoFeito: Dispatch<SetStateAction<boolean>>;
  valorTotal: number;
  setEnderecoCompleto: Dispatch<SetStateAction<EnderecoState>>;
  setFormaDePagamento: Dispatch<SetStateAction<FormaDePagamentoState>>;
  enderecoCompleto: EnderecoState;
  formaDePagamento: FormaDePagamentoState;
}

interface HarasProviderProps {
  children: ReactNode;
}

export const HarasContext = createContext({} as HarasContextProps);

export const HarasProvider: React.FC = ({ children }: HarasProviderProps) => {
  const ENDERECO_INICIAL = {
    rua: '',
    numero: '',
    bairro: '',
    complemento: '',
  };

  const [filtroAtual, setFiltroAtual] = useState(filtros[0].nome);
  const [detalheAtivado, setDetalheAtivado] = useState(false);
  const [renderizaPedidoFeito, setRenderizaPedidoFeito] = useState(false);
  const [alimentoSelecionado, setAlimentoSelecionado] = useState({} as DetalhesParams);
  const [pedidos, setPedidos] = useState([] as Array<DetalhesParams>);
  const [valorTotal, setValorTotal] = useState(0);
  const [enderecoCompleto, setEnderecoCompleto] = useState(ENDERECO_INICIAL as EnderecoState);
  const [formaDePagamento, setFormaDePagamento] = useState({} as FormaDePagamentoState);

  const lidaComDetalhes = (objeto: DetalhesParams) => {
    setDetalheAtivado(!detalheAtivado);
    setAlimentoSelecionado(objeto);
  };

  const adicionaPedidos = (objeto: DetalhesParams) => {
    pedidos.push(objeto);
    setValorTotal(valorTotal + objeto.preco);

    if (detalheAtivado) setDetalheAtivado(!detalheAtivado);
    setRenderizaPedidoFeito(!renderizaPedidoFeito);
    setTimeout(() => {
      setRenderizaPedidoFeito(false);
    }, 1000);
  };

  const removePedidos = (objeto: DetalhesParams) => {
    setValorTotal(valorTotal - objeto.preco);

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
      renderizaPedidoFeito,
      setRenderizaPedidoFeito,
      valorTotal,
      setEnderecoCompleto,
      setFormaDePagamento,
      enderecoCompleto,
      formaDePagamento,
    }}
    >
      { children }
    </HarasContext.Provider>
  );
};
