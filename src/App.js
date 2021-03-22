import React from 'react';
import './css/App.css';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import Projects from './components/Projects';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <Body>
        <Sidebar></Sidebar>
        <Navigation></Navigation>
        <Greetings>
        </Greetings>
        <Projects></Projects>
        <Form></Form>
      </Body>
    </div>

  );
}

export default App;
