import React from 'react';
import {ComentarioContainer,ComentarioHorizontalContainer,ComentarioInput,ComentarioVerticalContainer,UserIMG,PerfilIMG,EnviarBotão,EnviarIMG} from './addComentarioStyle';
import Avaliação from './Avaliação';






const FazerComentario = () => {
  return (
    <ComentarioContainer>
      <ComentarioHorizontalContainer>
        <UserIMG>
          <PerfilIMG source={require('../../../assets/Visitante.png')} />
        </UserIMG>
        
        <Avaliação/>
        </ComentarioHorizontalContainer>
      <ComentarioVerticalContainer>
        
        <ComentarioInput placeholder="Adicione um Comentário..." maxLength={200} multiline={true} onChangeText={text => console.log(text)} />
      </ComentarioVerticalContainer>
      <EnviarBotão>
        <EnviarIMG source={require('../../../assets/Enviar.png')} />
      </EnviarBotão>
    </ComentarioContainer>
);
}



export default FazerComentario;
