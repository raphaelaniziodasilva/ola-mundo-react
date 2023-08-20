import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import posts from '../Inicio/posts.json'
import PostModelo from 'componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NaoEncontrada from 'paginas/NaoEncontrada'
import PaginaPadrao from 'componentes/PaginaPadrao'
import styles from './Post.module.css'
import PostCard from 'componentes/PostCard'

export default function Post() {
  /* 
   useParams = hook que é usado para acessar os parâmetros da URL presentes em um componente dentro de uma rota específica.
   Quando você está construindo uma aplicação web com várias rotas (páginas), pode haver momentos em que deseja passar informações específicas pela URL para que uma página saiba qual conteúdo exibir ou qual item está sendo acessado.
   O useParams() permite que você acesse esses parâmetros diretamente em um componente de uma rota, retorna um objeto com os valores dos parâmetros presentes na URL. 
  */
  const parametros = useParams()
  // va para o componente PostCard e transforme em link

  /*
   agora nos precisamos da lista: array de objetos que esta na pagina Inicio no arquivo posts.json aonde contém todas as informaçoes dos posts
   vamos utilizar o metodo find para procurar pelo id do post que vai retornar true or false
  */
  const post = posts.find((post) => {

    // comparando o id de cada objeto do array posts com o o da variável parametros.id se for true vai retornar o objeto
    return post.id === Number(parametros.id)
  })
  
  // se o parametro id não for encontrado vai retornar um erro
  if(!post) {
    // return <h1>Pagina: Post não encontrado</h1>
    return <NaoEncontrada />
  }

  // filtrando os posts mais recomendados
  const postsRecomendados = posts
  .filter((post) => post.id !== Number(parametros.id))
  .sort((a, b) => b.id - a.id)
  .slice(0, 4)
  // imprima la embaixo no PostModelo


  return (
    // resolvendo o problema da rota Post que esta fora da Route que contem o banner
    <Routes>

      {/* adicionando a PaginaPadrao aonde nela contem o banner */}      
      <Route path='*' element={<PaginaPadrao />}>

        {/* esse Route vai renderizar o jsx de um post encontrado */}
        <Route index element={
          <PostModelo
            // usando a props fotoCapa e passando o parametro post do metodo filter para pegar o id da foto que esta na lista: array de objetos na pagina Inicio no arquivo posts.json  
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
      
            // usando a props titulo e passando o parametro post do metodo filter para pegar o titulo que esta na lista: array de objetos na pagina Inicio no arquivo posts.json
            titulo={post.titulo}
          >
            {/* vamos instalar a bliblioteca de Markdown: npm install react-markdown
            essa bliblioteca de markdown vai nos ajudar a transformar o texto escrito em markdown em uma linguagem do html que vai ser renderizado de forma dinamica*/}
            <div className='post-markdown-container'>
    
              {/* utilizando a bliblioteca de react-markdown */}
              <ReactMarkdown>
      
                {/* usando o parametro post do metodo filter para pegar o texto que esta   inscrito em Markdown na pagina Inicio no arquivo posts.json */}
                {post.texto}
              </ReactMarkdown>
            </div>

            {/* posts recomendados */}
            <h2 className={styles.tituloOutrosPosts}>
              Outros posts que você pode gostar:
            </h2>

            {/* posts recomendados */}
            <ul className={styles.postsRecomendados}>
              {postsRecomendados.map((post) => (
                <li key={post.id}>
                  <PostCard
                    post={post}
                  />
                </li>
              ))}
            </ul>
    
          </PostModelo>
        } />

      </Route>
    </Routes>
  )
}

// agora importe a pagina Post no arquivo routes.js dentro de <Routes> adicione a rota da pagina Post dentro da <Route path="/" element={<PaginaPadrao />}> que e a pagina pai