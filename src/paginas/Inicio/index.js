import React from 'react'
/*
 Existe uma configuraçao no react que nos     facilita fazer os imports mais diretos a partir  da pasta src
 para fazer essa configuraçao va na raiz do projeto e crie um arquivo chamado jsconfig.json
 reinicie a aplicaçao para a configuracao funcionar
*/
import styles from './Inicio.module.css'
// importando um array de objeto aonde contem informaçoes dos posts
import posts from './posts.json'
import PostCard from 'componentes/PostCard'

export default function Inicio() {
  return (
    // vamos criar uma lista de posts na pagina inicio 
    <ul className={styles.posts}>

      {/* vamos fazer uma iteracao do array de posts.json que vai retornar uma li */}
      {posts.map((post) => (

        // vamos usar o key para identificar cada post pelo id
        <li key={post.id}>

          {/* agora precisamos criar os cards do posts, vamos criar um componente Post para a criaçao dos cards */}

          <PostCard
            // passando a props post e setando o parametro post do metodo map para fazer uma iteracao do array
            post={post}
          />
        </li>
      ))}
    </ul>
  )
}

// agora importe a pagina Inicio no arquivo routes.js dentro de <Routes> adicione a rota da pagina Inicio dentro da <Route path="/" element={<PaginaPadrao />}> que e a pagina pai