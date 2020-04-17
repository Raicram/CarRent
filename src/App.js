import React from 'react';
import styled from 'styled-components';
import Navigation from "./Home/Components/Navbar";
import MainContent from "./Home/Components/MainContent";
import Reasons from './Home/Components/Reasons';
import Opinion from "./Home/Components/ClientsOpinion";
import SeeCars from './Home/Components/SeeCars'

const Container = styled.div`
  margin: 0;

  background-color: #eaeaea;
`;

function App() {
  return (
      <Container className="App">
        <Navigation/>
        <MainContent/>
        <Reasons/>
        <Opinion/>
        <SeeCars/>
      </Container>
  );
}

export default App;
