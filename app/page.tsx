"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const works = [
  {
    title: "Aprecio el tiempo - Mercado Pago",
    slug: "oreo-celiacos",
    thumbnail: "/mp.jpg",
  },
  {
    title: "Campaña Oreo – Celiacos",
    slug: "danza-spot",
    thumbnail: "/oreo.jpg",
  },
  {
    title: "Maniobra Aprobada - Transito",
    slug: "maniobra-aprobada",
    thumbnail: "/transito.png",
  },
  {
    title: "Ultra Festival – Zara",
    slug: "festival",
    thumbnail: "/zara.png",
  },
  {
    title: "Roma – Editorial",
    slug: "roma",
    thumbnail: "/reinounido.png",
  },
  {
    title: "Pedido Disfrazado – Mercado Libre",
    slug: "meli",
    thumbnail: "/hero3.jpg",
  },
  {
    title: "Cuanas Destinadas – Deporte",
    slug: "deporte",
    thumbnail: "/huracan.jpg",
  },
  {
    title: "Inspirar es Talento",
    slug: "arquitectura",
    thumbnail: "/hero2.jpg",
  },
];




const slides = [
  {
    id: 0,
    image: "/oreo.jpg",
    badge: "CREATIVE PERFORMANCE AGENCY",
    title: "Hacemos que tu marca se mueva.",
    subtitle:
      "Estrategia, contenido y paid media para marcas que quieren crecer rápido sin perder su esencia.",
  },
  {
    id: 1,
    image: "/mp.jpg",
    badge: "FULL FUNNEL MARKETING",
    title: "Del primer impacto a la venta.",
    subtitle:
      "Construimos sistemas completos: awareness, consideración y conversión medible.",
  },
  {
    id: 2,
    image: "/transito.png",
    badge: "BRANDING · CONTENIDO · PERFORMANCE",
    title: "Tu marca con look & resultados premium.",
    subtitle:
      "Branding sólido, contenido que destaca y campañas que realmente convierten.",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white text-gray-900">
      <Navbar />

      {/* HERO SLIDER (con Swiper) */}
      <section className="relative h-[90vh] top-[60px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[90vh] flex items-center justify-center">
                {/* Imagen de fondo */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Contenido */}
                <div className="relative z-10 text-center px-6 max-w-3xl">
                  <p className="text-xs md:text-sm tracking-[0.35em] text-white/70 uppercase">
                    {slide.badge}
                  </p>
                  <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-white/90">
                    {slide.subtitle}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="#contact"
                      className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow-md"
                    >
                      Agenda una reunión
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="#services"
                      className="px-6 py-3 rounded-full border border-white/70 text-white font-medium"
                    >
                      Ver servicios
                    </motion.a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* MISION */}
      <section
        id="mission"
        className="py-24 max-w-4xl mx-auto px-6 animate-fadeInUp"
      >
        <h2 className="text-center text-4xl font-extrabold tracking-tight">
          NUESTRA MISIÓN
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-center text-gray-600">
          En MK Studio creemos que cada marca puede convertirse en la favorita
          de su audiencia. Combinamos data, creatividad y automatización para
          construir sistemas de marketing que generen resultados constantes: más
          ventas, más comunidad y más posicionamiento.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="py-24 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold text-white">SERVICIOS</h2>
          <p className="text-center text-white mt-2">
            Lo que hacemos para que tu marca crezca
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              {
                title: "Branding & Identidad",
                desc: "Naming, logo, sistema visual y tono de marca. Todo lo que necesitás para ser recordado.",
              },
              {
                title: "Social Media & Paid Ads",
                desc: "Estrategia, contenido y campañas en Meta, TikTok y Google para atraer clientes listos para comprar.",
              },
              {
                title: "Automatización & Funnels",
                desc: "Integraciones, email marketing y flows automatizados para escalar sin sumar más horas de trabajo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
                <p className="mt-4 text-sm font-semibold text-gray-500">
                  → Paquetes mensuales y proyectos puntuales
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="w-full bg-white py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">WORKS</h2>
          <p className="text-gray-600 mt-2">Campañas y proyectos realizados</p>
        </div>

        {/* FULL WIDTH GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 w-full">
          {works.map((item) => (
            <a
              key={item.slug}
              href={`/work/${item.slug}`}
              className="relative aspect-[4/3] md:aspect-[3/3] lg:aspect-square overflow-hidden group"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all" />

              {/* texto */}
              <p className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </section>
{/* NOSOTRAS */}
<section id="about-us" className="bg-gray-900">
  {/* TÍTULO */}
  <div className="max-w-5xl mx-auto text-center text-white pt-24 pb-12 px-6">
    <p className="text-xs md:text-sm tracking-[0.3em] text-blue-500 uppercase">
      ABOUT US
    </p>
    <h2 className="mt-3 text-4xl font-extrabold">NOSOTRAS</h2>
  </div>

  {/* CONTENIDO */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-6 items-center">

    {/* TEXTO */}
    <div className="leading-relaxed text-center md:text-left">
      <p className="text-xl md:text-2xl text-white">
        Somos Florencia y Giuliana, juntas formamos{" "}
        <span className="font-bold text-gray-900 px-2 rounded-md bg-white">
          FLORIANA
        </span>.
        Amamos las ideas que emocionan, los detalles que nadie ve y las marcas
        que se animan a hacer algo distinto.
      </p>

      <p className="mt-6 text-xl md:text-2xl text-white">
        Venimos del mundo de la creatividad, el diseño y la publicidad. Hoy
        nuestro objetivo es construir marcas y campañas que se sientan humanas,
        honestas y con un tono propio.
      </p>
    </div>

    {/* FOTO RESPONSIVE */}
    <div className="relative w-full h-[400px] md:h-[650px]">
      <Image
        src="/nosotras.png"
        alt="Flor y Giuli"
        fill
        className="object-contain"
      />
    </div>

  </div>
</section>



      {/* TESTIMONIOS */}
      <section id="clients" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Marcas reales, resultados reales
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:-rotate-1 hover:-translate-y-1 transition">
              <p className="text-gray-700 italic">
                “Pasamos de mensajes sueltos en Instagram a un sistema completo
                que genera ventas todos los días.”
              </p>
              <span className="block mt-4 font-semibold text-sm">
                — Laura Gómez, Tienda Minimal
              </span>
            </div>

            <div className="bg-slate-900 text-white p-7 rounded-xl shadow-lg scale-105 hover:-translate-y-2 transition">
              <p className="italic">
                “Nos ayudaron a ordenar marca, campañas y automatización. Hoy
                medimos todo y sabemos qué funciona.”
              </p>
              <span className="block mt-4 font-semibold text-sm">
                — Martín Rojas, FitClub
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:rotate-1 hover:-translate-y-1 transition">
              <p className="text-gray-700 italic">
                “Contenido, estrategia y diseño que se ve premium. La
                comunicación de la marca cambió por completo.”
              </p>
              <span className="block mt-4 font-semibold text-sm">
                — Nicole Rivera, Cafe Norte
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contact"
        className="relative py-32 flex items-center justify-center"
      >
        <Image
          src="/hero2.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            ¿LISTO PARA CRECER CON NOSOTROS?
          </h2>
          <p className="mt-4 text-lg">
            Contanos sobre tu marca y armamos un plan de acción en menos de 48
            horas.
          </p>

          <a
            href="mailto:hola@mkstudio.com"
            className="inline-block mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Escribir por mail
          </a>
          <p className="mt-3 text-sm text-white/70">
            También podemos armar esto para tu propia agencia ;)
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
