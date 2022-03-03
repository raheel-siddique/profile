import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Work from './components/expeirence/Work';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
     <Header />

     <div className='sections'>
       <About />
       <Services />
       <Work />
      <Contact />

       {/* heres is alls ections */}

     </div>

    </div>
  );
}

export default App;
