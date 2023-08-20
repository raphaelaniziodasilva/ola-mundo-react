import PostModelo from 'componentes/PostModelo'
import React from 'react'
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {
  return (
    // precisamos criar o titulo da pagina e o conteudo, vamos criar um componente chamado PostModelo para o titulo pois o titulo ele pode ser diferente em outras paginas
    <PostModelo
      // passando a props fotoCapa e setando a imagem de fundo
      fotoCapa={fotoCapa}

      // passando a props titulo e setando o nome do titulo
      titulo="Sobre mim"

    >
      {/* aqui aonde vai ficar o conteudo da props children */}

      <h3 className={styles.subtitulo}>
        Olá, eu sou Raphael Anizio
      </h3>

      <img
        src={fotoSobreMim}
        alt='Foto do Raphael'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou Desenvolvedor de Back-end é ao mesmo tempo estudante estou feliz de te ver por aqui. 
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou quando eu decidi me tornar um programador, quando fiz o bootcamp de Desenvolvedor web Full Stack da Gama Academy. Eu aprendi lógica de programação e o básico de várias linguagens, como JavaScirpt, TypeScipt, Node.Js, me aprofundando um pouco em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje. 
      </p>
      <p className={styles.paragrafo}>
        Hoje estou cursando Análise e Desenvolvimento de Sistemas - Faculdade de Informática e Administração Paulista (FIAP). 
      </p>

    </PostModelo>
  )
}

// agora importe a pagina SobreMim no arquivo routes.js dentro de <Routes> adicione a rota da pagina SobreMim dentro da <Route path="/" element={<PaginaPadrao />}> que e a pagina pai