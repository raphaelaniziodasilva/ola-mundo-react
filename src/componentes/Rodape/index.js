import React from 'react'
import styles from './Rpdape.module.css'
/*
 transformando o svg em um componente
 é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.
*/
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

// vamos criar o rodape que vai aparecer em todas as paginas
export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />

        Desenvolvido por Raphael ;)
    </footer>
  )
}

// importe o Rodape no arquivo AppRoutes.js e o rodape irar aparecer em todas as paginas 