 import React from "react";

 let estilo = {listStyle: 'none', color: 'blueviolet', fontSize: '60px', textAlign: 'center'}

 const socorroTocolo = () => {
    return(
        <>
            <h1 style={estilo}>Sexta-feira depressão</h1>
            <p>Metade vai reprovar</p>  
            <ul style={estilo}>
                <li>Maria Eduarda</li>
                <li>Anna Clara</li>
                <li>Leandro Jun</li>
                <li>O restante da sala</li>
            </ul>
        </>
    )
 }

 export default socorroTocolo;