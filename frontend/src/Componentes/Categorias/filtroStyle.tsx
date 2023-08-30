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
      width:'100%',
      height: 38,
      marginBottom:10,
      alignContent:'center',      
      backgroundColor: global.colors.Branco,
  
    },
    opçoesContainer:{
      marginLeft:16,
      marginTop:8,
      flexDirection: 'row',
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

