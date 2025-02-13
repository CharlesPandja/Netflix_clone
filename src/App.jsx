import React from 'react';
import Header from './components/Header.jsx';
import BgNetflix from './assets/BgNetflix.jpg';
import Home from './components/Home.jsx';
import Popcorn from './components/Popcorn.jsx';
import Separate from './components/Separate.jsx';
import Tendances from './components/Tendances.jsx';
import Modal from './components/Modal.jsx';

const App = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BgNetflix})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Home />
      </section>
      <Separate />
      <Popcorn />
      <Tendances />
      <Modal />
    </>
  );
};

export default App;
