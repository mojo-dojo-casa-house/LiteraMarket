import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: global.colors.BrancoFundo,
    },
    rodape: {
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
    setaIMG:{
        width: 31,
        height: 30,
        marginLeft: 16,
    },
    bolsaIMG:{
        width:25,
        height:28,
        marginRight: 16,
    },
    cabeçalhoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 414,
        marginTop: 16,
        justifyContent: 'space-between',
        marginBottom:26,           
    },
    Voltar:{
        fontSize: 30,
        color: global.colors.Azul,
        fontFamily: global.fonts.roboto,
    },
    tituloText:{
        fontFamily: global.fonts.roboto,
        fontSize:24,
        color: global.colors.AzulEscuro,
        fontWeight:'700',
    
    },
    produtoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 382,
        height: 294,
        borderRadius:24,
        backgroundColor:global.colors.Branco,
        marginBottom:25,
        
    
    
    },
    produtoIMG:{
        width: '90%',
        height: '100%',
       
    
    },
    infoConteiner:{
        width: 382,
    
    },
    generoProduto:{
        fontSize:16,
        fontFamily: global.fonts.roboto,
        color:global.colors.Azul,
    },
    tituloProduto:{
        fontSize:24,
        fontFamily: global.fonts.roboto,
        color:global.colors.Preto,
        fontWeight:'bold',
        marginRight:82,
    },
    autorProduto:{
        fontSize:16,
        fontFamily: global.fonts.roboto,
        color:global.colors.Cinza,
    },
    preçoProduto:{
        fontSize:32,
        fontFamily: global.fonts.roboto,
        color:global.colors.Azul,
        fontWeight:'bold',
        marginRight:30,
    },
    verticalConteiner:{
        flexDirection: 'row',
        alignItems: 'center',   
    },
    avaliaçãoValor:{
        fontSize:24,
        fontFamily: global.fonts.roboto,
        color: global.colors.Preto,
    
    },
    estrelasIMG:{
        width:180,
        height:33,
    },
    curtidaIMG:{
        width: 29,
        height: 25,
    },
    
    botãoComprar:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        width:381,
        height:56,
        backgroundColor: global.colors.Azul,
        borderRadius:76,
        marginBottom:10,
    },
    botãoTexto:{
        fontSize:24,
        fontFamily: global.fonts.roboto,
        color: global.colors.Branco,
    
    },
    carrinhoIMG:{
        width:27,
        height:22,
        marginLeft:14,
    },
    descriçãoContainer:{
        
        justifyContent:'center',
        flexDirection: 'column',
    },
    descriçãoSelecionadoContainer:{
        
        justifyContent:'center',
        flexDirection: 'column',
    },
    descriçãoBarra:{
        width:69,
        height:1,
        backgroundColor: global.colors.Azul,
        marginBottom: 10,
    },
    descriçãoTituloText:{
        fontSize:16,
        fontFamily: global.fonts.roboto,
        color:global.colors.Azul,
        marginBottom: 6,
    },
    descriçãoText:{
        fontSize:16,
        fontFamily: global.fonts.roboto,
        color:global.colors.Preto,
        marginBottom: 16,
    },
    perfilConteinier:{
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 16,
    
    },
    perfilIMG:{
        width:36,
        height:36,
        borderRadius:100,
        marginRight:10,
        
    },
    perfilInfoConteinier:{
        justifyContent:'center',
        flexDirection: 'column',
    
    },
    perfilNome:{
        fontSize:14,
        fontFamily: global.fonts.roboto,
        color: global.colors.Preto,
        fontWeight:'600',
        
    },
    perfilLocal:{
        fontSize: 12,
        fontFamily: global.fonts.roboto,
        color: global.colors.AzulClaro,
    
    
    },
    perfilData:{
        fontSize: 12,
        fontFamily: global.fonts.roboto,
        color: global.colors.AzulClaro,
    
    },
    comentarioCampoContainer:{
        justifyContent:'center',
        flexDirection: 'column',
        
    
    },
    comentarioTituloConteiner:{
        alignItems:'center',
        flexDirection: 'row',
        width:381,
    
     },
    
    comentarioTituloText:{
        fontSize:24,
        fontFamily: global.fonts.roboto,
        color: global.colors.Preto,
        fontWeight: 'bold',
        marginBottom: 10,
    },
     comentarioTituloQtd:{
        fontSize:14,
        fontFamily: global.fonts.roboto,
        color: global.colors.Cinza,
        marginBottom: 5,
        marginLeft: 8,
        
    },
    comentarioCampo:{
        flexDirection: 'row',
        alignItems: 'center',
        width:382,
        height: 56,
        borderRadius:20,
        backgroundColor: global.colors.AzulEscuro,
    },
    comentarioInput:{
        fontSize:16,
        fontFamily: global.fonts.roboto,
        color: global.colors.Branco,
        borderColor: 'transparent',
        borderWidth: 1,
        outlineWidth: 0,
        width:280,
    },
    userIMG:{
        width: 36,
        height:36,
        marginHorizontal: 10,
    },
    enviarIMG:{
        width: 27,
        height:24,
        marginHorizontal: 10,
        
    },
    
    
    
    });

    export default styles;
