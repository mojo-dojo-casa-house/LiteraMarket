import React, { useState } from 'react';
import ProdutoMiniatura from '../Home/ThumbnailProduto/ThumbnailProduto';
import {Container,ContainerProduto,ConteinerProdutos,Opçoes,OpçoesContainer,Opção,OpçãoSelecionadaG,OpçãoSelecionadaTexto,OpçãoTexto} from './FiltroStyle';


const FiltroCategorias = () => {
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
              Relevância
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(1)}>
            <OpçãoTexto>
              Relevância
            </OpçãoTexto>
          </Opção> }

          {OpçãoSelecionada === 2 ?  <OpçãoSelecionadaG>
            <OpçãoSelecionadaTexto>
              Últimos
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(2)}>
            <OpçãoTexto>
              Últimos
            </OpçãoTexto>
          </Opção> }

          {OpçãoSelecionada === 3 ?  <OpçãoSelecionadaG>
            <OpçãoSelecionadaTexto>
              Mais Vendidos
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(3)}>
            <OpçãoTexto>
              Mais Vendidos
            </OpçãoTexto>
          </Opção> }

          {OpçãoSelecionada === 4 ?  <OpçãoSelecionadaG>
            <OpçãoSelecionadaTexto>
              Usados
            </OpçãoSelecionadaTexto>
          </OpçãoSelecionadaG>  : <Opção onPress={() => Selecionado(4)}>
            <OpçãoTexto>
             Usados
            </OpçãoTexto>
          </Opção> }
        </OpçoesContainer>
      </Opçoes>
      
      {/* onde os produtos estão sendo renderizados */}
      <ContainerProduto>{renderProduto()}</ContainerProduto> 

    </Container>
  );
};



export default FiltroCategorias;
