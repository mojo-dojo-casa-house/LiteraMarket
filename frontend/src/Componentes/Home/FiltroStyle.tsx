import { StyleSheet } from 'react-native';
import global from '../../globalStyles';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    conteinerProdutos:{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginBottom:90,
      width:414,
      paddingHorizontal:16,
      
    },
    opçoes: {
      flexDirection: 'row',
      marginVertical: 9,
  
    },
    opção: {
      alignItems: 'center',
      marginHorizontal: 11,
    },
    opçãoTexto: {
      fontSize: 16,
      color: global.colors.Roxo,
    },
    opçãoSelecionada: {
      borderBottomWidth: 1,
      borderColor: global.colors.Azul,
    },
    opçãoSelecionadaTexto: {
      color: global.colors.Azul,
    },
    containerProduto: {
      flex: 1,
      alignItems: 'center',
      
    },
  });
export default styles;
