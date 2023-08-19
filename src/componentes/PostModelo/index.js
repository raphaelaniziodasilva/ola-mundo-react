import React from 'react'
import styles from './PostModelo.module.css'

// vamos criar props
export default function PostModelo({fotoCapa, titulo, children}) {
  return (
    <article className={styles.postModeloContainer}>
        <div
            className={styles.fotoCapa}
            
            // vamos colocar uma imagem de fundo atras do titulo, passando a url da imagem que vai ser a proprs fotoCapa
            style={{backgroundImage: `url(${fotoCapa})`}}
        > </div>

        <h2 className={styles.titulo}>
            {/* vamos subestituir o titulo pela props titulo */}
            {titulo}
        </h2>

        {/* aqui aonde vai ficar o conteudo */}
        <div className={styles.postConteudoContainer}>
            {children}
        </div>
    </article>
  )
}

// agora importe o PostTitulo na pasta SobreMim no arquivo index.js e utilize para criar o titulo