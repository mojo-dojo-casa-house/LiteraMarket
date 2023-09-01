import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Container,IconesConteiner,NãoSelecionado,Home,Fav,Categoria,Bolsa,Clicavel, Selecionado} from './RodapeStyle';


const RodapePagHome = ({ value }) => {
  const navigation = useNavigation();
  
  const [AbaSelecionada] = useState(value); 


  return (
    <Container>
      <IconesConteiner> 
        
        <NãoSelecionado> 

          <Clicavel  onPress={() => navigation.navigate('Home' as never, {value:1})}>
            {AbaSelecionada === 1 ?
            <Selecionado>
            <Home source={require('../../../../assets/HomeIcone.png')} />   
          </Selecionado>
          :<Home source={require('../../../../assets/HomeIcone.png')} /> }
          </Clicavel > 

        </NãoSelecionado>

        <NãoSelecionado > 
          <Clicavel  onPress={() => navigation.navigate('Favoritos' as never)}>
          {AbaSelecionada === 2 ?
            <Selecionado>
            <Fav source={require('../../../../assets/FavIcones.png')}/> 
          </Selecionado>
          :<Fav source={require('../../../../assets/FavIcones.png')}/> }
          </Clicavel > 

        </NãoSelecionado>

        <NãoSelecionado> 
          <Clicavel onPress={() => navigation.navigate('Categorias' as never)}>
          {AbaSelecionada === 3?
            <Selecionado>
            <Categoria source={require('../../../../assets/CategoriasIcone.png')} />
          </Selecionado>
          :<Categoria source={require('../../../../assets/CategoriasIcone.png')} />}
          </Clicavel >
        </NãoSelecionado>

        <NãoSelecionado> 
          <Clicavel onPress={() => navigation.navigate('Bolsa' as never)}>
          {AbaSelecionada === 4?
            <Selecionado>
             <Bolsa source={require('../../../../assets/BolsaIcone.png')} />
          </Selecionado>
          : <Bolsa source={require('../../../../assets/BolsaIcone.png')} />}

           
          </Clicavel>
        </NãoSelecionado>
      </IconesConteiner>
    </Container>
  );
};




export default RodapePagHome;