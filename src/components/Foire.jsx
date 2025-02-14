import React from 'react';
import Question from './Question';
import Input from './Input';
import Text from './Text';
import { sujetReponse, textFooter1, textFooter2, textFooter3, textFooter4 } from './questionReponse.js';

const Foire = () => {

    return (
        <div className='overflow-hidden bg-black'>
            <div className="w-full px-30 mb-20 overflow-hidden">
                <h3 className="text-2xl mt-20 mb-6 font-bold text-white">
                    Foire aux questions
                </h3>

                {sujetReponse && sujetReponse.map(element => <Question key={element.sujet} sujet={element.sujet} text={element.reponse} />)}

                <p className="mt-20 mb-6 text-white text-center">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
                <Input type="text" placeholder="Adresse e-mail" textBtn="Commencer" />
                <p className='text-stone-300 mt-20 mb-6'>Des questions ? Appelez le (+33) 0805-543-063</p>
                <div className='grid lg:grid-cols-5 gap-4'>
                    {textFooter1 && textFooter1.map(element => <Text key={element} text={element} />)}
                    {textFooter2 && textFooter2.map(element => <Text key={element} text={element} />)}
                    {textFooter3 && textFooter3.map(element => <Text key={element} text={element} />)}
                    {textFooter4 && textFooter4.map(element => <Text key={element} text={element} />)}
                </div>
            </div>
        </div>
    )
}

export default Foire
