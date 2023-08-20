import React from 'react'
import styles from './NaoEncontrada.module.css'
import error404 from 'assets/erro_404.png'
import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {
    /*
     funcionalidade de voltar para a pagina anterior 
     useNavigate() é um hook que permite navegar entre diferentes rotas dentro de uma aplicação web sem a necessidade de recarregar a página
    */
    const navegar = useNavigate()

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

            <div 
                className={styles.botaoContainer}
                
                // funcionalidade de voltar para a pagina anterior utilizando onClick para voltar para a pagina anterior
                onClick={() => navegar(-1)}
            >
                <BotaoPrincipal
                    // utilizando a props tamanho para aumentar o tamanho do botao
                    tamanho="lg"
                > 
                    Voltar 
                </BotaoPrincipal>
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