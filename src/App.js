import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Components/Topbar';
import NavbarNav from './Components/NavbarNav';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <NavbarNav/>
      <Footer/>
    </div>
  );
}

export default App;
