"use client"

import React, {useEffect, useState} from "react";
import Navbar from "@/app/componentes/Navbar";
import {anularOllaComun, listarOllasComunes} from "@/app/services/olla-comun";
import {useRouter} from "next/navigation";

const OllaComunPage = () => {

    const router = useRouter()

    const [ollaComunLista, setOllaComunLista] = useState([])

    useEffect(() => {
        listarOllasComunes(0, 20)
            .then(data => {
                const {contenido, valido} = data
                if (valido) {
                    setOllaComunLista(contenido.listado)
                }
            })
    }, []);

    const irAgregarOllaComun = (event) => {
        event.preventDefault()
        router.push('/olla-comun/add')
    }
    const editarOllaComun = (event) => {
        event.preventDefault()
        console.log(ollaComunLista)
        router.push('/olla-comun/editar/')
    }
    const anularOllaComun = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const id = event.target.value
        if (confirm('¿Esta seguro que desea anular la olla común?')) {
            anularOllaComun(id)
                .then(data => {
                    const {mensaje, valido} = data
                    if (valido) {
                        alert(mensaje)
                    }
                })
        }
    }

    return (
        <>
            <h1 className="text-center font-medium text-3xl mt-10 mb-5">OLLAS COMUNES</h1>
            <section className="flex justify-center bg-white mt-5">
                <div className="relative overflow-x-auto w-5/6">
                    <button
                        className="rounded bg-green-500 hover:bg-green-700 hover:text-white py-3 px-20 font-medium sm:w-full lg:w-1/4"
                        onClick={irAgregarOllaComun}>Agregar</button>
                </div>
            </section>
            <section
                className="flex justify-center h-screen bg-white mt-5">
                <div className="relative overflow-x-auto w-5/6">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-600 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Acciones
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            ollaComunLista.map((item, index) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-100 text-black hover:bg-orange-100" key={item.id}>
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.nombre}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.direccion}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                className="text-center rounded bg-emerald-500 hover:bg-emerald-600 text-white
                                                py-1 px-5 font-medium lg:w-1/6 sm:w-full mx-2"
                                                onClick={editarOllaComun}
                                                value={item.id}
                                            >Editar</button>
                                            <button
                                                className="text-center rounded bg-red-500 hover:bg-red-700 text-white py-1 px-5
                                                font-medium lg:w-1/6 sm:w-full mx-2"
                                                onClick={anularOllaComun}
                                                value={item.id}
                                            >Anular</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
export default OllaComunPage;
