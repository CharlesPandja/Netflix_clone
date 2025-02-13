import React from 'react';
import BgNetflix from './assets/BgNetflix.jpg';
import { Header, Home, Modal, Popcorn, Separate, Tendances, More } from './components/extraFiles';

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
      <More />
    </>
  );
};

export default App;
