import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${global.colors.BrancoFundo};
`;

export const Circulo = styled.View`
    margin-bottom:20px;
    align-items: center;
    justify-content: center;
    width:309px;
    height:309px;
    border-radius:1000px;
    background-color: ${global.colors.Azul};
`;
export const Botaoazul= styled.Pressable`
    background-color: ${global.colors.Azul};
    height: 56px;
    width: 382px;
    border-radius: 76px;
    align-items: center;
    justify-content: center;
    margin-horizontal: 16px;
`;
export const TextoBotao = styled.Text`
font-size: 24px;
font-family: ${global.fonts.roboto};
color: ${global.colors.Branco};
`;
export const Mensagem = styled.Text`
font-size: 24px;
font-family: ${global.fonts.roboto};
color: ${global.colors.AzulEscuro};
margin-bottom:20px;
`;
export const Selo = styled.Image`
    width:158px;
    height:100px;
  
`;