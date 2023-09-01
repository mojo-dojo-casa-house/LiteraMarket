import React, { useState, useEffect } from 'react';
import {Container, MenuPerfil, OverlayContainer,MenuOver,Footer,Mensagem,MensagemBotaoAzul,MensagemTextoAviso,MensagemBotaoAzulTexto,MensagemConvidadoBotaoTexto,BotaoExclamacao, Overlay, Botao, Final, OverlayMenu, MenuContainer, MenuHorizontal, MenuText, MenuImg, MenuIcon, Clicavel, MenuVertical} from './style';
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
    const [MenuVisivel, setMenuVisivel] = useState(false);
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

    const toggleMenu = () => {
          setMenuVisivel(!MenuVisivel);
       
      };
    const fecharMenu = () => {
        setMenuVisivel(false);
    };

    return (
        <Container>
            <Cabecalho onPerfilClick={toggleOverlay} onMenuClick={toggleMenu} />
            <Banner/>
            <BarraPesquisa/>
            <Final><Filtro/></Final>
        
            <Footer>           
                <RodapePagHome value={1} />
            </Footer> 

            <MenuOver visible={MenuVisivel}  transparent animationType="fade">
                <OverlayMenu onPress={fecharMenu}>
                    <MenuContainer>
                        <MenuHorizontal>
                        <MenuImg>
                        <MenuPerfil source={require('../../../assets/Visitante.png')} />
                        </MenuImg>
                        <MenuVertical>
                        <MenuText>Olá, João </MenuText>
                        <MenuText>joaosilva@gmail.com </MenuText>
                        </MenuVertical>
                        </MenuHorizontal>

                    <Clicavel onPress={() => navigation.navigate('Home' as never, {value:1})}>
                        <MenuHorizontal>
                            <MenuIcon source={require('../../../assets/HomeIcone.png')} />
                            <MenuText>
                                Inicio
                            </MenuText>
                        </MenuHorizontal>
                    </Clicavel>
                    <Clicavel onPress={() => navigation.navigate('Favoritos' as never, {value:1})}>
                        <MenuHorizontal>
                        <MenuIcon source={require('../../../assets/FavIcones.png')}/> 
                            <MenuText>
                                Favoritos
                            </MenuText>
                        </MenuHorizontal>
                    </Clicavel>
                    <Clicavel onPress={() => navigation.navigate('Categorias' as never, {value:1})}>
                        <MenuHorizontal>
                        <MenuIcon source={require('../../../assets/CategoriasIcone.png')} />
                            <MenuText>
                                Categorias
                            </MenuText>
                        </MenuHorizontal>
                        </Clicavel>
                        <Clicavel>
                        <MenuHorizontal>
                        <MenuIcon source={require('../../../assets/BolsaIcone.png')} />
                            <MenuText>
                               Bolsa
                            </MenuText>
                        </MenuHorizontal>
                        </Clicavel>
                        <Clicavel onPress={() => navigation.navigate('Login' as never, {value:1})}>
                        <MenuHorizontal>
                        <MenuIcon source={require('../../../assets/HomeIcone.png')} />
                            <MenuText>
                               Sair
                            </MenuText>
                        </MenuHorizontal>
                        </Clicavel>

                  
                    </MenuContainer>
                </OverlayMenu>

            </MenuOver>

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

