import React, { useState } from 'react';
import {Container,OverlayContainer,Footer,Mensagem,MensagemBotaoAzul,MensagemTextoAviso,MensagemBotaoAzulTexto,MensagemConvidadoBotaoTexto,BotaoExclamacao, Overlay, Botao, Final} from './style';
import Cabecalho from '../../Componentes/Home/Cabeçalho/Cabeçalho';
import RodapePagHome from '../../Componentes/Home/Rodape/Rodape';
import Banner from '../../Componentes/Home/Banner/Banner';
import BarraPesquisa from '../../Componentes/Home/BarradePesquisa/BarraPesquisa';
import FiltroEscolhas from '../../Componentes/Home/Filtro/Filtro';
import { useNavigation } from '@react-navigation/native';
import Filtro from '../../Componentes/Home/Filtro/Filtro';

export default function Home() {
    const navigation = useNavigation();
    const [OverlayVisivel, setOverlayVisivel] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisivel(!OverlayVisivel);
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
                        <MensagemConvidadoBotaoTexto>IR PARA PERFIL (APAGAR ESSE BOTAO DEPOIS)</MensagemConvidadoBotaoTexto>
                        </Botao>
                    </Mensagem>
                </OverlayContainer >
            </Overlay>
        </Container>
    );
}

