import React from 'react';
import {Conteiner,BuscaIcon,BuscaIconConteiner,BuscaInput} from './BarraPesquisaStyle';


const BarraPesquisa = () => {
  return (
    <Conteiner>
      <BuscaIconConteiner>
        <BuscaIcon source={require('../../../../assets/IconeBusca.png')} />
      </BuscaIconConteiner>
      <BuscaInput placeholder="Busca..." onChangeText={text => console.log(text)} />
    </Conteiner>
  );
};



export default BarraPesquisa;
