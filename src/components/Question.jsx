import React from 'react'

const Question = ({ sujet, text }) => {
    return (
        <div>
            <details className="w-full p-6 bg-stone-800 text-2xl text-white">
                <summary className="w-full cursor-pointer">{sujet}</summary>
                <div className="mt-8">
                    <p>{text}</p>
                </div>
            </details>
        </div>
    )
}

export default Question
