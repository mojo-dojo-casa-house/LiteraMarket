import React, { useState, useEffect } from 'react';
import styles from './BannerStyle';
import { Image, View, Pressable } from 'react-native';

const Banner = () => {
    const [bannerIndex, setBannerIndex] = useState(0);
    const [BotaoVisivelEsquerda, setBotaoVisivelEsquerda] = useState(false);
    const [BotaoVisivelDireita, setBotaoVisivelDireita] = useState(false);

    const banners = [
        require('../../../assets/Banner1.png'),
        require('../../../assets/Banner3.png'),
        
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
        setTimeout(() => { setBotaoVisivelEsquerda(false); }, 600);
    };

// Botão Direito para Mudar Banner
    const changeBannerDireita = () => {
        setBannerIndex((Index) => (Index + 1) % banners.length);
        setBotaoVisivelDireita(true);
        setTimeout(() => { setBotaoVisivelDireita(false); }, 600);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerBanner}>
                <View>
                    <View></View>
                    <View></View>
                    <View></View>
                    </View>

                    <Pressable onPress={changeBannerEsquerda}>
                    <Image source={banners[bannerIndex]} style={styles.BannerPrimario} />
                </Pressable>

                <Pressable
                    style={[styles.BotaoBarraEsquerda, BotaoVisivelEsquerda && styles.BotaoBarraEsquerdaVisivel]}
                    onPress={changeBannerEsquerda}
                >
                    <Image source={require('../../../assets/SetaEsquerda.png')} style={styles.SetaIMG} />
                </Pressable>
                <Pressable
                    style={[styles.BotaoBarraDireita, BotaoVisivelDireita && styles.BotaoBarraDireitaVisivel]}
                    onPress={changeBannerDireita}
                >
                    <Image source={require('../../../assets/SetaDireita.png')} style={styles.SetaIMG} />
                </Pressable>

            </View>

            <Pressable>
                <Image source={require('../../../assets/Banner2.png')} style={styles.BannerSecundario} />
            </Pressable>
        </View>
    );
}

export default Banner;
