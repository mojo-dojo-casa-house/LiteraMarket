import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import {Container, Clicavel,VoltarIMG,PedidoSituaçãoTexto,BaixoPedido,Localizacao,
    Total,DivisorContainer,AutorLivro,TopoPedido,ConteudoPedido,TituloLivro,QuantidadeLivros,
    PedidoContainer,PedidoDataTexto,PedidoHorizontal,PedidoNumTexto,
    PedidoStatusTexto,PrecoLivro,PrecoTotal,CabeçalhoContainer,HorizontalContainer,BolsaIMG,IndicadorPonto,
     HistoricoText,FavoritosContainer,TituloText,RostoIMG,MensagemFavoritos,MensagemFavoritosTextG,
     MensagemFavoritosTextP, Rodape,LocalizacaoIMG} from './style';

export default function Historico() {
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
                    <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
                        <TituloText>Meus Pedidos</TituloText>
                    </Clicavel>
                        <HistoricoText>Histórico</HistoricoText>
                    </FavoritosContainer>
                    {BolsaAtiva && <IndicadorPonto />}
                    <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
                        <BolsaIMG source={require('../../../assets/Bolsa.png')} />
                    </Clicavel>
                </HorizontalContainer>
             </CabeçalhoContainer>


             <PedidoContainer>
             <DivisorContainer>
                <TopoPedido>
                <PedidoHorizontal>
                    <PedidoNumTexto>Pedido #52525</PedidoNumTexto>
                    <PedidoDataTexto>12 de junho de 2023</PedidoDataTexto>
                </PedidoHorizontal>
                <PedidoHorizontal>
                    <PedidoSituaçãoTexto>Situação: <PedidoStatusTexto>Enviado</PedidoStatusTexto></PedidoSituaçãoTexto>
                </PedidoHorizontal>
                </TopoPedido>
            </DivisorContainer>

         {/* LIVROS VENDIDOS */}
            <DivisorContainer>
            <ConteudoPedido>
                <PedidoHorizontal>
                <TituloLivro>A Revolução dos Bichos</TituloLivro>
                <PedidoHorizontal>
                    <QuantidadeLivros>1x</QuantidadeLivros>
                    <PrecoLivro>R$ 25.99</PrecoLivro>
                </PedidoHorizontal>
                </PedidoHorizontal>
                <PedidoHorizontal>
                <AutorLivro>Por George Orwell</AutorLivro>
                </PedidoHorizontal>
            </ConteudoPedido>
            </DivisorContainer>
            
           {/* LIVRO TOTAL */}
         
            <BaixoPedido>
                <PedidoHorizontal>
                <PedidoHorizontal>
                    <LocalizacaoIMG source={require('../../../assets/Historico/Pin.png')} />
                    <Localizacao>Rio de Janeiro</Localizacao>
                </PedidoHorizontal>
                <PedidoHorizontal>
                    <Total>Total</Total>
                    <PrecoTotal>R$ 25.99</PrecoTotal>
                </PedidoHorizontal>
                </PedidoHorizontal>
            </BaixoPedido>
            
           

            </PedidoContainer>


            {Mensagem &&
            <MensagemFavoritos>
                <RostoIMG source={require('../../../assets/Favoritos/caraTriste.png' )} />
                <MensagemFavoritosTextG>Seu Carrinho Está Vazio</MensagemFavoritosTextG>
                <MensagemFavoritosTextP>Adicione um Item ao seu carrinho</MensagemFavoritosTextP>
           </MensagemFavoritos>}

            <Rodape>   
             
                <RodapePagHome value={4}/>
            </Rodape>
        </Container>
       
    );
}
