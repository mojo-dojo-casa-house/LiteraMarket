import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    Conteiner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', 
      width: 414,
      height: 80,
      backgroundColor: global.colors.AzulEscuro,
    },
    Menu: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      marginLeft: 16,
      
    },
    Circulo: {
      width: 8,
      height: 8,
      margin: 2, 
      backgroundColor: global.colors.Azul,
      borderRadius: 25,
    },
    LogoContainer: {
      flex: 1, 
      alignItems: 'center', 
    },
    Logo: {
      width: 111,
      height: 62,
    },
    Perfil:{
      alignItems:'center',
      justifyContent:'center',
      width: 51,
      height: 51,
      borderRadius:100,
      marginRight: 16,
      backgroundColor: global.colors.Azul,
  
    },
    PerfilIMG: {
      width: 20,
      height: 18,
     
   
    },
  });
  
export default styles;
