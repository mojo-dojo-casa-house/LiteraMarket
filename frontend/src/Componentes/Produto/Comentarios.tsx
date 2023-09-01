import React from 'react';
import {ComentarioContainer,Container, UserIMG,PerfilIMG,ComentarioCampoContainer,ComentarioCampo,ComentarioCampoTexto,ComentarioData,ComentarioEstrelasIMG,ComentarioNome,ComentarioNumText,ComentarioTituloText,ComentarioUserConteiner,ComentarioUsuario,ComentarioVerticalConteinier} from './ComentariosStyle';

const Comentario = () => {
  return (
   <Container>
    <ComentarioCampoContainer>
      <ComentarioContainer>
        <ComentarioUserConteiner>
          <UserIMG>
            <PerfilIMG source={require('../../../assets/Visitante.png')} />
          </UserIMG>
          <ComentarioVerticalConteinier>
            <ComentarioNome>João da Silva</ComentarioNome>
            <ComentarioEstrelasIMG source={require('../../../assets/Estrelas/Estrelas5.png')} />
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

    <ComentarioCampoContainer>
    <ComentarioContainer>
      <ComentarioUserConteiner>
        <UserIMG>
          <PerfilIMG source={require('../../../assets/Visitante.png')} />
        </UserIMG>
        <ComentarioVerticalConteinier>
          <ComentarioNome>Sophia Evergreen</ComentarioNome>
          <ComentarioEstrelasIMG source={require('../../../assets/Estrelas/Estrelas5.png')} />
        </ComentarioVerticalConteinier>
        <ComentarioData>36 min atrás</ComentarioData>
      </ComentarioUserConteiner>

      <ComentarioCampo>
        <ComentarioCampoTexto>
        "Acabei de devorar 'Tudo pelo meu pai. Uma narrativa envolvente que me 
        transportou para um universo cativante. Adorei as reviravoltas e a profundidade 
        dos personagens. Mal posso esperar pelo próximo livro!"
        </ComentarioCampoTexto>
      </ComentarioCampo>
    </ComentarioContainer>
  </ComentarioCampoContainer>
  </Container>
);
}




export default Comentario;
