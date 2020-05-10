import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"

const styles = {
  app: {
    width: '100%'
  }
}

function App() {
  return (
    <div style = {styles.app}>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
