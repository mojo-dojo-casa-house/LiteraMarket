import { StyleSheet } from 'react-native';
import global from '../../globalStyles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: global.colors.BrancoFundo,
    },
    VoltarIMG:{
        width: 31,
        height: 30,
        marginLeft: 16,
    },
    tituloText:{
        fontSize: 24,
        fontFamily: global.fonts.roboto,
        fontWeight: 'bold',
        color: global.colors.AzulEscuro,
        
    },
    bolinha:{
        width:10,
        height:10,
        backgroundColor: global.colors.Azul,
        borderRadius:100,
        position:'absolute',
        right:12,
        top:3,
        zIndex:1,
    },
    
    footer: {
        position: 'fixed',
        bottom:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cabeçalhoContainer:{
        height:88,
        width:'100%',
        backgroundColor: global.colors.Branco,
        borderBottomWidth: 1,
        borderColor: global.colors.Cinza,

        

    },
    horizontalConteiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop:16,
     
    },
    meioConteiner:{
        marginTop:5,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
       
    },
    favoritosConteiner:{
        flexDirection:'column',
        alignItems:'center',
        
    },
    bolsaIMG:{
        width:25,
        height:28,
        marginRight:16,
    },
    favsIMG:{
        width:16,
        height:14,
        marginRight:5,
    },
    rostoIMG:{
        width:43,
        height:43,

    },
    numItensText:{
        fontFamily: global.fonts.roboto,
        fontSize: 16,
        color: global.colors.Cinza
    },
    barraCabeçalho:{
        height:1,
        width:'100%',
        backgroundColor: global.colors.Cinza,
    },
    mensagemFavoritos:{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:40,
        position: 'absolute',
        top: '15%',
    },
    mensagemFavoritosTextG:{
        fontSize: 32,
        color: global.colors.AzulEscuro,
        fontFamily: global.fonts.roboto,
        fontWeight:'200',
    },
     mensagemFavoritosTextP:{
        fontSize: 16,
        color: global.colors.Roxo,
        fontFamily: global.fonts.roboto,
        fontWeight:'200',
    },
    categoriaConteiner:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginLeft:10,
        width:177,
        height: 110,
        borderRadius:16,
        backgroundColor:global.colors.Azul,
    },
    iconeIMG:{
        height:'60%',
        width:'60%',
       
    },
    categoriaTexto:{
        textAlign:'center',
        fontFamily:global.fonts.roboto,
        fontSize:24,
        color: global.colors.Branco,
        fontWeight: 'bold',
       marginHorizontal:10,
        

    },
    conteinerGeneros:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom:90,
        width:414,
        paddingHorizontal:16,
        
      },
   
});
  
export default styles;
