interface PedidosProps {
  nome: string;
  preco: number;
  acompanhamento: Array<string>;
  ingredientes: Array<string>;
}

interface EnderecoProps {
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
}

interface FormaPagamento {
  forma: string;
  troco: string;
}

const fazMensagem = (
  pedidos: Array<PedidosProps>,
  enderecoCompleto: EnderecoProps,
  formaDePagamento: FormaPagamento,
  valorTotal: number,
) => (
  `Olá fiz meu pedido pelo site segue as informações:

  ${pedidos.map((objeto) => `* ${objeto.nome} -- valor: R$${objeto.preco.toFixed(2)}`)},

  totalizando:

  R$${valorTotal.toFixed(2)}.

  Meu endereço é:

  Rua: ${enderecoCompleto.rua} -
  - Número: ${enderecoCompleto.numero} -
  - Bairro: ${enderecoCompleto.bairro} -
  - Complemento: ${enderecoCompleto.complemento}

  A forma de pagamento será:

  ${formaDePagamento.forma}
  troco para: ${formaDePagamento.troco}.`
);

const linkFazerPedido = (
  liberarPedido: boolean,
  pedidos: Array<PedidosProps>,
  enderecoCompleto: EnderecoProps,
  formaDePagamento: FormaPagamento,
  valorTotal: number,
) => {
  if (liberarPedido) return `https://api.whatsapp.com/send?1=pt_BRphone=5521973096257&text=${fazMensagem(
    pedidos,
    enderecoCompleto,
    formaDePagamento,
    valorTotal,
  )}`;
  return '#';
};

export default linkFazerPedido;
