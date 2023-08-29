import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({

    verticalConteiner:{
        flexDirection: 'row',
        alignItems: 'center',   
    },    
    userIMG:{
        alignItems:'center',
        justifyContent: 'center',
        width: 36,
        height:36,
        backgroundColor: global.colors.Cinza,  
        borderRadius:100,
        marginRight:10,
        
    },
    perfilIMG:{
        width: 20,
        height: 20,
       
    },
    comentarioCampoContainer:{
        width:382,
        height:131,
        backgroundColor: global.colors.AzulEscuro,
        borderRadius:20,
        marginBottom:8
        
    },
    
    comentarioContainer:{
        marginLeft:10,
        marginTop:10,
        
       
    },
    comentarioUserConteiner:{
        alignItems:'center',
        flexDirection: 'row',
       
    
    },
    comentarioVerticalConteinier:{
        justifyContent:'center',
        flexDirection: 'column',
        marginRight:8,
    
    },
    
    comentarioTituloText:{
        fontSize:24,
        fontFamily: global.fonts.roboto,
        color: global.colors.Preto,
        fontWeight: 'bold',
       
    },
     comentarioNumText:{
        fontSize:14,
        fontFamily: global.fonts.roboto,
        color: global.colors.Cinza,
        
        
    },
    comentarioUsuario:{},
    
    comentarioNome:{
        fontSize: 20,
        fontFamily: global.fonts.roboto,
        fontWeight: 'bold',
        color: global.colors.Branco,
    },
    comentarioData:{
        fontSize: 12,
        fontFamily: global.fonts.roboto,
        color: global.colors.Cinza,
        marginBottom:8,
    
    },
    comentarioEstrelasIMG:{
        width:72,
        height:14,
    },
    comentarioCampo:{
        width:290,
        height:59,
        marginLeft:48,
       
    
    },
    comentarioCampoTexto:{
        color: global.colors.Branco,
        fontSize: 12,
        fontFamily: global.fonts.roboto,
    },
    
    
    });
    
    

export default styles;
