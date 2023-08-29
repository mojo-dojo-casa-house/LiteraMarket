import React from 'react';

import { StyleSheet, Image,  Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape';
import ProdutoMiniatura from '../../Componentes/Home/ThumbnailProduto';
import styles from './style';

export default function Perfil() {
  const navigation = useNavigation();

  const dadosPerfil = [
    {
      id: 1,
      nome: 'João da Silva',
      email: 'joaodasilva@gmail.com',
      localizacao: 'Rio de Janeiro',
      vendas: '2.423',
      avaliacao: 5,
      imagem: require('../../../assets/Visitante.png'),
    },
  ];

  const getImagemEstrelas = (avaliacao) => {
    switch (avaliacao) {
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
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../../assets/SetaVoltar.png')} style={styles.VoltarIMG} />
        </Pressable>
        <Text style={styles.tituloText}>Perfil</Text>
        <Text style={styles.editarText}>Editar</Text>
      </View>

      {dadosPerfil.map((perfil) => (
        <View style={styles.infoContainer} key={perfil.id}>
          <View style={styles.perfilContainer}>
            <Image source={perfil.imagem} style={styles.perfilIMG} />
          </View>
          <Text style={styles.nomeText}>{perfil.nome}</Text>
          <Text style={styles.emailText}>{perfil.email}</Text>
          <View style={styles.localizacaoContainer}>
            <Image source={require('../../../assets/Pin.png')} style={styles.localizacaoImage} />
            <Text style={styles.localizacaoText}>{perfil.localizacao}</Text>
          </View>
        </View>
      ))}

      {dadosPerfil.map((perfil) => (
        <View style={styles.valoresContainer} key={perfil.id}>
          <View style={styles.avaliacaoContainer}>
            <Text style={styles.avaliacaoText}>Avaliações</Text>
            <View style={styles.avaliacaoInfoContainer}>
              <Text style={styles.avaliacaoValor}>{perfil.avaliacao}.0</Text>
              <Image
                source={getImagemEstrelas(perfil.avaliacao)} style={styles.estrelasAvaliacao}
              />
            </View>
          </View>
          <View style={styles.divisor}></View>
          <View style={styles.vendasContainer}>
            <Text style={styles.vendasText}>Vendas</Text>
            <Text style={styles.numeroVendas}>{perfil.vendas}</Text>
          </View>
        </View>
      ))}

      
        <View>
          <Pressable style={styles.botaoContainer}>
            <Text style={styles.textoBotao}>Minhas Avaliações</Text>
          </Pressable>
          <Pressable style={styles.botaoContainer}>
            <Text style={styles.textoBotao}>Meus Favoritos</Text>
          </Pressable>
        </View>
      

      <View style={styles.tituloVendasContainer}>
        <View style={styles.barraVendas}></View>
        <Text style={styles.tituloVendas}>Minhas Vendas</Text>
        <View style={styles.barraVendas}></View>
      </View>

     <View style={styles.ProdutosConteiner}>
        
            <ProdutoMiniatura />
        
        
            <ProdutoMiniatura />
        
        
            <ProdutoMiniatura />
        
    
      </View>

      <View style={styles.rodape}>
        <RodapePagHome value={0} />
      </View>
    </View>
  );
}

