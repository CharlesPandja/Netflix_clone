import React from 'react';
import { textFooter1, textFooter2, textFooter3, textFooter4 } from './questionReponse.js';
import Text from './Text';

const Footer = () => {
    return (
        <div className="mb-20 bg-black-900 text-white">
            <p className='text-stone-300 mt-20 mb-6'>Des questions ? Appelez le (+33) 0805-543-063</p>
            <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4'>
                {textFooter1 && textFooter1.map(element => <Text key={element} text={element} />)}
                {textFooter2 && textFooter2.map(element => <Text key={element} text={element} />)}
                {textFooter3 && textFooter3.map(element => <Text key={element} text={element} />)}
                {textFooter4 && textFooter4.map(element => <Text key={element} text={element} />)}
            </div>
            <select className="px-4 py-2 mt-12 mb-12 text-white rounded-sm text-base border border-gray-300 focus:outline-none">
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
            <Text text="Netflix France" />
        </div>
    )
}

export default Footer
