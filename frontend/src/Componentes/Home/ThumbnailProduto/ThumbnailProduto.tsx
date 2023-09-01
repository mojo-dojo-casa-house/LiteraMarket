import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {CarrinhoOverlay,Container,PreçoProduto,Produto,ImageProduto,ImgProduto,FavoritosOverlay,Button,ImgProdutoCompra,ImgProdutoEstrela,GeneroProduto,AutorProduto,TituloProduto,}from './ThumbnailProdutoStyle';
import { Clicavel } from '../Cabeçalho/CabaçalhoStyle';


const ProdutoMiniatura = () => {
  const navigation = useNavigation();

  const [ProdutosData, setProdutosData] = useState([
    {
      id: 1,
      genero: 'Ficção',
      titulo: 'A Revolução dos Bichos',
      autor: 'George Orwell',
      preco: 'R$ 25.98',
      avaliação: 5,
      image: require('../../../../assets/LivroIMG.png'),
      favorito: false,
    },
  ]);

  const getEstrelasIMG = (avaliação) => {
    switch (avaliação) {
      case 0:
        return require('../../../../assets/Estrelas/Estrelas0.PNG');
      case 1:
        return require('../../../../assets/Estrelas/Estrelas1.PNG');
      case 2:
        return require('../../../../assets/Estrelas/Estrelas2.PNG');
      case 3:
        return require('../../../../assets/Estrelas/Estrelas3.PNG');
      case 4:
        return require('../../../../assets/Estrelas/Estrelas4.PNG');
      case 5:
        return require('../../../../assets/Estrelas/Estrelas5.PNG');
      default:
        return require('../../../../assets/Estrelas/Estrelas0.PNG'); 
    }
  };

  const handlePress = (IdProduto) => {
    const updatedProdutos = ProdutosData.map((produto) =>
      produto.id === IdProduto ? { ...produto, favorito: !produto.favorito } : produto
    );
    setProdutosData(updatedProdutos);
  };
  
  return (
    <Container>     
      {ProdutosData.map(produto => (
        <Produto key={produto.id} onPress={() => navigation.navigate('Produto' as never, {favorito: produto.favorito})}>
          <ImgProduto source={produto.image} />
          <GeneroProduto>{produto.genero}</GeneroProduto>
          <TituloProduto>{produto.titulo}</TituloProduto>
          <AutorProduto>{produto.autor}</AutorProduto>
          <ImgProdutoEstrela source={getEstrelasIMG(produto.avaliação)} />
          <PreçoProduto>{produto.preco}</PreçoProduto>

          <CarrinhoOverlay>
            <Clicavel>
              <ImgProdutoCompra source={require('../../../../assets/CompraMINI.png')} />
            </Clicavel>
          </CarrinhoOverlay>

          <FavoritosOverlay>
            <Button onPress={() => handlePress(produto.id)}>
              <ImageProduto source={produto.favorito ? require('../../../../assets/FavoritaTWO.png') : require('../../../../assets/FavoritaONE.png')} />
            </Button>
          </FavoritosOverlay>
        </Produto>
      ))}
    </Container>
     
     
  );
};


export default ProdutoMiniatura;