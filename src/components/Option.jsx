import React from 'react'

const Option = ({ title, text, Img }) => {
    return (
        <div className="bg-indigo-950 p-3 rounded-lg relative">
            <h3 className="text-2xl mt-6 mb-6 font-bold text-white">{title}</h3>
            <p className='mb-12 text-white'>{text}</p>
            <div className="w-full">
                <img src={Img} alt={title} className="w-12 h-12 object-cover absolute bottom-2 right-5" />
            </div>
        </div>
    )
}

export default Option
