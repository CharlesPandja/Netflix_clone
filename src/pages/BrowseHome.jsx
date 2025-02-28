import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SuggestedMovies from '../components/browseRubrics/SuggestedMovies.jsx';
import NewInNutflix from '../components/browseRubrics/NewInNutflix.jsx';
import playImg from '../assets/play.png';
import infosImg from '../assets/informations.png';
import WellNoted from '../components/browseRubrics/WellNoted.jsx';
import Footer from '../components/Footer.jsx';


const headerOptions = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDk2OWVmNWZiYmU0ODU3YzZlY2ZmZDE3ZGI2MTFkZCIsIm5iZiI6MTczOTM3NjE5OS42ODgsInN1YiI6IjY3YWNjNjQ3NTE4NDA4YWJmOGJiNWZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcN8g2nMZWC2SrnLVpTyNkPbjNl06wwx-gCganmikXw'
}
const BrowseHome = () => {
    const datas = useLoaderData();

    if (!datas) {
        return <p>Loading...</p>;
    }

    const firstBackdrop = datas.results[0];
    if (!firstBackdrop) {
        return <p>No Backdrop found</p>;
    }
    const descriptionBackdrop = firstBackdrop.overview;

    return (
        <>
            <div className="relative max-w-full h-screen px-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full"
                >
                    <img
                        className="w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/w1280${firstBackdrop.backdrop_path}`}
                        alt={firstBackdrop.original_name}
                    />
                </div>

                <div className="absolute top-1/3 z-10 text-white p-6 bg-stone-950/80 rounded-lg w-1/2">
                    <p className="text-5xl font-bold mb-5">{firstBackdrop.original_name}</p>
                    <p className="text-sm font-medium mb-5">{descriptionBackdrop}</p>
                    <div className="flex gap-3 justify-left items-center">
                        <button className="cursor-pointer hover:bg-white/80 bg-white text-black font-semibold h-auto text-base rounded-sm w-[170px]">
                            <div className="w-full flex justify-center items-center gap-3 py-2 px-5">
                                <div>
                                    <img className="max-w-8" src={playImg} alt="play Image" />
                                </div>
                                <div>
                                    Lecture
                                </div>
                            </div>
                        </button>
                        <button className="cursor-pointer hover:bg-stone-400/30 bg-stone-200/30 text-white font-semibold h-auto text-base rounded-sm  w-[170px]">
                            <div className="w-full flex justify-center items-center gap-3 py-2 px-5">
                                <div>
                                    <img className="max-w-8" src={infosImg} alt="play Image" />
                                </div>
                                <div>
                                    Plus d'infos
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-black/80">
                <SuggestedMovies dataRetrieved={datas} />
                <NewInNutflix />
                <WellNoted />
                <div className="px-8 mt-8 mb-8">
                <Footer />
                </div>
            </div>
        </>
    )
}

export default BrowseHome


export async function loader() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated', {
            method: 'GET',
            headers: headerOptions
        });

        if (!response.ok) {
            throw new Error('Failed to fetch movie\'s videos. Status: ' + response.status);
        }

        const data = await response.json();
        return data || [];
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
