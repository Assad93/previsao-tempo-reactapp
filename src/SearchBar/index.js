import React from 'react';

import { Container, InputContainer , SearchInput, SearchButton ,SearchIcon } from './styles';

function SearchBar() {
  return (
      <Container>
          <form>
              <InputContainer>
                <SearchInput  placeholder="Insira aqui o nome da cidade"/>
                <SearchButton>
                    <SearchIcon />
                </SearchButton>
              </InputContainer>
          </form>
      </Container>
  );
}

export default SearchBar;