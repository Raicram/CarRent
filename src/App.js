import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Navigation from "./Home/Components/Navbar";
import Home from './Home/index.js';
import Cars from './CarsToRent/Cars/index.js';
import Contact from './Contact/index.js';
import AboutUs from "./AboutUs/index.js";
import UnknownPath from './UknownPath/index.js';

const Container = styled.div`
  margin: 0;
  background-color: #eaeaea;
`;

function App() {
  return (
      <Router>
          <Container className="App">
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cars' component={Cars}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/about_us' component={AboutUs}/>
                    <Route component={UnknownPath}/>
                </Switch>
          </Container>
      </Router>
  );
}

export default App;
