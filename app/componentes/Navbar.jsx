
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center px-16 py-6 bg-slate-100">
            <div className="flex">
                <a href="#programa" className="hover:underline pr-4 hover:font-bold">PROGRAMA</a>
                <a href="#beneficios" className="hover:underline pr-4 hover:font-bold">BENEFICIOS</a>
                <a href="#catalogo" className="hover:underline pr-4 hover:font-bold">OLLAS COMUNES</a>
            </div>
            <div className="flex">
                <Link href="/login" className="rounded-md bg-amber-600 text-white px-4 py-2 hover:bg-amber-500">Iniciar Sesión</Link>
            </div>
        </nav>
    );
}

export default Navbar;
