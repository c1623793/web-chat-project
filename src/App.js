import React, { useEffect } from "react";
import './css/App.css';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <body className="body" data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <Sidebar></Sidebar>
      <Navigation></Navigation>
      <Greetings>
      </Greetings>
      <Projects></Projects>
    </body>

  );
}

export default App;
