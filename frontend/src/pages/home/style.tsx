import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${global.colors.BrancoFundo};
    
`;
export const Final= styled.View`
        margin-bottom: 100px;
    
`;
export const OverlayContainer = styled.Pressable`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${global.colors.PretoTransparente};
`;

export const Footer = styled.View`
    position: fixed;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

export const Mensagem = styled.View`
    width: 382px;
    height: 324px;
    align-items: center;
    justify-content: center;
    background-color: ${global.colors.AzulEscuro};
    border-radius: 24px;
`;

export const MensagemBotaoAzul = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 262px;
    height: 62px;
    border-radius: 76px;
    background-color: ${global.colors.Azul};
    margin-top: 11px;
`;

export const MensagemTextoAviso = styled.Text`
    color: ${global.colors.Branco};
    font-size: 28px;
    font-family: ${global.fonts.roboto};
    text-align: center;
`;

export const MensagemBotaoAzulTexto = styled.Text`
    color: ${global.colors.Branco};
    font-size: 20px;
    margin-horizontal: 30px;
    font-family: ${global.fonts.roboto};
    text-align: center;
`;

export const MensagemConvidadoBotaoTexto = styled.Text`
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Branco};
    font-size: 15px;
    margin-horizontal: 30px;
    margin-top: 10px;
    text-align: center;
`;

export const BotaoExclamacao = styled.Image`
    position: absolute;
    bottom: 270px;
    width: 110px;
    height: 110px;
    margin-bottom: 20px;
`;

export const Botao = styled.Pressable`
   
`;

export const Overlay = styled.Modal`
 
`;
