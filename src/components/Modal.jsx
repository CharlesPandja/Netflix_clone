import React, { useState, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import Precision from "./Precision.jsx";

const Modal = forwardRef(({ movie }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true);
        },
        closeModal: () => {
            setIsOpen(false);
        },
    }));

    if (!movie || !isOpen) return null;

    function handleClose() {
        setIsOpen(false);
    }

    return createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 z-10">
            <div className="relative w-1/2 max-h-[90vh] overflow-auto bg-black text-white rounded-lg">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 cursor-pointer text-white px-3 py-1 rounded-full hover:bg-gray-700"
                >
                    X
                </button>
                <img
                    className="w-full h-auto mb-1"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <div className="w-full  p-6">
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
            </div>
        </div>,
        document.getElementById("modal")
    );
});

export default Modal;
