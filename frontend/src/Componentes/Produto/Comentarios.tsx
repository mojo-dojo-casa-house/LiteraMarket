import React from 'react';
import {ComentarioContainer,UserIMG,PerfilIMG,ComentarioCampoContainer,ComentarioCampo,ComentarioCampoTexto,ComentarioData,ComentarioEstrelasIMG,ComentarioNome,ComentarioNumText,ComentarioTituloText,ComentarioUserConteiner,ComentarioUsuario,ComentarioVerticalConteinier} from './ComentariosStyle';

const Comentario = () => {
  return (
   
    <ComentarioCampoContainer>
      <ComentarioContainer>
        <ComentarioUserConteiner>
          <UserIMG>
            <PerfilIMG source={require('../../../assets/Visitante.png')} />
          </UserIMG>
          <ComentarioVerticalConteinier>
            <ComentarioNome>João da Silva</ComentarioNome>
            <ComentarioEstrelasIMG source={require('../../../assets/Estrelas/Estrelas4.png')} />
          </ComentarioVerticalConteinier>
          <ComentarioData>1 hora Atrás</ComentarioData>
        </ComentarioUserConteiner>

        <ComentarioCampo>
          <ComentarioCampoTexto>
            Impossível não ficar impressionado com 'Tudo pelo meu pai' de Roberto. 
            Fiquei totalmente absorvido pela trama e pelos dilemas dos personagens.
            Uma leitura que expandiu meus horizontes.
          </ComentarioCampoTexto>
        </ComentarioCampo>
      </ComentarioContainer>
    </ComentarioCampoContainer>
);
}




export default Comentario;
