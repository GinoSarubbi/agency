"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";

export default function WorkDetail({ params }: any) {
    const slug = params.slug;

    const works: any = {
        "oreo-celiacos": {
            title: "Campaña Mercado Pago – Aprecio al Tiempo",
            description: "Descripción del case. Acá contás estrategia, idea, resultado.",
            images: [
                "/hero1.jpg",
                "/hero2.jpg",
                "/hero3.jpg",
            ],
            video: "https://www.youtube.com/embed/5qap5aO4i9A", // opcional
        },
        "danza-spot": {
            title: "Oreo – Celiacos", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/hero2.jpg",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },
        "maniobra-aprobada": {
            title: "Maniobra Aprobada - Transito", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/transito.png",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },
          "festival": {
            title: "Ultra Festival – Zara", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/zara.png",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },
         "roma": {
            title: "Roma – Editorial", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/reinounido.png",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },
        "meli": {
            title: "Pedido Disfrazado – Mercado Libre", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/meli.jpg",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },
          "deporte": {
            title: "Cuanas Destinadas – Deporte", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/huracan.jpg",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },
          "arquitectura": {
            title: "Inspirar es Talento", 
            description: "Descripción del case: estrategia, idea, resultado.",
            images: [
               "/huracan.jpg",
                "/hero1.jpg",
                "/hero3.jpg",
            ],
            video: null, // o link de YouTube
        },




    };

    const work = works[slug];
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    if (!work) {
        return <p className="p-20 text-center">Trabajo no encontrado.</p>;
    }

    return (
        <main className="w-full min-h-screen px-6 md:px-20 lg:px-40 py-16 bg-white">
            <h1 className="text-4xl font-extrabold">{work.title}</h1>
            <p className="text-gray-600 mt-2">{work.description}</p>

            {/* GRID DE IMÁGENES GRANDES */}
            <div className="mt-12 space-y-10">
                {work.images.map((img: string, i: number) => (
                    <div
                        key={i}
                        className="w-full relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition"
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    >
                        <Image
                            src={img}
                            alt={work.title}
                            width={1332}
                            height={870}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* VIDEO OPCIONAL */}
            {work.video && (
                <div className="mt-16 w-full">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src={work.video}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {/* LIGHTBOX */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={work.images.map((img: string) => ({ src: img }))}
                plugins={[Zoom, Thumbnails]}
            />
        </main>
    );
}
