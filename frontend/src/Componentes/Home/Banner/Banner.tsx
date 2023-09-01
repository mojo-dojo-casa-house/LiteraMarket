import React, { useState, useEffect } from 'react';
import {Container,ContainerBanner,BannerPrimario,BannerSecundario,BotaoBarraDireita,BotaoBarraEsquerda,SetaIMG, Clicavel} from './BannerStyle';


const Banner = () => {
    const [bannerIndex, setBannerIndex] = useState(0);
    const [BotaoVisivelEsquerda, setBotaoVisivelEsquerda] = useState(false);
    const [BotaoVisivelDireita, setBotaoVisivelDireita] = useState(false);

    const banners = [
        require('../../../../assets/Banner1.png'),
        require('../../../../assets/Banner3.png'),
        
    ];
// Banner mudando automaticamente a cada 9 seg
    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex((Index) => (Index + 1) % banners.length);}, 9000);
        return () => clearInterval(interval);
    }, []);

// Botão Esquerdo para Mudar Banner
    const changeBannerEsquerda = () => {
        setBannerIndex((Index) => (Index - 1 + banners.length) % banners.length);
        setBotaoVisivelEsquerda(true);
    };

// Botão Direito para Mudar Banner
    const changeBannerDireita = () => {
        setBannerIndex((Index) => (Index + 1) % banners.length);
        setBotaoVisivelDireita(true);    
    };

    return (
        <Container>
      <ContainerBanner>
    

        <Clicavel onPress={changeBannerEsquerda}>
          <BannerPrimario source={banners[bannerIndex]} />
        </Clicavel>

        <BotaoBarraEsquerda onPress={changeBannerEsquerda}>
          <SetaIMG source={require('../../../../assets/SetaEsquerda.png')} />
        </BotaoBarraEsquerda>

        <BotaoBarraDireita onPress={changeBannerDireita}>
          <SetaIMG source={require('../../../../assets/SetaDireita.png')} />
        </BotaoBarraDireita>

      </ContainerBanner>

      <Clicavel>
        <BannerSecundario source={require('../../../../assets/Banner2.png')} />
      </Clicavel>
    </Container>
    );
}

export default Banner;
