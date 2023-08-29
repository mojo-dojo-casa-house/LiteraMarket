import React, { useState } from 'react';
import { Text, View, Image,Pressable, Modal } from 'react-native';
import styles from './style';
import Cabecalho from '../../Componentes/Home/Cabeçalho';
import RodapePagHome from '../../Componentes/Home/Rodape';
import Banner from '../../Componentes/Home/Banner';
import BarraPesquisa from '../../Componentes/Home/BarraPesquisa';
import FiltroEscolhas from '../../Componentes/Home/Filtro';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.container}>
            <Cabecalho onPerfilClick={toggleOverlay} />
            <Banner/>
            <BarraPesquisa/>
            <FiltroEscolhas/>

            <View style={styles.footer}>           
                <RodapePagHome value={1} />
            </View>
            
            <Modal visible={OverlayVisivel} transparent animationType="fade">
                <Pressable style={styles.overlayContainer} onPress={fecharOverlay}>
                    <View style={styles.Mensagem}>
                       <Image source={require('../../../assets/Alerta.png')} style={styles.BotaoExclamacao} />
                        <Text style={styles.MensagemTextoAviso}>Você não Possui um Conta</Text>
                        <Pressable onPress={() => {fecharOverlay(); navigation.navigate('Login');}}
                         style={styles.MensagemBotaoAzul}><Text style={styles.MensagemBotaoAzulTexto}>Entrar com uma Conta</Text></Pressable>
                         
                        <Pressable onPress={() => {fecharOverlay(); navigation.navigate('Cadastro');}} 
                         style={styles.MensagemBotaoAzul}><Text style={styles.MensagemBotaoAzulTexto}>Criar uma Conta</Text></Pressable>
                        <Pressable onPress={fecharOverlay}><Text style={styles.MensagemConvidadoBotaoTexto}>Continuar Como Convidado</Text></Pressable>
                        <Pressable onPress={() => {fecharOverlay(); navigation.navigate('Perfil');}} >
                        <Text style={styles.MensagemConvidadoBotaoTexto} >IR PARA PERFIL (APAGAR ESSE BOTAO DEPOIS)</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}

