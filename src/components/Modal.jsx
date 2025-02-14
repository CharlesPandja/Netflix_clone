import React, { useRef, useImperativeHandle, forwardRef } from "react";
import Precision from "./Precision.jsx";

const Modal = forwardRef(({ movie }, ref) => {
    const dialog = useRef(null);

    useImperativeHandle(ref, () => ({
        openModal: () => {
            if (dialog.current) {
                dialog.current.showModal();
            }
        },
        closeModal: () => {
            if (dialog.current) {
                dialog.current.close();
            }
        },
    }));

    if (!movie) return null;

    return (
            <dialog ref={dialog} className="rounded-lg w-1/2 bg-black text-white relative">
                <button
                    onClick={() => dialog.current.close()}
                    className="absolute top-2 right-2 cursor-pointer text-white px-3 py-1 rounded-full hover:bg-gray-00"
                >
                    X
                </button>
                <img
                    className="w-full h-auto mb-1"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <div className="w-full p-6">
                    <h2 className="text-2xl font-bold mb-6">{movie.title}</h2>
                    <div className="flex gap-3 mb-6">
                        <Precision text={movie.media_type} />
                        <Precision text={movie.release_date} />
                        <Precision text={`${movie.vote_average} / 10`} />
                    </div>
                    <p className="mb-8">{movie.overview}</p>
                    <button className="bg-red-600 cursor-pointer text-white px-6 py-3 rounded-sm text-2xl hover:bg-red-700 transition">
                        Commencer
                    </button>
                </div>
            </dialog>
    );
});

export default Modal;
