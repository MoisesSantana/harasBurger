import React, { useContext } from 'react';
import BotaoFinalizarContainer from '../styles/components/BotaoFinalizarComponent';
import { HarasContext } from '../contexts/HarasContext';
import linkFazerPedido from '../data/linkFazerPedido';

const BotaoFinalizar: React.FC = () => {
  const {
    pedidos,
    valorTotal,
    enderecoCompleto,
    formaDePagamento,
  } = useContext(HarasContext);

  const { rua, numero, bairro } = enderecoCompleto;
  const { forma } = formaDePagamento;

  const verificaEndereco = () => {
    if (rua !== undefined && numero !== undefined && bairro !== undefined) {
      return (rua.trim() !== '' && numero.trim() !== '' && bairro.trim() !== '');
    }
    return false;
  };

  const liberaPeloValorTotal = valorTotal > 0;
  const liberaPeloEnderecoCompleto = verificaEndereco();
  const liberaPelaFormaDePagamento = forma !== undefined;
  const liberarPedido = (
    liberaPeloValorTotal && liberaPeloEnderecoCompleto && liberaPelaFormaDePagamento
  );

  return (
    <BotaoFinalizarContainer
      href={linkFazerPedido(
        liberarPedido,
        pedidos,
        enderecoCompleto,
        formaDePagamento,
        valorTotal,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Fazer pedido</span>
      <span>
        Total: R$
        { valorTotal.toFixed(2) }
      </span>
    </BotaoFinalizarContainer>
  );
};

export default BotaoFinalizar;
