export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-2">
        <p>© {new Date().getFullYear()} LAS Mellis Agency. Todos los derechos reservados.</p>
        <p className="text-xs">Hecho por Gino Sarubbi.</p>
      </div>
    </footer>
  );
}
