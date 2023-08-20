import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// esse componente vai servir para quando mudar de pagina a pagina sempre aparecera no topo ou seja inicio
export default function ScrollToTop() {
    const { pathname } = useLocation();

    // vamos usar useEffect, executa uma funçao quando acontece alguma mudança
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// agora importe o componente ScrollToTop no arquivo routes.js