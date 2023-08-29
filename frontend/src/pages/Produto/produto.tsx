import React, { useState } from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape';
import styles from './style';
import Comentario from '../../Componentes/Produto/Comentarios';
import FazerComentario from '../../Componentes/Produto/addComentario';

export default function Produto() {
    const navigation = useNavigation();  
    const [ProdutosData, setProdutosData] = useState([
        {
          id: 1,
          genero: 'Ficção',
          titulo: 'A Revolução dos Bichos',
          autor: 'George Orwell',
          preco: 'R$ 25.98',
          avaliação: 3,
          image: require('../../../assets/LivroIMG.png'),
          favorito: false,
        },
      ]);
    


    return (
        <View style={styles.container}>  
            <View style={styles.cabeçalhoContainer}>     
                <Pressable onPress={() => navigation.navigate('Home')}>
                  <Image source={require('../../../assets/SetaVoltar.png')} style={styles.setaIMG} />
                </Pressable>
                <Text style={styles.tituloText}>Detalhes</Text>
                <Pressable onPress={() => navigation.navigate('Bolsa')}>
                  <Image source={require('../../../assets/Bolsa.png')} style={styles.bolsaIMG} />
                </Pressable>
            </View>

            <View style={styles.produtoContainer}>
                <Image source={require('../../../assets/LivroIMG.png')} style={styles.produtoIMG} />
            </View>
            
            <View style={styles.infoConteiner}>     
                <Text style={styles.generoProduto}>Ficção</Text>
                <View style={styles.verticalConteiner}>
                    <Text style={styles.tituloProduto}>A Revolução dos Bichos</Text>
                </View>
                
                <Text style={styles.autorProduto}>Por George Orwell</Text>
                <View style={styles.verticalConteiner}>
                    <Text style={styles.preçoProduto}>R$ 25.98</Text>
                    <View style={styles.verticalConteiner}> 
                        <Text style={styles.avaliaçãoValor}>5.0</Text>
                        <Image source={require('../../../assets/Estrelas/Estrelas5.png')} style={styles.estrelasIMG} />
                    </View>
                </View>
                
                <View style={styles.perfilConteinier}> 
                    <View style={styles.verticalConteiner}> 
                        <Image source={require('../../../assets/Perfil.png')} style={styles.perfilIMG} />
                        <View style={styles.perfilInfoConteinier}>
                            <Text style={styles.perfilNome}>Roberto França</Text>
                            <Text style={styles.perfilLocal}>São Paulo</Text>
                        </View>
                    </View>
                    <Text style={styles.perfilData}>30 de Ago</Text>
                </View>

                <View style={styles.descriçãoContainer}>  
                    <View style={styles.descriçãoSelecionadoContainer}>
                        <Text style={styles.descriçãoTituloText}>Descrição</Text>
                        <View style={styles.descriçãoBarra}></View>
                    </View>
                    <Text style={styles.descriçãoText}>
                        Lorem ipsum dolor sit amet. Et necessitatibus expedita 
                        qui dolorem ratione ut deserunt aspernatur et repellat 
                        ducimus! Et molestiae voluptas hic iusto voluptatem est 
                        commodi laboriosam sed facilis autem ut laboriosam quae.
                    </Text>
                </View>
            </View>

            <Pressable onPress={() => navigation.navigate('Bolsa')} style={styles.botãoComprar}>
                <Text style={styles.botãoTexto}>Add ao Carrinho</Text>
                <Image source={require('../../../assets/CarrinhoBranco.png')} style={styles.carrinhoIMG} />
            </Pressable>

            <View style={styles.comentarioTituloConteiner}>
                <Text style={styles.comentarioTituloText}>Comentários</Text>
                <Text style={styles.comentarioTituloQtd}>3</Text>
            </View>

            <View style={styles.comentarioCampoContainer}>
                <Comentario/>
                <Comentario/>
                <Comentario/>
            </View>

            <FazerComentario/>

            <View style={styles.rodape}>
                <RodapePagHome/>   
            </View>
        </View>
    );
}
