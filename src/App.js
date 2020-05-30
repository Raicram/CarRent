import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Navigation from "./Home/Components/Navbar";
import Home from './Home/index.js';
import Cars from './CarsToRent/Cars/index.js';
import Contact from './Contact/index.js';
import AboutUs from "./AboutUs/index.js";
import UnknownPath from './UknownPath/index.js';
import LogIn from "./LogIn";
import RentForm from "./CarsToRent/CarsForm/Rent";
import Register from "./Register";
import bg2 from './Home/Components/Navbar/Img/bg2.jpg';

const Container = styled.div`
  margin: 0;
  background-image: url(${bg2});
  justify-content: center;
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
                    <Route exact path='/log_in' component={LogIn}/>
                    <Route exact path='/rent/:id' component={RentForm}/>
                    <Route exact path='/register' component={Register}/>
                    <Route component={UnknownPath}/>
                </Switch>
          </Container>
      </Router>
  );
}

export default App;
