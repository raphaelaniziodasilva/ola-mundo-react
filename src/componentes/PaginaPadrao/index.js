import Banner from 'componentes/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
    <main>
        <Banner />

        {/* Outlet = serve para renderizar o conteúdo das rotas */}
        <Outlet />
    </main>
  )
}

// agora importe o PaginaPadrao no arquivo AppRoutes.js e dentro adicione as Routes que vai ter o banner