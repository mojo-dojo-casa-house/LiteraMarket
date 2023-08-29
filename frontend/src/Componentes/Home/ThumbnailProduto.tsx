import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ThumbnailProdutoStyle';


const ProdutoMiniatura = () => {
  const navigation = useNavigation();

  const [ProdutosData, setProdutosData] = useState([
    {
      id: 1,
      genero: 'Ficção',
      titulo: 'A Revolução dos Bichos',
      autor: 'George Orwell',
      preco: 'R$ 25.98',
      avaliação: 3,
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

  const handlePress = (IdProduto) => {
    const updatedProdutos = ProdutosData.map((produto) =>
      produto.id === IdProduto ? { ...produto, favorito: !produto.favorito } : produto
    );
    setProdutosData(updatedProdutos);
  };
  
  return (
    <View style={styles.Container}>     
      {ProdutosData.map(produto => (
        <Pressable key={produto.id} onPress={() => navigation.navigate('Produto')} style={styles.Produto}>
          <Image source={produto.image} style={styles.ImgProduto} />
          <Text style={styles.GeneroProduto}>{produto.genero}</Text>
          <Text style={styles.TituloProduto}>{produto.titulo}</Text>
          <Text style={styles.AutorProduto}>{produto.autor}</Text>
          <Image source={getEstrelasIMG(produto.avaliação)} style={styles.ImgProdutoEstrela} />
          <Text style={styles.PreçoProduto}>{produto.preco}</Text>

          <View style={styles.CarrinhoOverlay}>
            <Pressable>
            <Image source={require('../../../assets/CompraMINI.png')} style={styles.ImgProdutoCompra} />
            </Pressable>
            </View>
           

          <View style={styles.FavoritosOverlay}>
            <Pressable onPress={() => handlePress(produto.id)} style={styles.button}>
            <Image source={produto.favorito ? require('../../../assets/FavoritaTWO.png') : require('../../../assets/FavoritaONE.png')} style={styles.image}/>
            </Pressable>
          </View>
        </Pressable>
        
      ))}
    </View>
     
     
  );
};


export default ProdutoMiniatura;