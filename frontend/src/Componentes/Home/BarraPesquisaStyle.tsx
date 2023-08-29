import { StyleSheet } from 'react-native';
import global from '../../globalStyles';


const styles = StyleSheet.create({
    Conteiner: {
      flexDirection: 'row', 
      alignItems: 'center',
      width: 382,
      height: 56,
      borderRadius: 76,
      backgroundColor: global.colors.Branco,
      marginTop:14,
      marginHorizontal:14,
    },
    BuscaInput: {
      borderColor: 'transparent',
      borderWidth: 1,
      outlineWidth: 0, 
      width: 382,
      height: 56,
      padding: 10,
      color: global.colors.Cinza,
      fontSize: 20,
      fontWeight: 'normal',
    },
    BuscaIcon:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 25,
    },
    BuscaIconConteiner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      marginLeft: 8,
      borderRadius: 25,
      backgroundColor: global.colors.Azul,
    },
  });
  
export default styles;
