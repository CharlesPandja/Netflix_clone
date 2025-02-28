import React from 'react'

const ImgBrowseHeader = ({ source, name, onSelect }) => {
    return (
        <div>
            <img onClick={onSelect} className="w-[30px] cursor-pointer" src={source} alt={name} />
        </div>
    )
}

export default ImgBrowseHeader
