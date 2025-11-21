"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200"
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-extrabold tracking-tight text-gray-900">
          <span className="px-2 py-1 rounded-md bg-black text-white mr-1">LAS</span>
          <span className="text-primary">Mellis Agency</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#mission" className="hover:text-black">Misión</a>
          <a href="#services" className="hover:text-black">Servicios</a>
          <a href="#clients" className="hover:text-black">Clientes</a>
          <a href="#clients" className="hover:text-black">Nosotras</a>
          <a href="#contact" className="hover:text-black">Contacto</a>
        </div>
        <a
          href="#contact"
          className="text-sm font-semibold border border-black px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition"
        >
          Agenda una llamada
        </a>
      </nav>
    </motion.header>
  );
}
