import React from 'react';
import { Header, Home, Modal, Popcorn, Separate, Tendances, More, Foire } from '../components/extraFiles';
import BgNetflix from '../assets/BgNetflix.jpg';

const HomePage = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgNetflix})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <div className="overflow-hidden">
        <Header />
        </div>
        <Home />
      </section>
      <Separate />
      <Popcorn />
      <Tendances />
      <Modal />
      <More />
      <Foire />
    </div>
  )
}

export default HomePage
