import styled from 'styled-components';
import { Search } from '@styled-icons/heroicons-outline';


export const Container = styled.div`
  padding: 0 2rem;
  margin: 2rem 0 6rem 0;
`;

export const InputContainer = styled.div`
  /* width: 100%; */
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 1.2rem;
  width: 100%;
  font-size: 1.8rem;
  border: 0.1rem solid var(--bg-primary);
`;

export const SearchButton = styled.button`
    background: transparent;
    outline: 0;
    border: none;

    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
`;

export const SearchIcon = styled(Search)`
    width: 35px;
    height: 35px;

    cursor: pointer;
`;
