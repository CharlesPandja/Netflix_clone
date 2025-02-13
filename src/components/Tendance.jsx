import React from 'react'

const Tendance = ({source, nomImg}) => {
  return (
    <div className="p-2 cursor-pointer rounded-lg hover:bg-stone-800">
      <img src={source} alt={nomImg} className="w-full h-auto rounded-lg" />
    </div>
  )
}

export default Tendance
