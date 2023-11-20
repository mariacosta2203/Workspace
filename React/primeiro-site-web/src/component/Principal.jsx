import React from "react";
import imagem from '../imagens/raya.jpeg'

let estilo = {fontSizer: '2rem', color: 'purple', backgroundColor: 'orange'}

const principalPrimeiro = () => {
    return(
        <>
            <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>

            <ul>
                <li>Frozen: Uma aventura Congelante</li>
                <li>Raya e o último dragão</li>
                <li>Encanto</li>
                <li>Moana: Um mar de aventura</li>
                <li>Homem-Aranha no Aranhaverso</li>
            </ul>

            <img src={imagem} />
        
        </>
    );
};

export default principalPrimeiro;