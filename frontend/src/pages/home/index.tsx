import React, { useState, useEffect } from 'react';
import {Container,OverlayContainer,Footer,Mensagem,MensagemBotaoAzul,MensagemTextoAviso,MensagemBotaoAzulTexto,MensagemConvidadoBotaoTexto,BotaoExclamacao, Overlay, Botao, Final} from './style';
import Cabecalho from '../../Componentes/Home/Cabeçalho/Cabeçalho';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import Banner from '../../Componentes/Home/Banner/Banner';
import BarraPesquisa from '../../Componentes/Home/BarradePesquisa/BarraPesquisa';
import { useNavigation } from '@react-navigation/native';
import Filtro from '../../Componentes/Home/Filtro/Filtro';
import { useRoute } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const [OverlayVisivel, setOverlayVisivel] = useState(false);
    const [Cadastrado,setCadastrado] = useState(true);
    const route = useRoute();
    const { value, Nome, Email, Senha } = route.params || {};

    useEffect(() => {
        if (value === 1) {
            setCadastrado(true); 
        } else {
            setCadastrado(false); 
        }
    }, [value]);

    console.log('Received value:', value);

    const toggleOverlay = () => {
        if (Cadastrado) {
          setOverlayVisivel(!OverlayVisivel);
        } else {
          navigation.navigate('Perfil' as never, {Nome: Nome ,Email: Email, Senha: Senha });
        }
      };
    const fecharOverlay = () => {
        setOverlayVisivel(false);
    };

    return (
        <Container>
            <Cabecalho onPerfilClick={toggleOverlay} />
            <Banner/>
            <BarraPesquisa/>
            <Final><Filtro/></Final>
        
            <Footer>           
                <RodapePagHome value={1} />
            </Footer> 

            <Overlay visible={OverlayVisivel} transparent animationType="fade">
                <OverlayContainer onPress={fecharOverlay}>
                    <Mensagem>
                        <BotaoExclamacao source={require('../../../assets/Alerta.png')}/>
                        <MensagemTextoAviso>Você não Possui um Conta</MensagemTextoAviso>
                        <MensagemBotaoAzul onPress={() => {fecharOverlay(); navigation.navigate('Login' as never);}}>
                            <MensagemBotaoAzulTexto>Entrar com uma Conta</MensagemBotaoAzulTexto>
                        </MensagemBotaoAzul>
                        <MensagemBotaoAzul onPress={() => {fecharOverlay(); navigation.navigate('Cadastro' as never);}}>
                            <MensagemBotaoAzulTexto>Criar uma Conta</MensagemBotaoAzulTexto>
                        </MensagemBotaoAzul>
                        <Botao onPress={fecharOverlay}><MensagemConvidadoBotaoTexto>Continuar Como Convidado</MensagemConvidadoBotaoTexto></Botao>
                        <Botao onPress={() => {fecharOverlay(); navigation.navigate('Perfil' as never);}} >
                        </Botao>
                    </Mensagem>
                </OverlayContainer >
            </Overlay>
        </Container>
    );
}

