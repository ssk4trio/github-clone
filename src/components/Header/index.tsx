/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Digite seu úsuario ou Repo..." />
      </SearchForm>
    </Container>
  );
};

export default Header;
