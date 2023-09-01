import React, { useState, useEffect } from 'react';
import {Botaoazul, Circulo, Container, Mensagem, Selo, TextoBotao} from './style';
import { useNavigation } from '@react-navigation/native';

export default function Compra() {

    const navigation = useNavigation();

    return (
        <Container>
           <Circulo>
            <Selo source={require('../../../assets/Selo.png')} />
           </Circulo>
           <Mensagem>Parabéns! sua compra foi realizada</Mensagem>
           <Botaoazul>
            <TextoBotao onPress={() => navigation.navigate('Bolsa' as never, {comprar:true, aCompraRealizada:true})}>Voltar ao Carrinho</TextoBotao>

            </Botaoazul>

        </Container>
       
    );
}
