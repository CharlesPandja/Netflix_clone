import React, { useState, useEffect, useRef } from "react";
import Tendance from "./Tendance.jsx";
import Modal from "./Modal.jsx";
import { API_KEY } from "../config.js";

const Tendances = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const resData = await response.json();
                setData(resData.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    function handleMovie(movie) {
        setSelectedMovie(movie);
        if (modalRef.current) {
            modalRef.current.openModal();
        }
    }

    return (
        <div className="w-full px-30 bg-black overflow-hidden">
            <h3 className="text-2xl mt-6 mb-6 font-bold text-white">
                Tendances actuelles
            </h3>

            {loading && <p className="text-base mt-6 mb-6 text-white">Chargement...</p>}
            {error && (
                <p className="text-base mt-6 mb-6 text-white">
                    Erreur lors du chargement des tendances : {error}
                </p>
            )}

            {!loading && !error && data.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {data.map((movie) => (
                        <Tendance
                            key={movie.id}
                            source={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            nomImg={movie.title}
                            onClick={() => handleMovie(movie)}
                        />
                    ))}
                </div>
            )}


            <Modal ref={modalRef} movie={selectedMovie} />
        </div>
    );
};

export default Tendances;
