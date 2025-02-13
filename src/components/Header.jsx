import React from 'react';
import LogoNetflix from '../assets/logoNetflix.png';

const Header = () => {
    return (
        <header className="flex justify-between items-center w-full px-30 py-2">
            {/* Logo */}
            <div>
                <img className="w-1/2" src={LogoNetflix} alt="Netflix Logo" />
            </div>

            {/* Language Selector & Sign In */}
            <div className="flex gap-4">
                <select className="px-4 py-2 text-white rounded-lg text-base border border-gray-300 focus:outline-none">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                </select>
                <button className="bg-red-600 text-white cursor-pointer px-5 py-2 rounded-lg text-base hover:bg-red-700 transition">
                    S'identifier
                </button>
            </div>
        </header>
    );
};

export default Header;
