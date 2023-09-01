import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import ProdutoBolsaMiniatura from '../../Componentes/Bolsa/ThumbnailProduto';
import {Container, Clicavel, MenuValores,VoltarIMG,ProdutoContainer,CabeçalhoContainer,HorizontalContainer,BolsaIMG,IndicadorPonto, HistoricoText,FavoritosContainer,TituloText,RostoIMG,MensagemFavoritos,MensagemFavoritosTextG,MensagemFavoritosTextP, Rodape, ValoresContainer,ValoresLinhaContainer,ValoresSubText,ValoresText,ValoresTextNum,ComprarBotao,ComprarText,TotaisContainer,CupomContainer,CupomIMG,CupomTextContainer,CupomTextMaior,CupomTextMenor, CupomOverlay, Overlay,} from './style';
import { useRoute } from '@react-navigation/native';

export default function Bolsa() {

    const navigation = useNavigation();
    const [Mensagem, setMensagem] = useState(true);
    const [ProdutoCarrinho,setProdutoCarrinho] = useState(false);
    const [BolsaAtiva, setBolsaAtiva] = useState(false);
    const route = useRoute();
    const { comprar, aCompraRealizada } = route.params || {};

    const [CompraRealizada, setCompraRealizada] = useState(false);
    const [valorRecebido, setValorRecebido] = useState(0);
    const [Frete, setFrete] = useState(0);
    const [Total, setTotal] = useState(0);

    useEffect(() => {
        const novoTotal = valorRecebido + Frete; 
        setTotal(novoTotal);
      }, [valorRecebido, Frete]);

     const handleValorSelecionado = (valor) => {
    setValorRecebido(valor);
     };

     useEffect(() => {
        if (aCompraRealizada === true) {
            setCompraRealizada(true);
        } else {
            setCompraRealizada(false);
        }
    }, [aCompraRealizada]);


    useEffect(() => {
        if (comprar === true) {
            setProdutoCarrinho(true); 
            setMensagem(false)
            setBolsaAtiva(true)
        } else {
            setProdutoCarrinho(false); 
            setMensagem(true)
            setBolsaAtiva(false)
        }
    }, [comprar]);


    return (
        <Container>
              <CabeçalhoContainer>
                <HorizontalContainer>
                    <Clicavel onPress={() => navigation.navigate('Home' as never, {value:1})}>
                        <VoltarIMG source={require('../../../assets/SetaVoltar.png' )} />
                    </Clicavel>
                    <FavoritosContainer>
                        <TituloText>Meus Pedidos</TituloText>
                        <Clicavel onPress={() => navigation.navigate('Historico' as never, {valido: CompraRealizada})}>
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
            {ProdutoCarrinho &&
              <ProdutoBolsaMiniatura setPreçoTotal={handleValorSelecionado}/>}
              
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
                        <ValoresSubText>R$ {valorRecebido}</ValoresSubText>
                    </ValoresLinhaContainer>

                    <ValoresLinhaContainer>
                    <ValoresSubText>Frete</ValoresSubText>
                    <ValoresSubText>R$ {Frete}</ValoresSubText>
                    </ValoresLinhaContainer>

                    <ValoresLinhaContainer>
                    <ValoresText>Total</ValoresText>
                    <ValoresTextNum>R$ {Total}</ValoresTextNum>
                    </ValoresLinhaContainer>
                    
                
                    <ComprarBotao onPress={() => {
                        if (Total > 0) {
                        navigation.navigate('Compra' as never);
                        }
                    }}
                    disabled={Total <= 0}
                    >
                    <ComprarText>Continuar</ComprarText>
                    </ComprarBotao>
                </MenuValores>

             </TotaisContainer>
                    

                    
                <RodapePagHome value={4}/>
            </Rodape>

        </Container>
       
    );
}
