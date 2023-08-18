import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
  return(
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá Mundo
            </h1>
            <p className={styles.paragrafo}>
                Boas vindas pessoal! Eu sou Raphael Anizio. Desenvolvedor Back-end e no momento estou aprendendo React pois aprendizado nunca e demais :)
            </p>
        </div>      
        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido}
                alt="circulo colorido"
                aria-hidden={true}
            />
            <img    
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="foto do raphael"
            />
        </div>
    </div>
  )
}

// vamos criar um componente chamado PaginaPadrao que vai guardar a estrutura do banner para usarmos no AppRoutes
