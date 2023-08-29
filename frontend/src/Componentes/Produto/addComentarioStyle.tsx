import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({

    comentarioContainer:{
        width:382,
        height:130,
        borderRadius:20,
        backgroundColor: global.colors.AzulEscuro,   
        marginBottom:90,
    }, 
    comentarioHorizontalContainer:{
        flexDirection:'row',
        
        marginLeft:10,
        marginTop:10,
          
    },
    comentarioVerticalContainer:{
        flexDirection:'column',
        marginLeft:10,
          
    },  
    
    userIMG:{
        alignItems:'center',
        justifyContent: 'center',
        width: 36,
        height:36,
        backgroundColor: global.colors.Cinza,  
        borderRadius:100,
        
    },
    perfilIMG:{
        width: 20,
        height: 20,
       
    },
    estrelasIndividual:{
        width:20,
        height:22,
    },
    enviarIMG:{
        width: 27,
        height:24,
        marginHorizontal: 10,
        
    },
    enviarBotão:{
        width: 27,
        height:24,
        position: 'absolute',
        bottom:12,
        right:22,
        
    },
    comentarioInput:{
        fontSize:16,
        fontFamily: global.fonts.roboto,
        color: global.colors.Cinza,
        borderColor: 'transparent',
        borderWidth: 1,
        outlineWidth: 0,
        width:281,
        height:75,
        flexWrap: 'wrap',
    
    } 
    
    
    
    });
    
export default styles;
