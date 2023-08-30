import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.colors.BrancoFundo,
    },
    overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.colors.PretoTransparente,
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
    Mensagem: {
        width: 382,
        height: 324,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: global.colors.AzulEscuro,
        borderRadius: 24,
    },
    MensagemBotaoAzul: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 262,
        height: 62,
        borderRadius: 76,
        backgroundColor: global.colors.Azul,
        marginTop: 11,
    },
    MensagemTextoAviso: {
        color: global.colors.Branco,
        fontSize: 28,
        fontFamily: global.fonts.roboto,
        textAlign: 'center',
    },
    MensagemBotaoAzulTexto: {
        color: global.colors.Branco,
        fontSize: 20,
        marginHorizontal: 30,
        fontFamily: global.fonts.roboto,
        textAlign: 'center',
    },
    MensagemConvidadoBotaoTexto: {
        fontFamily: global.fonts.roboto,
        color: global.colors.Branco,
        fontSize: 15,
        marginHorizontal: 30,
        marginTop: 10,
        textAlign: 'center',
    },
    BotaoExclamacao: {
        position: 'absolute',
        bottom: 270,
        width: 110,
        height: 110,
        marginBottom:20,
    },
    
});

export default styles;
