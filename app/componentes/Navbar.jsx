"use client"
import Link from "next/link";
import {useAuthStore} from "@/app/store/auth";
import {useRouter} from "next/navigation";

const Navbar = () => {

    const router = useRouter()
    const {isLogged, signoutStore} = useAuthStore()
    const handleCerrarSesion = () => {
        signoutStore()
        alert('Se ha cerrado su sesión')
        router.push('/')
    }
    return (
        <nav className="flex justify-between items-center px-16 py-6 bg-white">
            <div className="flex">
                <Link href="/" >Home</Link>
                {isLogged &&
                    <Link href="/olla-comun" className="mx-4">Olla Comun</Link>
                }
                {isLogged &&
                    <Link href="/responsables" className="mx-4">Responsables</Link>
                }
                {isLogged &&
                    <Link href="/entrega" className="mx-4">Entregas</Link>
                }
            </div>

            <div className="flex">
                {!isLogged
                    ?
                    <Link href="/login" className="rounded-md bg-amber-600 text-white px-4 py-2 hover:bg-amber-500">Iniciar Sesión</Link>
                    :
                    <button type="button" onClick={handleCerrarSesion} className="rounded-md bg-amber-600 text-white px-4 py-2 hover:bg-amber-500">Cerrar Sesión</button>
                }
            </div>
        </nav>
    );
}

export default Navbar;
