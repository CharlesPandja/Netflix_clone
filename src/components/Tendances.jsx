import React, { useState, useEffect, useRef } from "react";
import Tendance from "./Tendance.jsx";
import Modal from "./Modal.jsx";
import { API_KEY } from "../config.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

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
        setTimeout(() => {
            if (modalRef.current) {
                modalRef.current.openModal();
            }
        }, 100); // Small delay to ensure state updates
    }

    return (
        <div className="w-full px-10 bg-black overflow-hidden lg:px-30">
            <h3 className="text-xl mt-6 mb-6 font-medium text-white lg:text-2xl lg:font-bold">
                Tendances actuelles
            </h3>

            {loading && <p className="text-base mt-6 mb-6 text-white">Chargement...</p>}
            {error && (
                <p className="text-base mt-6 mb-6 text-white">
                    Erreur lors du chargement des tendances : {error}
                </p>
            )}

            {!loading && !error && data.length > 0 && (
                <Swiper modules={[Navigation]} navigation slidesPerView={4} spaceBetween={10}>
                    {data.map((movie, index) => (
                        // SwiperSlide component is used to render multiple slides at once
                        <SwiperSlide key={movie.id}>
                            <Tendance
                                id={index}
                                source={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                nomImg={movie.title}
                                onSelect={() => handleMovie(movie)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <Modal ref={modalRef} movie={selectedMovie} />
        </div>
    );
};

export default Tendances;
