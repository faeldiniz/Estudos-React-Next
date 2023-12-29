/*
--Solução erro Falied to compile (Elementos adjacentes)
--1º Solução colocar em uma div
--2º Solução abrir chaves e fechar com "React.Fragment"

*/

import React from 'react'
export default function fragment() {
    return(
/*        <div>
            <h1>Título</h1>
            <h2>Subtítulo</h2>

        </div>
 */       
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>

        )
}