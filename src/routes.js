// vamos instalar o react router dom versao 6 - npm install react-router-dom@6
// o react router dom vai nos permitir navegar entre as rotas da aplicaçao ou seja entre as paginas através do seu caminho

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollTopTop";

function AppRoutes() {
  return (
    // o BrowserRouter e um componente que vai nos permitir utilizar alguns componentes do react router dom para ter um sistemas de rotas
    <BrowserRouter>
    
      <ScrollToTop />

      {/* o Menu de navegaçao vai ser o componente que vai nos permitir mostrar o menu em todas as tela */}
      <Menu />

      {/* o Routes vai ser o nosso roteador ele que vai decidir qual e a rota que vai mostrar na tela  */}
      <Routes>

        {/* essa Route vai mostrar a PaginaPadrao aonde nela contem o banner
        dentro dessa Route vamos colocar as paginas que contém o banner */}
        <Route path="/" element={<PaginaPadrao />}>

          {/* dentro do Route vamos colocar as informaçoes da rota path="/" = caminho, element={} = vai mostrar uma pagina especifica
          http://localhost:3000/ = pagina Inicio */}
          <Route index element={<Inicio />} />

          {/* http://localhost:3000/sobremim = pagina SobreMim */}
          <Route path="sobremim" element={<SobreMim />} />

        </Route>

        {/* http://localhost:3000/post/id = pagina Post que tem o id definido*/}
        <Route path="post/:id" element={<Post />} />
        {/* com a rota Post fora da Route que contem o banner PaginaPadrao, vamos resolver esse problema va para a pagina Post */}

        {/* http://localhost:3000/xxxwewf = quando nao conseguir indetificar o caminho da route
        o * funciona como um servidor coringa do react router dom, essa rota com * ela e selecionando quando o caminho nao e identificado  */}
        <Route path="*" element={<NaoEncontrada />} />

      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;