import React, { useState } from 'react';
import {Container,CabeçalhoContainer,ContainerHorizontal,Clicavel,ImagemVoltar,FavoritosContainer,TextoTitulo,ImagemBolsa, MeioConteiner,NumItensText,Rodape,IndicadorPonto} from './TipoStyle';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import FiltroCategorias from '../../Componentes/Categorias/filtro';
import { useRoute } from '@react-navigation/native';

export default function Tipo() {
    const navigation = useNavigation();
    const [BolsaAtiva, setBolsaAtiva] = useState(true);
    const route = useRoute();
    const { nome } = route.params || {};

    return (
        <Container>

            <CabeçalhoContainer>
                <ContainerHorizontal>
                <Clicavel onPress={() => navigation.navigate('Categorias' as never)}>
                 <ImagemVoltar source={require('../../../assets/SetaVoltar.png')} />
                </Clicavel>
                    <FavoritosContainer>
                        <TextoTitulo>{nome}</TextoTitulo>
                    </FavoritosContainer>
                    
                        {BolsaAtiva&&<IndicadorPonto></IndicadorPonto >}
                        <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
                        <ImagemBolsa source={require('../../../assets/Bolsa.png')} />
                        </Clicavel>
                    
                </ContainerHorizontal>
                <MeioConteiner>
                         <NumItensText>4 Itens</NumItensText>
                </MeioConteiner>
            </CabeçalhoContainer>
            <FiltroCategorias/> 
            

            
            <Rodape>           
                <RodapePagHome value={3}/>
            </ Rodape> 
        </Container>
       
    );
}

