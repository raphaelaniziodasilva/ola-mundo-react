import React from 'react'
import styles from './BotaoPrincipal.module.css'

// criando props
export default function BotaoPrincipal({children, tamanho}) {
  return (
    <button className={`
        ${styles.botaoPrincipal}

        // vamos utilizar a props tamanho para usar no botao que ira ser maior para aumentar o tamanho do botao
        ${styles[tamanho]}
        
    `}>
        {/* vamos subestituir o nome do botao pela props children */}
        {children}
    </button>
  )
}

// agora importe BotaoPrincipal no componente PostCard e depois na pagina NaoEncontrada 