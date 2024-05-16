"use client"

import {useState} from "react";
import Navbar from "@/app/componentes/Navbar";
import {iniciarSesion} from "@/app/services/login";
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/app/store/auth";

const LoginPage = () => {
    const { loginStore, isLogged, setTipoStore, tipo } = useAuthStore()

    const router = useRouter()
    const INITIAL_FORM_STATE = {
        usuario: '',
        password: ''
    }

    const [form, setForm] = useState(INITIAL_FORM_STATE)

    const handleIniciarSesion = (event) => {
        event.preventDefault()
        iniciarSesion(form)
            .then(async data => {
                const {valido, mensaje, contenido} = data
                alert(mensaje)
                if (valido) {
                    loginStore()
                    setTipoStore(contenido.tipo)
                    console.log(isLogged)
                    console.log(tipo)
                    router.push('/olla-comun')
                }
            })
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    return (
        <>
            <main className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col bg-neutral-700">
                <Navbar/>
                <section
                    className="flex items-center justify-center items-center h-screen ">
                    <form
                        className="rounded-lg w-96 bg-neutral-200 opacity-1 px-10 py-10 flex flex-col"
                        onSubmit={handleIniciarSesion}
                    >
                        <h2 className="text-2xl text-center font-bold mb-4">Iniciar Sesión</h2>
                        <label className="block mb-4">
                            <span className="block text-sm font-medium text-slate-700 ">Número de Documento</span>
                            <input
                                className="border-slate-200 p-3 w-full rounded"
                                onChange={handleChange}
                                // placeholder="12345678"
                                type="text"
                                name="usuario"
                                value={form.usuario}
                                autoFocus
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="block text-sm font-medium text-slate-700 ">Contraseña</span>
                            <input
                                className="border-slate-200 p-3 w-full rounded"
                                onChange={handleChange}
                                type="password"
                                name="password"
                                value={form.password}
                            />
                        </label>

                        <input
                            type="submit"
                            className="w-100 bg-red-400 rounded py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                            value="Iniciar Sesión"/>
                    </form>
                </section>
            </main>
        </>
)
}
export default LoginPage;
