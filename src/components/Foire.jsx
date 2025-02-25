import React from 'react';
import Footer from './Footer';
import Question from './Question';
import Input from './Input';
import { sujetReponse } from './questionReponse';

const Foire = () => {

    return (
        <div className='overflow-hidden bg-black lg:px-30'>
            <div className="w-full px-10 mb-20 overflow-hidden">
                <h3 className="text-xl mt-20 mb-6 font-medium text-white lg:text-2xl lg:font-bold">
                    Foire aux questions
                </h3>
                {sujetReponse && sujetReponse.map(element => <Question key={element.sujet} sujet={element.sujet} text={element.reponse} />)}

                <p className="mt-20 mb-6 text-white text-center">Prêt à regarder Nutflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
                <Input type="text" placeholder="Adresse e-mail" textBtn="Commencer" />
                <Footer />
            </div>
        </div>
    )
}

export default Foire
