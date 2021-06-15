import React from 'react';
import imagelogo from '../logo.svg';
import styled from '@emotion/styled';

const Logo = () => {

  const ContainerLogo = styled.div`
    background-image: url(${imagelogo});
    width: 350px;
    height: 208px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 3rem;
  `;

  return (
    <ContainerLogo> </ContainerLogo>
   );
}

export default Logo;
