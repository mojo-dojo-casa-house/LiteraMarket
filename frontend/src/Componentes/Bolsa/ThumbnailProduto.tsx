import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {FavIMG,VerticalContainer, QtdContainer,RedondoContainer,QtdValorText,Container,PreçoProduto,Produto,ImgProduto,FavoritosOverlay,Button,ImgProdutoEstrela,GeneroProduto,AutorProduto,TituloProduto, Clicavel,}from './ThumbnailProdutoStyle';


const ProdutoBolsaMiniatura = () => {
  const navigation = useNavigation();
  const [QtdProdutos, setQtdProdutos] = useState(0);

  const QtdAumentar = () => {
    setQtdProdutos(QtdProdutos + 1);
  };
  const QtdDiminuir = () => {
    if (QtdProdutos > 0) {
      setQtdProdutos(QtdProdutos - 1);
    }
  };

  const handlePress = (IdProduto) => {
    const updatedProdutos = ProdutosData.map((produto) =>
      produto.id === IdProduto ? { ...produto, favorito: !produto.favorito } : produto
    );
    setProdutosData(updatedProdutos);
  };

  const [ProdutosData, setProdutosData] = useState([
    {
      id: 1,
      genero: 'Ficção',
      titulo: 'A Revolução dos Bichos',
      autor: 'George Orwell',
      preco: '25.98',
      avaliação: 4,
      image: require('../../../assets/LivroIMG.png'),
      favorito: false,
    },
  ]);

  const getEstrelasIMG = (avaliação) => {
    switch (avaliação) {
      case 0:
        return require('../../../assets/Estrelas/Estrelas0.PNG');
      case 1:
        return require('../../../assets/Estrelas/Estrelas1.PNG');
      case 2:
        return require('../../../assets/Estrelas/Estrelas2.PNG');
      case 3:
        return require('../../../assets/Estrelas/Estrelas3.PNG');
      case 4:
        return require('../../../assets/Estrelas/Estrelas4.PNG');
      case 5:
        return require('../../../assets/Estrelas/Estrelas5.PNG');
      default:
        return require('../../../assets/Estrelas/Estrelas0.PNG'); 
    }
  };

  return (
    <Container>     
      {ProdutosData.map(produto => (
        <Produto key={produto.id} onPress={() => navigation.navigate('Produto' as never)}>
          <ImgProduto  source={produto.image} />

          <VerticalContainer>     
            <GeneroProduto>{produto.genero}</GeneroProduto>
            <TituloProduto>{produto.titulo}</TituloProduto>
            <AutorProduto>{produto.autor}</AutorProduto>
            <ImgProdutoEstrela source={getEstrelasIMG(produto.avaliação)} />
            <PreçoProduto>{produto.preco}</PreçoProduto>
          </VerticalContainer>

         
          <QtdContainer>
          <Clicavel onPress={QtdDiminuir}>
              <RedondoContainer>
              <QtdValorText>-</QtdValorText>
              </RedondoContainer> 
          </Clicavel>
            
            <QtdValorText>{QtdProdutos}</QtdValorText>

            <Clicavel onPress={QtdAumentar}>
              <RedondoContainer>
              <QtdValorText>+</QtdValorText>
              </RedondoContainer>
            </Clicavel>

          </QtdContainer>

          <FavoritosOverlay>
            <Button onPress={() => handlePress(produto.id)}>
            <FavIMG source={produto.favorito ? require('../../../assets/FavoritaTWO.png') : require('../../../assets/FavoritaONE.png')}/>
            </Button>
          </FavoritosOverlay>
        </Produto>
        
      ))}
    </Container>  
     
     
  );
};


export default ProdutoBolsaMiniatura;