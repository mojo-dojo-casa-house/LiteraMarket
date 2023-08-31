import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import ProdutoBolsaMiniatura from '../../Componentes/Bolsa/ThumbnailProduto';
import {Container, Clicavel, MenuValores,VoltarIMG,ProdutoContainer,CabeçalhoContainer,HorizontalContainer,BolsaIMG,IndicadorPonto, HistoricoText,FavoritosContainer,TituloText,RostoIMG,MensagemFavoritos,MensagemFavoritosTextG,MensagemFavoritosTextP, Rodape, ValoresContainer,ValoresLinhaContainer,ValoresSubText,ValoresText,ValoresTextNum,ComprarBotao,ComprarText,TotaisContainer,CupomContainer,CupomIMG,CupomTextContainer,CupomTextMaior,CupomTextMenor,} from './style';

export default function Bolsa() {
    const navigation = useNavigation();
    const [Mensagem, setMensagem] = useState(false);
    const [BolsaAtiva, setBolsaAtiva] = useState(true);
   
    return (
        <Container>
              <CabeçalhoContainer>
                <HorizontalContainer>
                    <Clicavel onPress={() => navigation.navigate('Home' as never)}>
                        <VoltarIMG source={require('../../../assets/SetaVoltar.png' )} />
                    </Clicavel>
                    <FavoritosContainer>
                        <TituloText>Meus Pedidos</TituloText>
                        <Clicavel onPress={() => navigation.navigate('Historico' as never)}>
                            <HistoricoText>Histórico</HistoricoText>
                        </Clicavel>
                    </FavoritosContainer>
                    {BolsaAtiva && <IndicadorPonto />}
                    <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
                        <BolsaIMG source={require('../../../assets/Bolsa.png')} />
                    </Clicavel>
                </HorizontalContainer>
             </CabeçalhoContainer>

              <ProdutoContainer>
              <ProdutoBolsaMiniatura/>
            </ProdutoContainer>

            {Mensagem &&
            <MensagemFavoritos>
                <RostoIMG source={require('../../../assets/Favoritos/caraTriste.png' )} />
                <MensagemFavoritosTextG>Seu Carrinho Está Vazio</MensagemFavoritosTextG>
                <MensagemFavoritosTextP>Adicione um Item ao seu carrinho</MensagemFavoritosTextP>
           </MensagemFavoritos>}

            <Rodape>   
            <TotaisContainer>
            <Clicavel>
                <CupomContainer>
                    <CupomIMG source={require('../../../assets/Bolsa/Cupom.png')} />
                    <CupomTextContainer>
                        <CupomTextMaior>Usar Cupom</CupomTextMaior>
                        <CupomTextMenor>Use o Cupom de Desconto para ganhar desconto</CupomTextMenor>
                    </CupomTextContainer>
                </CupomContainer>
            </Clicavel>
                
                <MenuValores>
                
                    <ValoresLinhaContainer>
                        <ValoresSubText>Sub Total</ValoresSubText>
                        <ValoresSubText>R$ 0.00</ValoresSubText>
                    </ValoresLinhaContainer>

                    <ValoresLinhaContainer>
                    <ValoresSubText>Frete</ValoresSubText>
                    <ValoresSubText>R$ 0.00</ValoresSubText>
                    </ValoresLinhaContainer>

                    <ValoresLinhaContainer>
                    <ValoresText>Total</ValoresText>
                    <ValoresTextNum>R$ 0.00</ValoresTextNum>
                    </ValoresLinhaContainer>
                    
                
                    <ComprarBotao>
                        <ComprarText>Continuar</ComprarText>
                    </ComprarBotao>
                </MenuValores>

             </TotaisContainer>
                    

                    
                <RodapePagHome value={4}/>
            </Rodape>
        </Container>
       
    );
}
