import React from "react";
import styled from 'styled-components';
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherTable from "./WeatherTable";

const Hr = styled.hr`
  color: var(--text-primary);
`;


function App() {
  return (
    <>
      <Header />
      <SearchBar /> 
      <Hr />
      <WeatherTable />
      <GlobalStyles />
    </>
  );
}

export default App;
