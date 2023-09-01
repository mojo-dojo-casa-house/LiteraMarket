import React, { useState } from 'react';
import { CabecalhoContainer, Container,RostoIMG,Clicavel, Footer, MensagemFavoritosTextG, MensagemFavoritosTextP, HorizontalConteiner, VoltarIMG, Bolinha,FavoritosConteiner,TituloText, BolsaIMG, FavsIMG,MeioConteiner,MensagemFavoritos, NumItensText} from './style';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import FiltroFavoritos from '../../Componentes/Favoritos/Filtro';
export default function Favoritos() {
    const navigation = useNavigation();
    const [Mensagem, setMensagem] = useState(false);
    const [BolsaAtiva, setBolsaAtiva] = useState(true);
    const handleMensagem = (valor) => {
        if (valor>0){
        setMensagem(true);
    }
      };
   
    return (
        <Container>
            <CabecalhoContainer>
                <HorizontalConteiner>
                    <Clicavel onPress={() => navigation.navigate('Home' as never, {value:1})}>
                        <VoltarIMG source={require('../../../assets/SetaVoltar.png')} />
                    </Clicavel>
                    <FavoritosConteiner>
                        <TituloText>Favoritos</TituloText>
                    </FavoritosConteiner>
                   
                    {BolsaAtiva&&<Bolinha></Bolinha>}
                    <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
                    <BolsaIMG source={require('../../../assets/Bolsa.png')}  />
                    </Clicavel>
                    
                </HorizontalConteiner>
                 <MeioConteiner>
                            <FavsIMG source={require('../../../assets/Favoritos/favs.png')}/>
                            <NumItensText>4 Itens</NumItensText>
                        </MeioConteiner>
                
            </CabecalhoContainer>
            <FiltroFavoritos/>

            {Mensagem &&
            <MensagemFavoritos>
            <RostoIMG source={require('../../../assets/Favoritos/caraTriste.png')} />
                <MensagemFavoritosTextG>Você não tem Favoritos</MensagemFavoritosTextG>
                <MensagemFavoritosTextP>Adicione um Item aos seus Favoritos</MensagemFavoritosTextP>
            </MensagemFavoritos>}

            <Footer>           
                <RodapePagHome value={2}/>
            </Footer> 
        </Container>
       
    );
}

