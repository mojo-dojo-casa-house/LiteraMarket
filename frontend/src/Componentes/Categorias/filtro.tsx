import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ProdutoMiniatura from '../Home/ThumbnailProduto';
import styles from './filtroStyle';

const FiltroCategorias = () => {
// Seleciona a Opção
  const [OpçãoSelecionada, setOpçãoSelecionada] = useState(1);
  const Selecionado = (opção) => {
    setOpçãoSelecionada(opção);
  };

// Renderizando os Produtos Escolhidos
  const renderProduto = () => {
    switch (OpçãoSelecionada) {
// Relevância
      case 1: 
        return (
          <View style={styles.conteinerProdutos}>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
          </View>
          
        );
// Últimos
      case 2:
        return (
          <View style={styles.conteinerProdutos}>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/>
          </View>
        );
// Mais Vendidos
      case 3:
        return (
          <View style={styles.conteinerProdutos}>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
           
          </View>
        );
// Usados
    case 4:
        return (
          <View style={styles.conteinerProdutos}>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
           
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.opçoes}>
        <View style={styles.opçoesContainer}>
        <Pressable style={[styles.opção, OpçãoSelecionada === 1 && styles.opçãoSelecionada]} onPress={() => Selecionado(1)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 1 && styles.opçãoSelecionadaTexto]}>
            Relevância
          </Text>
        </Pressable>

        <Pressable style={[styles.opção, OpçãoSelecionada === 2 && styles.opçãoSelecionada]}onPress={() => Selecionado(2)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 2 && styles.opçãoSelecionadaTexto]}>
            Últimos
          </Text>
        </Pressable>

        <Pressable style={[styles.opção, OpçãoSelecionada === 3 && styles.opçãoSelecionada]} onPress={() => Selecionado(3)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 3 && styles.opçãoSelecionadaTexto]}>
            Mais Vendidos
          </Text>
        </Pressable>

        <Pressable style={[styles.opção, OpçãoSelecionada === 4 && styles.opçãoSelecionada]} onPress={() => Selecionado(4)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 4 && styles.opçãoSelecionadaTexto]}>
            Usados
          </Text>
        </Pressable>
      </View>
      </View>
      
      {/* onde os produtos estão sendo renderizados */}
      <View style={styles.containerProduto}>{renderProduto()}</View> 

    </View>
  );
};



export default FiltroCategorias;
