import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

/* vamos criar o componente Menu de navegaçao que vai nos permitir mostrar o menu em todas as tela */
export default function Menu() {
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink
                // passando a props children e setando o nome do link
                children={'Inicío'}

                // passando a props to e setando o caminho http://localhost:3000/ = pagina Inicio
                to='/'
            />
            <MenuLink
                // passando a props children e setando o nome do link
                children={'Sobre Mim'}

                // passando a props to e setando o caminho http://localhost:3000/sobremim = pagina SobreMim 
                to='/sobremim'
            />
        </nav>
    </header>
  )
}

// agora importe o Menu de navegaçao no arquivo routes.js antes de <Routes>