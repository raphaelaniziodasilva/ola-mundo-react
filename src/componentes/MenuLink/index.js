import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

// vamos criar props children para receber o nome do link e to que vai indicar o caminho
export default function MenuLink({ children, to }) {

    return (
      /* <NavLink> vai subestituir a tag <a> e to='' end vai subestituir o href
      vai evitar o recarregamento da pagina do navegador quando for mudar de pagina */
        <NavLink
            className={({ isActive }) => `
                ${styles.link}

                // deixando o link sublinhado na pagina correspondente
                ${isActive ? styles.linkDestacado : ""}
            `}
            // vamos subestituir to='/' = pela props to = to={to} end> 
            to={to} end
        >
          {/* vamos subestituir o nome do link pela props children */}
          {children}

        </NavLink>
    )
}


// agora importe o MenuLink no arquivo Menu.js e utilize para criar os links