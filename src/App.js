import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Phrase from './componets/Phrase';
import Logo from './componets/Logo';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
 background-size: 300px;
 background: linear-gradient(to left, #007D35 0%, #007D35 40%, #0F574E 100%);
 border: 2px solid black;
 color: #FFF;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 2rem;
 margin-top: 3rem;
 margin-bottom: 3rem;
 padding: 1rem 3rem;
 transition: font-size .3s ease;

 &:hover {
   cursor:pointer;
   font-size: 2.2rem;
 }
`;

function App() {
  //State para obtener la frase
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  //cargar una frase
  useEffect( () => {
    consultarAPI()
  },[]);

  return (
    <Contenedor>

      <Logo />

      <Phrase
        frase = {frase}
      />
      <Boton
        onClick = {consultarAPI}
      >Get Phrase</Boton>
    </Contenedor>
  );
}

export default App;
