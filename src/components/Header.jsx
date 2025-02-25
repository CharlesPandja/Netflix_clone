import React from 'react';
import LogoNutflix from '../assets/logoNutflix.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    function handleNavigate(){
        navigate('/login');
    }

    return (
        <header className="flex justify-between items-center mt-10 w-full py-2 px-5 md:px-10 lg:px-30 ">
            {/* Logo */}
            <div>
                <img className="w-[100px] md:w-[200px]" src={LogoNutflix} alt="Netflix Logo" />
            </div>

            {/* Language Selector & Sign In */}
            <div className="flex gap-4">
                <select className="px-4 py-2 text-white rounded-sm text-base border border-gray-300 focus:outline-none">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                </select>
                <button onClick={handleNavigate} className="bg-red-600 text-white cursor-pointer px-5 py-2 rounded-sm font-bold text-base hover:bg-red-700 transition">
                    S'identifier
                </button>
            </div>
        </header>
    );
};

export default Header;
