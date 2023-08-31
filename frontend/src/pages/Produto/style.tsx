import styled from "styled-components/native";
import global from "../../globalStyles";

export const Container = styled.View`
    align-items: center;
    background-color: ${global.colors.BrancoFundo};
`;

export const Rodape = styled.View`
    position: fixed;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

export const SetaIMG = styled.Image`
    width: 31px;
    height: 30px;
    margin-left: 16px;
`;

export const BolsaIMG = styled.Image`
    width: 25px;
    height: 28px;
    margin-right: 16px;
`;

export const CabecalhoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 414px;
    margin-top: 16px;
    justify-content: space-between;
    margin-bottom:26px;           
`;

export const Voltar = styled.Text`
    font-size: 30px;
    color: ${global.colors.Azul};
    font-family: ${global.fonts.roboto};
`;

export const TituloText = styled.Text`
    font-family: ${global.fonts.roboto};
    font-size:24px;
    color:${global.colors.AzulEscuro};
    font-weight:bold;

`;

export const ProdutoContainer = styled.View`
    justify-content:center;
    align-items:center;
    width:382px;
    height:294px;
    border-radius:24px;
    background-color:${global.colors.Branco};
    margin-bottom:25px;

`;

export const ProdutoIMG = styled.Image`
   width:90%;
   height:100%;

`;

export const InfoConteiner = styled.View`
   width:382px;

`;

export const GeneroProduto = styled.Text`
   font-size:16px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Azul};

`;

export const TituloProduto = styled.Text`
   font-size:24px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Preto};
   font-weight:bold;
   margin-right:82px;

`;

export const AutorProduto = styled.Text`
   font-size:16px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Cinza};

`;
export const ImageProduto = styled.Image`
 width:29px;
 height:25px;
`;
export const PrecoProduto = styled.Text`
    font-size:32px;
    font-family: ${global.fonts.roboto};
    color:${global.colors.Azul};
    font-weight:bold;
    margin-right:30px;
`;
export const Button = styled.TouchableOpacity`
 padding:10px;
 border-radius:5px;
`;
export const VerticalConteiner = styled.View`
    flex-direction: row;
    align-items: center;   
`;

export const AvaliacaoValor = styled.Text`
    font-size:24px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Preto};
`;

export const EstrelasIMG = styled.Image`
    width:180px;
    height:33px;
`;

export const CurtidaIMG = styled.Image`
    width: 29px;
    height: 25px;
`;

export const BotaoComprar = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    flex-direction: row;
    width:381px;
    height:56px;
    background-color: ${global.colors.Azul};
    border-radius:76px;
    margin-bottom:10px;
`;

export const BotaoTexto = styled.Text`
    font-size:24px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Branco};
`;

export const CarrinhoIMG = styled.Image`
    width:27px;
    height:22px;
    margin-left:14px;
`;

export const DescricaoContainer = styled.View`
    justify-content:center;
    flex-direction: column;
`;

export const DescricaoSelecionadoContainer = styled.View`
    justify-content:center;
    flex-direction: column;
`;

export const DescricaoBarra = styled.View`
    width:69px;
    height:1px;
    background-color: ${global.colors.Azul};
    margin-bottom: 10px;
`;

export const DescricaoTituloText = styled.Text`
    font-size:16px;
    font-family:${global.fonts.roboto};
    color:${global.colors.Azul};
    margin-bottom: 6px;
`;

export const DescricaoText = styled.Text`
   font-size:16px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Preto};
   margin-bottom: 16px;

`;

export const PerfilConteinier = styled.View`
   align-items:center;
   justify-content: space-between;
   flex-direction: row;
   margin-vertical: 16px;

`;

export const PerfilIMG = styled.Image`
   width:36px;
   height:36px;
   border-radius:100px;
   margin-right:10px;

`;

export const PerfilInfoConteinier = styled.View`
   justify-content:center;
   flex-direction: column;

`;

export const PerfilNome = styled.Text`
   font-size:14px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Preto};
   font-weight:bold;

`;

export const PerfilLocal = styled.Text`
   font-size:12px;
   font-family:${global.fonts.roboto};
   color:${global.colors.AzulClaro};

`;

export const PerfilData = styled.Text`
   font-size:12px;
   font-family:${global.fonts.roboto};
   color:${global.colors.AzulClaro};

`;

export const ComentarioCampoContainer = styled.View`
    justify-content:center;
    flex-direction: column;
`;

export const ComentarioTituloConteiner = styled.View`
    align-items:center;
    flex-direction: row;
    width:381px;

`;

export const ComentarioTituloText = styled.Text`
    font-size:24px;
    font-family:${global.fonts.roboto};
    color:${global.colors.Preto};
    font-weight:bold;
    margin-bottom: 10px;

`;

export const ComentarioTituloQtd = styled.Text`
   font-size:14px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Cinza};
   margin-bottom: 5px;
   margin-left: 8px;

`;

export const ComentarioCampo = styled.View`
   flex-direction: row;
   align-items: center;
   width:382px;
   height: 56px;
   border-radius:20px;
   background-color:${global.colors.AzulEscuro};

`;

export const ComentarioInput = styled.TextInput`
   font-size:16px;
   font-family:${global.fonts.roboto};
   color:${global.colors.Branco};
   border-color: transparent;
   border-width: 1px;
   outline-width: 0px;
   width:280px;

`;

export const UserIMG = styled.Image`
   width:36px;
   height:36px;
   margin-horizontal: 10px;

`;

export const EnviarIMG = styled.Image`
   width:27px;
   height:24px;
   margin-horizontal: 10px;

`;
export const Clicavel = styled.Pressable`
  
`;