import React from 'react';
import styled from '@emotion/styled';

const ContainerPhrase = styled.div`
  background-color: #FFF;
  border-radius: .5rem;
  max-width: 800px;
  padding: 2rem;
  padding-left: -1rem;
  padding-right: -1rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 4rem;
    position: relative;
    text-align: center;

    &::before {
      color: black;
      content: open-quote;
      font-size: 10rem;
      left: -1rem;
      position: absolute;
      top: -2rem;
    }
  }

  p {
    color: #666;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 2rem;
    text-align: right;
  }
`;

const Phrase = ({frase}) => {
  if(Object.keys(frase).length === 0) return null;

  return (
    <ContainerPhrase>
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </ContainerPhrase>
   );
}

export default Phrase;
