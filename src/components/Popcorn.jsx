import React from 'react'
import popcorn from '../assets/popcorn.png';
import { useNavigate } from 'react-router-dom';
const Popcorn = () => {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('login');
    }

    return (
        <>
            <div className="w-full bg-black px-5 md:px-10 lg:px-30 ">
                <div className="sm:flex justify-center items-center gap-4 overflow-hidden transition-transform sm:hover:scale-110">
                    <img src={popcorn} className="w-20 sm:w-30" alt="popcon image" />
                    <div className='md:flex justify-between items-center p-4 mb-12 bg-indigo-950 rounded-lg w-full hover:bg-indigo-900 sm:mt-12'>
                        <div>
                            <h3 className='text-xl font-medium text-white'>Nutflix est une plateforme de démonstration des compétences web.</h3>
                            <p className=' text-white mb-4'>Sentez vous libre de parcourir les différentes "pages".</p>
                        </div>
                        <div>
                            <button onClick={handleLogin} className='bg-slate-600 text-white font-medium cursor-pointer px-5 py-2 rounded-sm text-base hover:bg-slate-700 sm:w-35'>En savoir plus</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popcorn
