import React from 'react'
import styles from './NaoEncontrada.module.css'
import error404 from 'assets/erro_404.png'

export default function NaoEncontrada() {
  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404 
            </span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className={styles.botaoContainer}>
                <button> Voltar </button>
            </div>

            <img
                className={styles.imagemCachorro}
                src={error404}
                alt='Cachorro de óculos e vestido como humano'
            />
        </div>

        <div className={styles.espacoEmBranco}></div>        
    </>
  )
}

// agora importe a pagina NaoEncontrada no arquivo routes.js dentro de <Routes> adicione a rota da pagina NaoEncontrada na <Route path="*">