import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${global.colors.BrancoFundo};
`;

export const VoltarIMG = styled.Image`
    width: 31px;
    height: 30px;
    margin-left: 16px;
`;

export const TituloText = styled.Text`
    font-family: ${global.fonts.roboto};
    font-size: 20px;
    color: ${global.colors.Cinza};
    
`;

export const ProdutoContainer = styled.View`
    margin-bottom: 400px;
    margin-top: 100px;
`;

export const Bolinha = styled.View`
    width: 10px;
    height: 10px;
    background-color: ${global.colors.Azul};
    border-radius: 100px;
    position: absolute;
    right: 12px;
    top: 3px;
    z-index: 1;
`;

export const Rodape = styled.View`
    position: fixed;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

export const CabeçalhoContainer = styled.View`
    height: 88px;
    width: 100%;
    background-color: ${global.colors.BrancoFundo};
    position: fixed;
    top: 0;
`;

export const HorizontalContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const MeioContainer = styled.View`
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
`;

export const FavoritosContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BolsaIMG = styled.Image`
    width: 25px;
    height: 28px;
    margin-right: 16px;
`;

export const FavsIMG = styled.Image`
    width: 16px;
    height: 14px;
    margin-right: 5px;
`;

export const RostoIMG = styled.Image`
    width: 43px;
    height: 43px;
`;

export const HistoricoText = styled.Text`
    font-size: 20px;
    font-family: ${global.fonts.roboto};
    font-weight: bold;
    color: ${global.colors.AzulEscuro};
    margin-left: 18px;
  `;

export const BarraCabecalho = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${global.colors.Cinza};
`;

export const MensagemFavoritos = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    position: absolute;
    top: 15%;
`;

export const MensagemFavoritosTextG = styled.Text`
    font-size: 32px;
    color: ${global.colors.AzulEscuro};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
`;

export const MensagemFavoritosTextP = styled.Text`
    font-size: 16px;
    color: ${global.colors.Roxo};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
`;

export const TotaisContainer = styled.View`
    width: 414px;
    height: 316px;
    background-color: ${global.colors.Branco};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;

export const CupomContainer = styled.View`
    flex-direction: row;
    height: 86px;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${global.colors.Cinza};
    
    margin-bottom: 20px;
    
    
`;

export const CupomIMG = styled.Image`
    width: 56px;
    height: 41px;
    margin-left: 16px;
`;

export const CupomTextContainer = styled.View`
    flex-direction: column;
    margin-left: 8px;
`;

export const CupomTextMaior = styled.Text`
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Azul};
    font-size: 20px;
`;

export const CupomTextMenor = styled.Text`
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Cinza};
    font-size: 12px;
`;

export const ValoresContainer = styled.View`
    margin-top: 24px;
`;

export const ValoresLinhaContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-horizontal: 16px;
    margin-bottom: 20px;
    
`;

export const ValoresSubText = styled.Text`
    font-size: 16px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Cinza};
    font-weight: 200;
`;

export const ValoresText = styled.Text`
    font-size: 24px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Preto};
    font-weight: 200;
`;

export const ValoresTextNum = styled.Text`
    font-size: 24px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Azul};
    font-weight: 500;
`;

export const ComprarBotao = styled.TouchableOpacity`
    background-color: ${global.colors.Azul};
    height: 56px;
    width: 382px;
    border-radius: 76px;
    align-items: center;
    justify-content: center;
    margin-horizontal: 16px;
`;

export const ComprarText = styled.Text`
    font-size: 24px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.Branco};
`;
export const Clicavel = styled.Pressable`
   
`;
export const MenuValores = styled.View`
margin-top: 20px,
 

`;
export const IndicadorPonto = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${global.colors.Azul};
  border-radius: 100px;
  position: absolute;
  right: 12px;
  top: 3px;
  z-index: 1;
`;


export const DivisorContainer = styled.View`
  borderBottomWidth: 1;
  borderBottomColor:  ${global.colors.Cinza};
`;

export const TopoPedido = styled.View`
  marginVertical: 20;
  marginHorizontal: 10;
`;

export const PedidoContainer = styled.View`
  width: 382px;
  background-color: white;
  border-radius: 14px;
  marginVertical: 90px;
`;

export const PedidoHorizontal = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const PedidoNumTexto = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 16px;
  color: ${global.colors.Preto};
  fontWeight: bold;
`;

export const PedidoDataTexto = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 14px;
  color: ${global.colors.Cinza};
`;

export const PedidoSituaçãoTexto = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 14px;
  color: ${global.colors.Preto};
`;

export const PedidoStatusTexto = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 14px;
  color: ${global.colors.Preto};
`;

export const TituloLivro = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 18px;
  color: ${global.colors.Preto};
  fontWeight: 500;
`;

export const QuantidadeLivros = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 16px;
  color: ${global.colors.Preto};
  margin-right:8px;
  
`;

export const PrecoLivro = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 16px;
  color: ${global.colors.Preto};
  fontWeight: 500;
`;

export const AutorLivro = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 14px;
  color: ${global.colors.Cinza};
`;
export const LocalizacaoIMG  = styled.Image`
  width: 10px;
  height: 15px;
  margin-right:6px;


`;

export const ConteudoPedido = styled.View`
  marginVertical: 10px;
  marginHorizontal: 10px;     
  justifyContent: center;
`;

export const BaixoPedido = styled.View`
  marginVertical: 30px;
  marginHorizontal: 10px;
`;

export const Localizacao = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 14px;
  color: ${global.colors.Preto};
  fontWeight: bold;
`;

export const Total = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 14px;
  color: ${global.colors.Preto};
  margin-right:8px;
`;

export const PrecoTotal = styled.Text`
  fontFamily: ${global.fonts.roboto};
  fontSize: 16px;
  color: ${global.colors.Preto};
  fontWeight: 500;
`;
