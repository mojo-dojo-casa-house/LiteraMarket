import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ProdutoMiniatura from './ThumbnailProduto';
import styles from './FiltroStyle';

const FiltroEscolhas = () => {
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
          <View style={styles.conteinerProdutos}>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/><ProdutoMiniatura/>
          </View>
          
        );
// Lançamentos
      case 2:
        return (
          <View style={styles.conteinerProdutos}>
            <ProdutoMiniatura/><ProdutoMiniatura/>
            <ProdutoMiniatura/>
          </View>
        );
// Gratuitos
      case 3:
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
        <Pressable style={[styles.opção, OpçãoSelecionada === 1 && styles.opçãoSelecionada]} onPress={() => Selecionado(1)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 1 && styles.opçãoSelecionadaTexto]}>
            Mais Vendidos
          </Text>
        </Pressable>

        <Pressable style={[styles.opção, OpçãoSelecionada === 2 && styles.opçãoSelecionada]}onPress={() => Selecionado(2)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 2 && styles.opçãoSelecionadaTexto]}>
            Lançamentos
          </Text>
        </Pressable>

        <Pressable style={[styles.opção, OpçãoSelecionada === 3 && styles.opçãoSelecionada]} onPress={() => Selecionado(3)}>
          <Text style={[styles.opçãoTexto, OpçãoSelecionada === 3 && styles.opçãoSelecionadaTexto]}>
            Gratuitos
          </Text>
        </Pressable>
      </View>
      
      {/* onde os produtos estão sendo renderizados */}
      <View style={styles.containerProduto}>{renderProduto()}</View> 

    </View>
  );
};



export default FiltroEscolhas;
