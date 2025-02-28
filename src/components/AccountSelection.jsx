import React from 'react'

const AccountSelection = ({source, name, text}) => {
  return (
    <div className='cursor-pointer flex justify-left items-center gap-3 mb-3'>
      <img className="w-[20px]" src={source} alt={name} />
      <p className="text-white text-sm hover:underline">{text}</p>
    </div>
  )
}

export default AccountSelection
