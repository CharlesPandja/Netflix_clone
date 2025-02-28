import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

const SuggestedMovies = ({ dataRetrieved }) => {
    // Handle Loading State
    if (!dataRetrieved) {
        return <p className="text-white text-center mt-4">Chargement des films...</p>;
    }

    // Handle Empty State
    const backdrops = dataRetrieved.results;
    
    if (!backdrops || backdrops.length === 0) {
        return <p className="text-white text-center mt-4">Aucun film suggéré pour le moment.</p>;
    }

    return (
        <div className="px-8 mt-8 mb-8 z-40">
            <h2 className="text-lg font-semibold text-white mb-3">
                On pense que vous allez adorer...
            </h2>

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
                {backdrops.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className='relative'>
                            <img
                                className="w-full h-auto cursor-pointer rounded-sm transition-transform duration-300 ease-in-out hover:scale-110"
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt="Suggested Movie Backdrop"
                            />
                            <p className="absolute right-2 bottom-2 text-white text-sm p-2 bg-stone-950/40 rounded-lg">{movie.original_name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SuggestedMovies;
