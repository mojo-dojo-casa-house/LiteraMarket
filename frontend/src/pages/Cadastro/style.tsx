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
margin-top:60px;


`;

export const Titulo =styled.Text`
font-family: ${global.fonts.roboto};
color:${global.colors.AzulEscuro};
font-size: 36px;
position: absolute;
top:310;
left:16;


`;