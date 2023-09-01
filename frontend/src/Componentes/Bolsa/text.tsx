// ComponenteOrigem.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ComponenteOrigem = ({ onValorSelecionado }) => {
  const [valor, setValor] = useState(1);

  const handleClick = () => {
    // Simula a seleção de um valor
    const valorSelecionado = 'Valor selecionado do ComponenteOrigem';
    setValor(valorSelecionado);

    // Chama a função callback para passar o valor para a página
    onValorSelecionado(valorSelecionado);
  };

  return (
    <View>
      <Text>ComponenteOrigem</Text>
      <Button title="Selecionar Valor" onPress={handleClick} />
      <Text>Valor: {valor}</Text>
    </View>
  );
};

export default ComponenteOrigem;
