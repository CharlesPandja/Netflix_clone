import React from 'react';
import { useParams } from 'react-router-dom';

const Series = () => {
const params = useParams();

  return (
    <div className="mt-30 px-10">
      <h1 className='text-xl text-black'>This is the series page.</h1>
    </div>
  )
}

export default Series
