import React from 'react'

const Tendance = ({ source, nomImg, onSelect, id }) => {
  return (
    <div onClick={onSelect} className="p-2 cursor-pointer rounded-lg transition-transform hover:scale-110 relative">
      <img src={source} alt={nomImg} className="w-full h-auto rounded-lg" />
      <p className="absolute bottom-6 -left-2 text-8xl text-black font-bold"
        style={{ WebkitTextStroke: '2px white' }}>
        {id + 1}</p>
    </div>
  )
}

export default Tendance
