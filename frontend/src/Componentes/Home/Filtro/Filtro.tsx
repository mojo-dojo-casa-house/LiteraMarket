import React, { useState } from 'react';
import ProdutoMiniatura from '../../Home/ThumbnailProduto/ThumbnailProduto';
import {Container,ContainerProduto,ConteinerProdutos,Opçoes,OpçoesContainer,Opção,OpçãoSelecionadaG,OpçãoSelecionadaTexto,OpçãoTexto} from './FiltroStyle';


const Filtro = () => {
// Seleciona a Opção
  const [OpçãoSelecionada, setOpçãoSelecionada] = useState(1);
  const Selecionado = (opção) => {
    setOpçãoSelecionada(opção);
  };

// Renderizando os Produtos Escolhidos
  const renderProduto = () => {
    switch (OpçãoSelecionada) {
// Mais Vendidos
      case 1: 
        return (
          <ConteinerProdutos>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
          </ConteinerProdutos>
          
        );
// Lançamentos
      case 2:
        return (
          <ConteinerProdutos>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
          </ConteinerProdutos>
        );
// Gratuitos
      case 3:
        return (
          <ConteinerProdutos>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/>
          </ConteinerProdutos>
        );
      case 4:
        return (
          <ConteinerProdutos>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
          </ConteinerProdutos>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <Opçoes>
        <OpçoesContainer>
          {OpçãoSelecionada === 1 ?  <OpçãoSelecionadaG>
            <OpçãoSelecionadaTexto>
             Mais Vendidos
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(1)}>
            <OpçãoTexto>
            Mais Vendidos
            </OpçãoTexto>
          </Opção> }

          {OpçãoSelecionada === 2 ?  <OpçãoSelecionadaG>
            <OpçãoSelecionadaTexto>
              Lançamentos
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(2)}>
            <OpçãoTexto>
              Lançamentos
            </OpçãoTexto>
          </Opção> }

          {OpçãoSelecionada === 3 ?  <OpçãoSelecionadaG>
            <OpçãoSelecionadaTexto>
             Gratuitos
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(3)}>
            <OpçãoTexto>
             Gratuitos
            </OpçãoTexto>
          </Opção> }

      
        </OpçoesContainer>
      </Opçoes>
      
      {/* onde os produtos estão sendo renderizados */}
      <ContainerProduto>{renderProduto()}</ContainerProduto> 

    </Container>
  );
};



export default Filtro;
