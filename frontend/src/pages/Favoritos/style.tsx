import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: global.colors.BrancoFundo,
    },
    Voltar:{
        fontSize: 30,
        color:global.colors.Azul,
    },
    footer: {
        position: 'fixed',
        bottom:0,
        justifyContent: 'center',
        alignItems: 'center',
      },
   
});

  
export default styles;
