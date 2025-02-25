import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';
import { useActionState } from 'react';

const AuthenticationForm = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isChanged, setIsChanged] = useState(false);


    const handleChange = () => {
        setIsChanged(prevState => !prevState);
    }

    const handleEnSavoirPlus = () => {
        setIsSelected(!isSelected);
    }

    const AuthenticateAction = (prevFormState, formData) => {
        const email = formData.get('emailPhone');
        const password = formData.get('password');
        const reminder = formData.has('reminder');

        let errors = [];
        if (!email || !email.includes('@')) {
            errors.push({ id: 0, message: 'x Veuillez entrer une adresse e-mail ou un numéro de téléphone valide.' })
        }
        if (!password || password.length < 4 || password.length > 60) {
            errors.push({id: 1, message : 'x Votre mot de passe doit comporter entre 4 et 60 caractères.'})
        }

        if (!reminder) {
            errors.push({id : 2, message :'Vous n\'avez pas activé l\'enregistrement de vos identifiants.'})
        }

        if (errors.length > 0) {
            return {
                errors, enteredValue: {
                    email, password, reminder
                }
            }
        }
        return { errors: null }
    }
    const [formState, formAction] = useActionState(AuthenticateAction, { errors: null })

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <form action={formAction} className="flex flex-col p-14 bg-gray-950/80 rounded-sm w-full sm:w-[450px] ">
                <h1 className="mb-8 text-white text-3xl font-bold">S'identifier</h1>
                
                {/* {formState.errors && <div className="p-3 mb-8 bg-yellow-500 text-black rounded-sm"><ul>
                    {formState.errors.map(element => <li key={element} className="text-black">{element}</li>)}
                </ul></div>} */}

                <input className="mb-5 w-full text-white rounded-sm p-3 bg-transparent outline-none border border-white/50 focus:border-white focus:border-2" placeholder="E-mail ou numéro de mobile" name="emailPhone" type="text" defaultValue={formState.enteredValue?.email} />
                {formState.errors?.find(element => element.id === 0) && <p className="mb-5 text-xs text-red-600">{formState.errors?.find(element => element.id === 0).message}</p>}
                {!isChanged && <input className="mb-5 w-full text-white rounded-sm p-3 bg-transparent outline-none border border-white/50 focus:border-white focus:border-2" placeholder="Mot de passe" name="password" type="password" defaultValue={formState.enteredValue?.password} />}
                {formState.errors?.find(element => element.id === 1) && <p className="mb-5 text-xs text-red-600">{formState.errors?.find(element => element.id === 1).message}</p>}
                {isChanged && <p className="mb-5 text-sm text-neutral-600">Frais de SMS et de données applicables</p>}
                {!isChanged && <button className="mb-5 bg-red-600 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-red-700 transition w-full">S'identifier</button>}
                {isChanged && <button className="mb-5 bg-red-600 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-red-700 transition w-full">Recevoir un code d'identification</button>}
                <div className="text-center">
                    <p className="mb-5 text-neutral-300">OU</p>
                </div>
                {!isChanged && <button type="button" onClick={handleChange} className="mb-5 bg-neutral-700 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-neutral-800 transition w-full">Utiliser un code d'authentification</button>}
                {isChanged && <button type="button" onClick={handleChange} className="mb-5 bg-neutral-700 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-neutral-800 transition w-full">Utiliser le mot de passe</button>}
                <div className="text-center mb-5">
                    {!isChanged && <Link className="text-white text-sm hover:text-neutral-300 hover:underline">Mot de passe oublié ?</Link>}
                    {isChanged && <Link className="text-white text-sm hover:text-neutral-300 hover:underline">E-mail ou numéro de téléphone oublié ?</Link>}
                </div>
                <div className='w-full flex mb-5 gap-3'>
                    <input type="checkbox" name="reminder" defaultChecked={formState.enteredValue?.reminder} />
                    <label className="text-white text-sm" htmlFor="reminder">Se souvenir de moi</label>
                </div>
                <p className='mb-5 text-sm text-neutral-300'>Première visite sur Netflix ? <Link className="mb-5 text-white text-sm hover:underline ">Inscrivez-vous</Link>.</p>
                <div className="text-sm text-neutral-600 mb-7">Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. <br />
                    {!isSelected && <p onClick={handleEnSavoirPlus} className='text-blue-700 cursor-pointer'>En savoir plus</p>}</div>
                {isSelected && <p className="text-sm text-neutral-600">Les informations collectées par Google reCAPTCHA sont soumises aux Règles de confidentialité et Conditions d'utilisation de Google, et sont utilisées pour fournir, maintenir et améliorer le service reCAPTCHA, ainsi qu'à des fins de sécurité générale (elles ne sont pas utilisées pour les publicités personnalisées par Google).</p>}
            </form>
            <div className="w-full bg-black px-10 lg:px-30">
                <Footer />
            </div>
        </div>
    )
}

export default AuthenticationForm
