import React from 'react'
/*
 Existe uma configuraçao no react que nos     facilita fazer os imports mais diretos a partir  da pasta src
 para fazer essa configuraçao va na raiz do projeto e crie um arquivo chamado jsconfig.json
 reinicie a aplicaçao para a configuracao funcionar
*/
import Banner from 'componentes/Banner'

export default function Inicio() {
  return (
    <main>
      <Banner />

      <h1>Inicio</h1>
    </main>
  )
}
