import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import Comentario from '../../Componentes/Produto/Comentarios';
import FazerComentario from '../../Componentes/Produto/addComentario';
import {Container,Rodape,SetaIMG,BolsaIMG,CabecalhoContainer, TituloText, ProdutoContainer, ProdutoIMG, InfoConteiner, GeneroProduto, TituloProduto, AutorProduto, Clicavel, PrecoProduto, VerticalConteiner, AvaliacaoValor, EstrelasIMG, CurtidaIMG, BotaoComprar, ImageProduto, Button, BotaoTexto,CarrinhoIMG, DescricaoContainer,DescricaoSelecionadoContainer,DescricaoBarra,DescricaoTituloText,DescricaoText,PerfilConteinier,ComentarioCampo,ComentarioCampoContainer,ComentarioInput,ComentarioTituloConteiner,ComentarioTituloQtd,ComentarioTituloText,PerfilData,PerfilIMG,PerfilInfoConteinier,PerfilLocal,PerfilNome } from './style';
import { useRoute } from '@react-navigation/native';

export default function Produto() {
    const navigation = useNavigation();  
    const route = useRoute();
    const { favorito } = route.params || {};

    const [ProdutosData, setProdutosData] = useState([
        {
          id: 1,
          genero: 'Ficção',
          titulo: 'A Revolução dos Bichos',
          autor: 'George Orwell',
          preco: 'R$ 25.98',
          avaliação: 5,
          image: require('../../../assets/LivroIMG.png'),
          favorito: favorito,
        },
      ]);

const getEstrelasIMG = (avaliação) => {
        switch (avaliação) {
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
    

    const handlePress = (IdProduto) => {
        const updatedProdutos = ProdutosData.map((produto) =>
          produto.id === IdProduto ? { ...produto, favorito: !produto.favorito } : produto
        );
        setProdutosData(updatedProdutos);
      };

    return (
        <Container>  
           <CabecalhoContainer>     
                <Clicavel onPress={() => navigation.navigate('Home' as never)}>
                    <SetaIMG source={require('../../../assets/SetaVoltar.png')} />
                </Clicavel>
                <TituloText>Detalhes</TituloText>
                <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
                    <BolsaIMG source={require('../../../assets/Bolsa.png')} />
                </Clicavel>
            </CabecalhoContainer>

            {ProdutosData.map(produto => (
            <ProdutoContainer>
                <ProdutoIMG source={produto.image} />
            </ProdutoContainer>))}

            {ProdutosData.map(produto => (
            <InfoConteiner>     
                <GeneroProduto>{produto.genero}</GeneroProduto>

                <VerticalConteiner>
                    <TituloProduto>{produto.titulo}</TituloProduto>
                    <Button onPress={() => handlePress(produto.id)}>
                     <ImageProduto source={produto.favorito ? require('../../../assets/FavoritaTWO.png') : require('../../../assets/FavoritaONE.png')} />
                    </Button>


                </VerticalConteiner>

                <AutorProduto>{produto.autor}</AutorProduto>

                <VerticalConteiner>
                    <PrecoProduto>{produto.preco}</PrecoProduto>
                    <VerticalConteiner>
                        <AvaliacaoValor>{produto.avaliação}.0</AvaliacaoValor>
                        <EstrelasIMG source={getEstrelasIMG(produto.avaliação)} />
                    </VerticalConteiner>
                </VerticalConteiner>

                <PerfilConteinier> 
                    <VerticalConteiner> 
                    <PerfilIMG source={require('../../../assets/Perfil.png')} />
                    <PerfilInfoConteinier>
                        <PerfilNome>Roberto França</PerfilNome>
                        <PerfilLocal>São Paulo</PerfilLocal>
                        </PerfilInfoConteinier>
                    </VerticalConteiner> 
                    <PerfilData>30 de Ago</PerfilData>
                </PerfilConteinier>

                <DescricaoContainer>  
                    <DescricaoSelecionadoContainer>
                    <DescricaoTituloText>Descrição</DescricaoTituloText>
                    <DescricaoBarra></DescricaoBarra>
                    </DescricaoSelecionadoContainer>
                    <DescricaoText>
                        Lorem ipsum dolor sit amet. Est sequi nihil et 
                        voluptas totam aut nulla deleniti id fuga eveniet. Aut 
                        dignissimos ratione ea galisum corporis a vitae aperiam 
                        et ratione deleniti ad repellendus possimus rem excepturi
                        perspiciatis id officiis voluptas.
                    </DescricaoText>
                </DescricaoContainer>

            </InfoConteiner>
            ))}

            < BotaoComprar onPress={() => navigation.navigate('Bolsa' as never, {comprar:true})}>
                <BotaoTexto>Add ao Carrinho</BotaoTexto>
                <CarrinhoIMG source={require('../../../assets/CarrinhoBranco.png')}/>
            </ BotaoComprar>

            <ComentarioTituloConteiner>
                <ComentarioTituloText>Comentários</ComentarioTituloText>
                <ComentarioTituloQtd>3</ComentarioTituloQtd>
            </ComentarioTituloConteiner>

            <ComentarioCampoContainer>
                <Comentario/>
            </ComentarioCampoContainer>

            <FazerComentario/>

            <Rodape>
                <RodapePagHome/>   
            </Rodape>
        </Container>
    );
}
