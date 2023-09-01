import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import {Container,CabecalhoContainer,ContainerCategoria,ContainerHorizontal,ContainerGeneros,FavoritosContainer,TextoCategoria,TextoTitulo,ImagemBolsa,ImagemVoltar,IndicadorPonto,Rodape} from './style';
import { Clicavel } from './TipoStyle';

export default function Categorias() {
  const navigation = useNavigation();
  const [BolsaAtiva, setBolsaAtiva] = useState(true);

  return (
    <Container>
      <CabecalhoContainer>
        <ContainerHorizontal>
          <Clicavel onPress={() => navigation.navigate('Home' as never, {value:1})}>
            <ImagemVoltar source={require('../../../assets/SetaVoltar.png')} />
          </Clicavel>
          <FavoritosContainer>
            <TextoTitulo>Categorias</TextoTitulo>
          </FavoritosContainer>
       
            {BolsaAtiva && <IndicadorPonto />}
            <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
              <ImagemBolsa source={require('../../../assets/Bolsa.png')} />
            </Clicavel>
          
        </ContainerHorizontal>
      </CabecalhoContainer>
      <ContainerGeneros>
        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never,{nome:'Fantasia'})}>
            <TextoCategoria>Fantasia</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never,{nome:'Distopia'})}>
        <TextoCategoria>Distopia</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never,{nome:'Ação e Aventura'})}>
            <TextoCategoria>Ação e Aventura</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never,{nome:'Ficção Policial'})}>
            <TextoCategoria>Ficção Policial</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never,{nome:'Horror'})}>
            <TextoCategoria>Horror</TextoCategoria>
        </ContainerCategoria>

        <ContainerCategoria onPress={() => navigation.navigate('Tipo' as never,{nome:'Classicos'})}>
            <TextoCategoria>Classicos</TextoCategoria>
        </ContainerCategoria>
      </ContainerGeneros>
      <Rodape>
        <RodapePagHome value={3} />
      </Rodape>
    </Container>
  );
}
