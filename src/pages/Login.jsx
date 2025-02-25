import React from 'react';
import LogoNutflix from '../assets/logoNutflix.png';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm.jsx';
import BgNetflix from '../assets/BackgroundNetflix.jpg';

const Login = () => {
    const navigate = useNavigate();
    function handleLogo() {
        navigate('/')
    }

    return (
        <main style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BgNetflix})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}>
            <header className="flex justify-between items-center w-full px-5 py-2 md:px-10 lg:px-30">
                <img onClick={handleLogo} className="w-32 mt-10 md:w-40 lg:w-[200px] cursor-pointer" src={LogoNutflix} alt="Netflix Logo" />
            </header>
            <AuthenticationForm />
        </main>
    )
}

export default Login
