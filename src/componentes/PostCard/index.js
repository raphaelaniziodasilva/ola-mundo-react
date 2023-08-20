import React from 'react'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

// vamos criar props post
export default function PostCard({post}) {
  return (
    // usando a props post para indicando o caminho dinamico do id
    <Link to={`/post/${post.id}`}>
      {/* agora volte para a pagina Post */}

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

      <BotaoPrincipal>
        {/* utilizando a props children do botao para dar nome ao botao */}
        Ler
      </BotaoPrincipal>
    </div>
    </Link>
  )
}

// agora importe o PostCard na pagina inicio no arquivo index.js e utilize para criar os cards de posts
