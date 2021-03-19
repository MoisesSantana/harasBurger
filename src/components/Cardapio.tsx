import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import { alimentos, filtros } from '../data/listaDeAlimentos';
import {
  CardapioContainer,
  ElementoContainer,
} from '../styles/components/CardapioComponent';

const Cardapio: React.FC = () => {
  const { filtroAtual } = useContext(HarasContext);
  const cardapioFiltrado = filtros.filter(({ nome }) => nome === filtroAtual)[0];
  const { nome, tags } = cardapioFiltrado;
  
  return (
    <div>
      {
        alimentos.map(({ tipo, lista }) => {
          return (            
            tags.includes(tipo) && <div>
              <h2>{ tipo }</h2>
              {
                lista.map(({ nome, preco }) => (
                  <div>
                    <div>
                      <p>{ nome }</p>
                      <span>{`R$${preco.toFixed(2)}`}</span>
                    </div>
                    <div>
                      <button
                      type="button"
                      >
                        Adicionar
                      </button>
                      <button
                        type="button"
                      >
                        Detalhes
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        })
      }
    </div>
  );












  // return (
  //   <CardapioContainer>
  //     <div>
  //       <h2>Promoções</h2>
  //       {
  //         promocoes.map(({ nome, preco }) => (
  //           <ElementoContainer key={nome}>
  //             <div>
  //               <p>{ nome }</p>
  //               <span>{`R$${preco.toFixed(2)}`}</span>
  //             </div>
  //             <div>
  //               <button
  //                 type="button"
  //               >
  //                 Adicionar
  //               </button>
  //               <button
  //                 type="button"
  //               >
  //                 Detalhes
  //               </button>
  //             </div>
  //           </ElementoContainer>
  //         ))
  //       }
  //     </div>
  //     <div>
  //       <h2>Trios</h2>
  //       {
  //         trios.map(({ nome, preco }) => (
  //           <ElementoContainer key={nome}>
  //             <div>
  //               <p>{ nome }</p>
  //               <span>{`R$${preco.toFixed(2)}`}</span>
  //             </div>
  //             <div>
  //               <button
  //                 type="button"
  //               >
  //                 Adicionar
  //               </button>
  //               <button
  //                 type="button"
  //               >
  //                 Detalhes
  //               </button>
  //             </div>
  //           </ElementoContainer>
  //         ))
  //       }
  //     </div>
  //     <div>
  //       <h2>Sanduíches</h2>
  //       {
  //         sanduiches.map(({ nome, preco }) => (
  //           <ElementoContainer key={nome}>
  //             <div>
  //               <p>{ nome }</p>
  //               <span>{`R$${preco.toFixed(2)}`}</span>
  //             </div>
  //             <div>
  //               <button
  //                 type="button"
  //               >
  //                 Adicionar
  //               </button>
  //               <button
  //                 type="button"
  //               >
  //                 Detalhes
  //               </button>
  //             </div>
  //           </ElementoContainer>
  //         ))
  //       }
  //     </div>
  //     <div>
  //       <h2>Bebidas</h2>
  //       {
  //         bebidas.map(({ nome, preco }) => (
  //           <ElementoContainer key={nome}>
  //             <div>
  //               <p>{ nome }</p>
  //               <span>{`R$${preco.toFixed(2)}`}</span>
  //             </div>
  //             <div>
  //               <button
  //                 type="button"
  //               >
  //                 Adicionar
  //               </button>
  //               <button
  //                 type="button"
  //               >
  //                 Detalhes
  //               </button>
  //             </div>
  //           </ElementoContainer>
  //         ))
  //       }
  //     </div>
  //     <div>
  //       <h2>Porções</h2>
  //       {
  //         porcao.map(({ nome, preco }) => (
  //           <ElementoContainer key={nome}>
  //             <div>
  //               <p>{ nome }</p>
  //               <span>{`R$${preco.toFixed(2)}`}</span>
  //             </div>
  //             <div>
  //               <button
  //                 type="button"
  //               >
  //                 Adicionar
  //               </button>
  //               <button
  //                 type="button"
  //               >
  //                 Detalhes
  //               </button>
  //             </div>
  //           </ElementoContainer>
  //         ))
  //       }
  //     </div>
  //   </CardapioContainer>
  // );
} 


export default Cardapio;
