import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className='text-6xl text-center mb-6 font-bold text-white'>Films et séries en <br/> illimité, et bien plus</h1>
            <h3 className='text-2xl text-center mb-6 font-bold text-white'>À partir de 5,99 €. Annulable à tout moment.</h3>
            <p className="mb-6 text-center text-white">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou <br/> réactiver votre abonnement.</p>
            <div className="flex gap-2 w-full justify-center items-center">
                <input placeholder="Adresse e-mail" className="w-1/4 h-15 bg-transparent border border-white/50 text-white rounded-lg px-4 py-2 outline-none focus:border-white" type="text" />
                <button className="bg-red-600 cursor-pointer text-white h-15 px-6 py-3 rounded-lg text-2xl hover:bg-red-700 transition">Commencer </button>
            </div>
        </div>
    )
}

export default Home
