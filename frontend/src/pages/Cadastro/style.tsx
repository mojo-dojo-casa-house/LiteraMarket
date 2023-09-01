import global from "../../globalStyles";
import styled from "styled-components/native";

export const Container =styled.View`
    flex: 1;
    align-items: center;
    background-color: ${global.colors.BrancoFundo};
`;

export const OndaFundo =styled.Image`
    width: 414px;
    height: 418px;
    z-index:-1;
    position:absolute;
    top:0
`;

export const Logo =styled.Image`
    width: 322px;
    height: 160px;
    margin-top:10px;

`;

export const VoltarIMG =styled.Image`
width: 31px;
  height: 30px;
  margin-left: 16px;
`;
export const Voltar =styled.View`
width: 414px;
margin-top: 20;

`;

export const Clicavel =styled.Pressable`
`;

export const Titulo =styled.Text`
    font-family: ${global.fonts.roboto};
    color:${global.colors.AzulEscuro};
    font-size: 36px;
    position: absolute;
    top:310;
    left:16;

`;