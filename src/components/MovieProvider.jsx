// import { MovieContext } from './MovieContext';
// import { useState } from 'react';

// export default function MovieProvider({children}){
// const [movie, setMovie] = useState([]);
// function handleMovie(id){
//     const movieId = movie.find(item => item.id === id);
//     setMovie([movieId]);
// }

//     return (
//             <>
//                 <MovieContext.Provider value={{ movie, handleMovie }} >{children}</MovieContext.Provider>
//             </>
//     )
// }