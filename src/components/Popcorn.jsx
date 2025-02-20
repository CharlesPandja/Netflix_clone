import React from 'react'
import popcorn from '../assets/popcorn.png';
const Popcorn = () => {
    return (
        <>
            <div className="w-full px-30 bg-black">
                <div className="flex justify-center items-center gap-4 transition-transform hover:scale-110">
                <img src={popcorn} className="w-30" alt="popcon image" />
                <div className='flex justify-between items-center p-4 mt-12 mb-12 bg-indigo-950 p-3 rounded-lg w-full hover:bg-indigo-900'>
                    <div>
                        <h3 className='text-xl font-bold text-white'>Le Netflix que vous aimez pour juste 5,99 €.</h3>
                        <p className=' text-white'>Profitez de notre offre avec pub, la plus économique.</p>
                    </div>
                    <div>
                        <button className='bg-slate-600 text-white font-bold cursor-pointer px-5 py-2 rounded-sm text-base hover:bg-slate-700'>En savoir plus</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Popcorn
