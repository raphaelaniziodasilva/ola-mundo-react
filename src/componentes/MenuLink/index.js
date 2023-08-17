import React from 'react'
import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

// vamos criar props children e to
export default function MenuLink({children, to}) {
    
    // vamos implementar um detalhe para deixar o link sublinhado quando estamos na pagina correspondente

    // o useLocation() e um hook do react router dom que vai retornar um objeto que contem a informação da localização
    const localizacao = useLocation()

  return (
    /* <Link> vai subestituir a tag <a> e to='' sutbstitui o href
    vai evitar o recarregamento da pagina do navegador quando for mudar, fazendo se sentir em uma aplicaçao desktop */
    <Link className={`
        ${styles.link}

        /* 
         deixando o link sublinhado na pagina correspondente
         o pathname vai retornar o caminho atual, ?:se for verdadeiro vai aplicar o styles.linkDestacado que vai deixar o link sublinhado se for falso vai aplicar nada

         localizacao.pathname === '/' ? styles.linkDestacado : ""

         vamos subestituir '/' = pela props to
        */

        ${localizacao.pathname === to ? styles.linkDestacado : ""}

        vamos subestituir to='/' = pela props to = to={to}>
    `} to={to}>

        {/* vamos subestituir o nome do link pela props children */}
        {children}
    </Link>
  )
}

// agora importe o MenuLink no arquivo Menu.js e utilize para criar os links