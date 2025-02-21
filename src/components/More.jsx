import React from 'react'
import Option from './Option.jsx'
import tv from '../assets/tv.png';
import loupes from '../assets/loupes.png';
import enfants from '../assets/enfants.png';
import arrow from '../assets/arrow.png';

const More = () => {
    const text1 = 'Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.';
    const text2 = 'Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.';
    const text3 = 'Regardez des films et séries en accès illimité sur votre TV, smartphone, tablette et ordinateur.';
    const text4 = 'Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.';

    return (
            <div className="w-full px-30 bg-black overflow-hidden">
                <h3 className="text-2xl mt-20 mb-6 font-bold text-white">
                    Encore plus de raisons de vous abonner
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    <Option title="Regardez Netflix sur votre TV" text={text1} Img={tv} />
                    <Option title="Téléchargez vos séries pour les regarder hors connexion" text={text2} Img={arrow} />
                    <Option title="Où que vous soyez" text={text3} Img={loupes} />
                    <Option title="Créez des profils pour les enfants" text={text4} Img={enfants} />
                </div>
            </div>
    )
}

export default More
