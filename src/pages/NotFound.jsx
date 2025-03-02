import React from 'react';
import BgNotFound from '../assets/bgNotFound.jpg';
import LogoNetflix from '../assets/logoNetflix.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    function handleLogo() {
        navigate('/')
    }

    return (
        <main style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BgNotFound})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}>
            <header className="flex justify-between items-center w-full px-30 py-2">
                <img onClick={handleLogo} className="w-32 md:w-40 lg:w-46 cursor-pointer" src={LogoNetflix} alt="Netflix Logo" />
            </header>
            <div className="text-center p-20">
            <h1 className="text-6xl text-white mb-8">Lost your way ?</h1>
            <p className="text-2xl text-white mb-8">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
            <button onClick={handleLogo} className="mb-8 text-black bg-white cursor-pointer px-5 py-2 rounded-sm hover:bg-white/80">Netflix Home</button>
            <div className="p-5 border-left-2 border-left-red-600">
                <p className="text-white text-xl">Error Code <span className="text-white text-xl font-bold">NSES-404</span></p>
            </div>
            </div>
        </main>
    )
}

export default NotFound
