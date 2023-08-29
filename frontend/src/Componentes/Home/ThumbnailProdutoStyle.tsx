import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    Container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    Produto: {
      flexDirection: 'column',
      alignItems: 'center',
      width: 185,
      height: 241,
      borderRadius: 15,
      backgroundColor: global.colors.Branco,
      marginBottom: 8,
      marginHorizontal: 3,
    
    },
    ImgProduto: {
      marginTop:10,
      width: 150,
      height: 139,
    },
    FavoritosOverlay: {
      position: 'absolute',
      top: 2,
      left: 2,
    },
    button: {
      padding: 10,
      borderRadius: 5,
    },
    image: {
      width: 29,
      height: 25,
    },
   CarrinhoOverlay: {
      position: 'absolute',
      right: 15,
      bottom: 1, 
    },
    ImgProdutoCompra: {
      flexDirection: 'row', 
      alignItems: 'center',
      width: 29,
      height: 29,
      marginLeft:17,
    },
    ImgProdutoEstrela: {
      flexDirection: 'row', 
      alignItems: 'center',
      width: 98,
      height: 19,
    },
    GeneroProduto: {
      fontSize: 11,
       fontWeight: '600',
       color: global.colors.Azul,
    },
    TituloProduto: {
      fontSize: 12,
       fontWeight: 'bold',
       color: global.colors.Preto,
    },
    AutorProduto: {
      fontSize: 12,
      fontWeight: 'bold',
      color: global.colors.Roxo,
    },
    PreçoProduto: {
      color:  global.colors.Azul,
      fontSize: 16,
       fontWeight: 'bold',
    },
   
  });

  
export default styles;
