import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import FiltroCategorias from '../../Componentes/Categorias/filtro';
import {Container,CabecalhoContainer,ContainerCategoria,ContainerHorizontal,ContainerGeneros,FavoritosContainer,TextoCategoria,TextoTitulo,ImagemBolsa,ImagemVoltar,IndicadorPonto,Rodape} from './style';

export default function Categorias() {
  const navigation = useNavigation();
  const [BolsaAtiva, setBolsaAtiva] = useState(true);

  return (
    <Container>
      <CabecalhoContainer>
        <ContainerHorizontal>
          <Pressable onPress={() => navigation.navigate('Home' as never)}>
            <ImagemVoltar source={require('../../../assets/SetaVoltar.png')} />
          </Pressable>
          <FavoritosContainer>
            <TextoTitulo>Categorias</TextoTitulo>
          </FavoritosContainer>
          <View>
            {BolsaAtiva && <IndicadorPonto />}
            <Pressable onPress={() => navigation.navigate('Bolsa' as never)}>
              <ImagemBolsa source={require('../../../assets/Bolsa.png')} />
            </Pressable>
          </View>
        </ContainerHorizontal>
      </CabecalhoContainer>
      <ContainerGeneros>
        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never)}>
            <TextoCategoria>Fantasia</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never)}>
        <TextoCategoria>Distopia</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never)}>
            <TextoCategoria>Ação e Aventura</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never)}>
            <TextoCategoria>Ficção Policial</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never)}>
            <TextoCategoria>Horror</TextoCategoria>
        </ContainerCategoria>

      </ContainerGeneros>
      <Rodape>
        <RodapePagHome value={3} />
      </Rodape>
    </Container>
  );
}
