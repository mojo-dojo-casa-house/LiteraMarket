import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import ProdutoMiniatura from '../../Componentes/Home/ThumbnailProduto/ThumbnailProduto';
import { useRoute } from '@react-navigation/native';
import { Container,Cabecalho,VoltarIMG,TituloText,EditarText,InfoContainer,PerfilContainer,PerfilIMG,NomeText,EmailText,LocalizacaoContainer,LocalizacaoImage,LocalizacaoText,ValoresContainer,AvaliacaoContainer,AvaliacaoInfoContainer,AvaliacaoText,AvaliacaoValor,EstrelasAvaliacao,Divisor,VendasContainer,VendasText,BarraVendas,NumeroVendas,TituloVendas,TituloVendasContainer,Clicavel,BotaoContainer,TextoBotao,ProdutosConteiner,Rodape } from './style';


export default function Perfil() {
  const navigation = useNavigation();
  const route = useRoute();
  const { Nome, Email, Senha } = route.params || {};
  const [username, setUsername] = useState(Nome || '');
  const [email, setEmail] = useState(Email || '');
  const [password, setPassword] = useState(Senha || '');

  const dadosPerfil = [
    {
      id: 1,
      nome: 'João da Silva',
      email: 'joaodasilva@gmail.com',
      localizacao: 'Rio de Janeiro',
      vendas: '2.423',
      avaliacao: 5,
      imagem: require('../../../assets/Visitante.png'),
    },
  ];

  const getImagemEstrelas = (avaliacao) => {
    switch (avaliacao) {
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

  return (
    <Container>
        <Cabecalho>
          <Clicavel onPress={() => navigation.navigate('Home' as never, {value:1})}>
            <VoltarIMG source={require('../../../assets/SetaVoltar.png')} />
          </Clicavel>
          <TituloText>Perfil</TituloText>
          <EditarText>Editar</EditarText>
        </Cabecalho>

      {dadosPerfil.map((perfil) => (
        <InfoContainer key={perfil.id}>
        <PerfilContainer>
          <PerfilIMG source={perfil.imagem} />
        </PerfilContainer>
        <NomeText>{username}</NomeText>
        <EmailText>{email}</EmailText>
        <LocalizacaoContainer>
          <LocalizacaoImage source={require('../../../assets/Pin.png')} />
          <LocalizacaoText>{perfil.localizacao}</LocalizacaoText>
        </LocalizacaoContainer>
      </InfoContainer>
      ))}

      {dadosPerfil.map((perfil) => (
      <ValoresContainer key={perfil.id}>
      <AvaliacaoContainer>
        <AvaliacaoText>Avaliações</AvaliacaoText>
        <AvaliacaoInfoContainer>
          <AvaliacaoValor>{perfil.avaliacao}.0</AvaliacaoValor>
          <EstrelasAvaliacao source={getImagemEstrelas(perfil.avaliacao)}/>
        </AvaliacaoInfoContainer>
      </AvaliacaoContainer>
      <Divisor />
      <VendasContainer>
        <VendasText>Vendas</VendasText>
        <NumeroVendas>{perfil.vendas}</NumeroVendas>
      </VendasContainer>
    </ValoresContainer>
      ))}

      
        
        <Clicavel onPress={() => navigation.navigate('Home' as never)}>
        <BotaoContainer>
          <TextoBotao>Minhas Avaliações</TextoBotao>
        </BotaoContainer>
        </Clicavel>
        <Clicavel onPress={() => navigation.navigate('Home' as never)}>
        <BotaoContainer>
          <TextoBotao>Meus Favoritos</TextoBotao>
        </BotaoContainer>
        </Clicavel>
       
        
      

        <TituloVendasContainer>
          <BarraVendas />
          <TituloVendas>Minhas Vendas</TituloVendas>
          <BarraVendas />
        </TituloVendasContainer>
     <ProdutosConteiner>
        
            <ProdutoMiniatura />
        
        
            <ProdutoMiniatura />
        
        
            <ProdutoMiniatura />
        
    
      </ProdutosConteiner>

      <Rodape>
        <RodapePagHome value={0} />
      </Rodape>
    </Container>
  );
}

