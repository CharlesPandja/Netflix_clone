import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useActionState } from 'react';
import { FIREBASE_API_KEY } from '../config.js'; 

const AuthenticationForm = () => {
    const [isChanged, setIsChanged] = useState(false);

    const handleChange = () => setIsChanged(prevState => !prevState);
    const navigate = useNavigate();

    // Make AuthenticateAction async
    const AuthenticateAction = async (prevFormState, formData) => {
        const email = formData.get('emailPhone');
        const password = formData.get('password');
        const reminder = formData.has('reminder');

        let errors = [];
        if (!email || !email.includes('@')) {
            errors.push({ id: 0, message: 'Veuillez entrer une adresse e-mail ou un numéro de téléphone valide.' });
        }
        if (!password || password.length < 4 || password.length > 60) {
            errors.push({ id: 1, message: 'Votre mot de passe doit comporter entre 4 et 60 caractères.' });
        }

        if (errors.length > 0) {
            return {
                errors,
                enteredValue: { email, password, reminder }
            };
        }

        try {
            // Firebase Authentication API for login
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            if (!response.ok) {
                throw new Error(data.error?.message || 'Erreur lors de la connexion');
            }

            const data = await response.json();


            console.log('Auth Success:', data);

            // Store the token in local storage
            localStorage.setItem('token', data.idToken);


            return navigate('/browse'); // Redirect on success

        } catch (error) {
            console.error('Auth Error:', error.message);
            return { errors: [{ id: 3, message: error.message }] };
        }
    };

    const [formState, formAction, pending] = useActionState(AuthenticateAction, { errors: null });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <form action={formAction} className="flex flex-col p-14 bg-gray-950/80 rounded-sm w-full sm:w-[450px]">
                <h1 className="mb-8 text-white text-3xl font-bold">S'identifier</h1>

                {formState.errors && (
                    <div className="p-3 mb-8 bg-yellow-500 text-black rounded-sm">
                        <ul>
                            {formState.errors.map(element => (
                                <li key={element.id} className="text-black">{element.message}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <input
                    className="mb-5 w-full text-white rounded-sm p-3 bg-transparent outline-none border border-white/50 focus:border-white focus:border-2"
                    placeholder="E-mail ou numéro de mobile"
                    name="emailPhone"
                    type="text"
                    defaultValue={formState.enteredValue?.email}
                />
                {formState.errors?.find(el => el.id === 0) && <p className="mb-5 text-xs text-red-600">{formState.errors.find(el => el.id === 0).message}</p>}

                {!isChanged && (
                    <input
                        className="mb-5 w-full text-white rounded-sm p-3 bg-transparent outline-none border border-white/50 focus:border-white focus:border-2"
                        placeholder="Mot de passe"
                        name="password"
                        type="password"
                        defaultValue={formState.enteredValue?.password}
                    />
                )}
                {formState.errors?.find(el => el.id === 1) && <p className="mb-5 text-xs text-red-600">{formState.errors.find(el => el.id === 1).message}</p>}

                {!isChanged && <button className="mb-5 bg-red-600 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-red-700 transition w-full">{pending ? "Connexion..." : "S'identifier"}</button>}
                {isChanged && <button className="mb-5 bg-red-600 text-white cursor-pointer px-5 py-2 rounded-sm text-sm hover:bg-red-700 transition w-full">Recevoir un code d'identification</button>}

                <div className="text-center mb-5">
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

                <p className='mb-5 text-sm text-neutral-300'>Première visite sur Netflix ? <Link className="text-white hover:underline">Inscrivez-vous.</Link></p>
            </form>
            <div className="w-full bg-black px-10 lg:px-30">
                <Footer />
            </div>
        </div>
    );
};

export default AuthenticationForm;

