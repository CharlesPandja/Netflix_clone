import React from 'react';
import Input from './Input';

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className='text-6xl text-center mb-6 font-bold text-white'>Films et séries en <br/> illimité, et bien plus</h1>
            <h3 className='text-2xl text-center mb-6 font-bold text-white'>À partir de 5,99 €. Annulable à tout moment.</h3>
            <p className="mb-6 text-center text-white">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou <br/> réactiver votre abonnement.</p>
            <div>
                <Input type="text" placeholder="Adresse e-mail" textBtn="Commencer" />
            </div>
        </div>
    )
}

export default Home
