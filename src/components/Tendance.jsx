import React from 'react'

const Tendance = ({source, nomImg, onSelect}) => {
  return (
    <div onClick={onSelect} className="p-2 cursor-pointer rounded-lg transition-transform hover:scale-110">
      <img src={source} alt={nomImg} className="w-full h-auto rounded-lg" />
    </div>
  )
}

export default Tendance
