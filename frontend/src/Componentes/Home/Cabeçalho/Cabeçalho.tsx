import React from 'react';
import {Circulo,Clicavel, Conteiner,Menu,LogoContainer,Perfil,PerfilIMG,Logo} from './CabaçalhoStyle';

const Cabecalho= ({onPerfilClick, onMenuClick}) => {
  return (
    <Conteiner>
      <Menu onPress={onMenuClick}>
        <Circulo></Circulo>
        <Circulo></Circulo>
        <Circulo></Circulo>
      </Menu>

      <LogoContainer>
        <Logo source={require('../../../../assets/LogoMINI.png')} />
      </LogoContainer>

      <Clicavel onPress={onPerfilClick}>
        <Perfil>
          <PerfilIMG source={require('../../../../assets/Visitante.png')} />
        </Perfil>
      </Clicavel>
    </Conteiner>
  );
};



export default Cabecalho;
