import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';

const AuthenticationForm = () => {
    const [isSelected, setIsSelected] = useState(false)
    const handleEnSavoirPlus = () => {
        setIsSelected(!isSelected);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <form action="" className="flex flex-col p-14 bg-gray-950/90 rounded-sm w-1/3 ">
                <h1 className="mb-8 text-white text-3xl font-bold">S'identifier</h1>
                <input className="mb-5 w-full text-white rounded-sm p-3 bg-transparent outline-none border border-white/50 focus:border-white focus:border-2" placeholder="E-mail ou numéro de mobile" type="text" />
                <input className="mb-5 w-full text-white rounded-sm p-3 bg-transparent outline-none border border-white/50 focus:border-white focus:border-2" placeholder="Mot de passe" type="text" />
                <button className="mb-5 bg-red-600 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-red-700 transition w-full">S'identifier</button>
                <div className="text-center">
                    <p className="mb-5 text-neutral-300">OU</p>
                </div>
                <button className="mb-5 bg-neutral-700 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-neutral-800 transition w-full">Utiliser un code d'authentification</button>
                <div className="text-center mb-5">
                    <Link className="text-white text-sm hover:text-neutral-300 hover:underline">Mot de passe oublié ?</Link>
                </div>
                <div className='w-full flex mb-5 gap-3'>
                    <input type="checkbox" />
                    <label className="text-white text-sm" htmlFor="reminder">Se souvenir de moi</label>
                </div>
                <p className='mb-5 text-sm text-neutral-300'>Première visite sur Netflix ? <Link className="mb-5 text-white text-sm hover:underline ">Inscrivez-vous</Link>.</p>
                <p className="text-sm text-neutral-600 mb-7">Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. <br />
                    {!isSelected && <p onClick={handleEnSavoirPlus} className='text-blue-700 cursor-pointer'>En savoir plus</p>}</p>
                {isSelected && <p className="text-sm text-neutral-600">Les informations collectées par Google reCAPTCHA sont soumises aux Règles de confidentialité et Conditions d'utilisation de Google, et sont utilisées pour fournir, maintenir et améliorer le service reCAPTCHA, ainsi qu'à des fins de sécurité générale (elles ne sont pas utilisées pour les publicités personnalisées par Google).</p>}
            </form>
            <div className="w-full bg-black px-30">
                <Footer />
            </div>
        </div>
    )
}

export default AuthenticationForm
