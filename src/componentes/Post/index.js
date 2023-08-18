import React from 'react'
import styles from './Post.module.css'

// vamos criar props post para setar no img
export default function Post({post}) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        // usando a props post para indicando o caminho dinamico da foto que esta arquivo posts.json
        src={post.path}
        alt={post.titulo}
      />

      <h2 className={styles.titulo}>
       {/* usando a props post para indicar o titulo da foto que esta arquivo posts.json */}
        {post.titulo}
      </h2>

      <button className={styles.botaoLer}> Ler </button>
    </div>
  )
}

// agora importe o Post na pasta inicio no arquivo index.js e utilize para criar os cards de posts
