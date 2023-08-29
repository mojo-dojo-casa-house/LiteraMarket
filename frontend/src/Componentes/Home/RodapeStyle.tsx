import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 414,
      height: 80,
      backgroundColor: global.colors.AzulEscuro,
      
    },
    Home: {
      width: 33,
      height: 35,
    },
    Fav: {
      width: 41,
      height: 35,
    },
    Categoria: {
      width: 33,
      height: 35,  
    },
    Bolsa: {
      width: 30,
      height: 35, 
    },
  
    Selecionado: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 106,
      height: 106,
      borderRadius: 100,
      marginBottom: 28,
      backgroundColor: global.colors.AzulEscuro,
    },
    nãoSelecionado: {
    
      
    },
  
    IconesConteiner:{
      width: 414,
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      
  
    }
  
  });
export default styles;
