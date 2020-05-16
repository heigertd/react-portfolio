import React from 'react';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact"

const styles = {
  app: {
    // margin: '0px 100px', 
    width: '100%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Ubuntu, sans-serif'
  },

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
