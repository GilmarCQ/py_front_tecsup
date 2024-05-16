"use client"

import {useState} from "react";
import Navbar from "@/app/componentes/Navbar";
import {addOllaComun} from "@/app/services/olla-comun";
import {useRouter} from "next/navigation";

const OllaComunAddPage = () => {
    const router = useRouter();

    const INITIAL_FORM_STATE = {
        nombre: '',
        direccion: ''
    }

    const [form, setForm] = useState(INITIAL_FORM_STATE)

    const handleAgregarOllaComun = async (event) => {
        event.preventDefault()
        console.log(form)
        const res = await addOllaComun(form)
        const { valido, mensaje } = res
        alert(mensaje)
        if (valido) {
            router.push('/olla-comun')
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }
    const irOllasComunes = () => {
        router.push('/olla-comun')
    }


    return (
        <>
            <section
                className="flex items-center justify-center items-center h-screen bg-white">

                <form
                    className="rounded-lg w-96 bg-neutral-200 opacity-1 px-10 py-10 flex flex-col"
                    onSubmit={handleAgregarOllaComun}
                >
                    <h2 className="text-2xl text-center font-bold mb-4">Agregar Olla Común</h2>
                    <label className="block mb-4">
                        <span className="block text-sm font-medium text-slate-700 ">Nombre</span>
                        <input
                            className="border-slate-200 p-3 w-full rounded"
                            onChange={handleChange}
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            autoFocus
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="block text-sm font-medium text-slate-700 ">Dirección</span>
                        <input
                            className="border-slate-200 p-3 w-full rounded"
                            onChange={handleChange}
                            type="text"
                            name="direccion"
                            value={form.direccion}
                        />
                    </label>

                    <input
                        type="submit"
                        className="w-45 bg-green-400 rounded py-2 hover:bg-green-500 hover:text-white cursor-pointer"
                        value="Agregar"/>
                    <button
                        type="button"
                        className="w-45 bg-red-400 rounded py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                        onClick={irOllasComunes}
                    >Cancelar</button>

                </form>

            </section>
        </>
    )
}
export default OllaComunAddPage;
