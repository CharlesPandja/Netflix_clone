import React from 'react'

const Input = ({textBtn, ...props }) => {
  return (
    <div className="flex gap-2 w-full justify-center items-center px-30">
       <input className="w-full h-15 bg-transparent border border-white/50 text-white rounded-lg px-4 py-2 outline-none focus:border-white" {...props} />
       <button className="bg-red-600 cursor-pointer text-white h-15 px-6 py-3 rounded-sm text-2xl hover:bg-red-700 transition">{textBtn}</button>
    </div>
  )
}

export default Input
