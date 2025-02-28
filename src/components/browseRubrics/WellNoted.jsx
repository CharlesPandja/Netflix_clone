import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

const API_URL = "https://api.themoviedb.org/3/movie/now_playing";
const headerOptions = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDk2OWVmNWZiYmU0ODU3YzZlY2ZmZDE3ZGI2MTFkZCIsIm5iZiI6MTczOTM3NjE5OS42ODgsInN1YiI6IjY3YWNjNjQ3NTE4NDA4YWJmOGJiNWZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcN8g2nMZWC2SrnLVpTyNkPbjNl06wwx-gCganmikXw'
};

const NewInNutflix = () => {
    const [animeMovies, setAnimeMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimeMovies = async () => {
            try {
                const response = await fetch(API_URL, { headers: headerOptions });
                if (!response.ok) throw new Error("Failed to fetch anime movies.");
                const data = await response.json();
                setAnimeMovies(data.results || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimeMovies();
    }, []);

    if (loading) return <p className="text-white text-center mt-4">Chargement des nouveautés...</p>;
    if (animeMovies.length === 0) return <p className="text-white text-center mt-4">Aucun nouveau film d'animation disponible.</p>;

    return (
        <div className="px-8 mt-8 mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">Actuellement en ligne</h2>

            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={5}
                spaceBetween={10}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {animeMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="relative">
                            <img
                                className="w-full h-auto cursor-pointer rounded-md transition-transform duration-300 hover:scale-110"
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={movie.name}
                                loading="lazy"
                            />
                            <p className="absolute right-2 bottom-2 text-white text-sm p-2 bg-stone-950/40 rounded-lg">{movie.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewInNutflix;
