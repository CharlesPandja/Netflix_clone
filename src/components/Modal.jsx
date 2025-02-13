import React, { useRef, useImperativeHandle, forwardRef } from "react";
import Precision from "./Precision.jsx";

const Modal = forwardRef(({ movie }, ref) => {
    const dialog = useRef(null);

    useImperativeHandle(ref, () => ({
        openModal: () => dialog.current.showModal(),
        closeModal: () => dialog.current.close(),
    }));

    if (!movie) return null;

    return (
        <dialog ref={dialog} className="rounded-lg w-1/2 bg-black text-white p-5">
            <button
                onClick={() => dialog.current.close()}
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
            >
                X
            </button>
            <img
                className="w-full h-auto mb-3"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">{movie.title}</h2>
                <div className="flex gap-3 mb-3">
                    <Precision text={movie.release_date} />
                </div>
                <p className="mb-3">{movie.overview}</p>
                <button className="bg-red-600 cursor-pointer text-white h-1 px-6 py-3 rounded-lg text-2xl hover:bg-red-700 transition">
                    Commencer
                </button>
            </div>
        </dialog>
    );
});

export default Modal;
