"use client"

import React, {useEffect, useState} from "react";
import Navbar from "@/app/componentes/Navbar";
import {anularOllaComun, listarOllasComunesPaginado} from "@/app/services/olla-comun";
import {useRouter} from "next/navigation";
import {OllaComunDetailPaginado} from "@/app/componentes/olla-comun-datail-paginado";
import {useAuthStore} from "@/app/store/auth";

const OllaComunPage = () => {
    const { isLogged, tipo } = useAuthStore()

    const router = useRouter()

    const [ollaComunLista, setOllaComunLista] = useState([])
    const [page, setPage] = useState(0)
    const [reload, setReload] = useState(false)
    const [totalPaginas, setTotalPaginas] = useState(1)

    useEffect(() => {
        if (!isLogged && tipo != 'ROC') {
            router.push('/')
        }
        listarOllasComunesPaginado(page, 10)
            .then(data => {
                const {contenido, valido} = data
                if (valido) {
                    setOllaComunLista(contenido.listado)
                    setTotalPaginas(contenido.totalPaginas)
                }
            })
    }, [page, reload]);

    const irAgregarOllaComun = (event) => {
        event.preventDefault()
        router.push('/olla-comun/add')
    }
    const handlePrev = () => {
        if (page === 0) return
        setPage(page - 1)
    }

    const handleNext = () => {
        if (page + 1 === totalPaginas) return
        setPage(page + 1)
    }

    return (
        <>
            <h1 className="text-center font-medium text-3xl mt-10 mb-3">OLLAS COMUNES</h1>
            <section className="flex justify-center bg-white mt-3">
                <div className="relative overflow-x-auto w-5/6">
                    <button
                        className="rounded bg-green-500 hover:bg-green-700 hover:text-white py-2 px-20 font-medium sm:w-full lg:w-1/4"
                        onClick={irAgregarOllaComun}>Agregar
                    </button>
                </div>
            </section>
            <section
                className="flex justify-center bg-white mt-5">
                <div className="relative overflow-x-auto w-5/6">
                    <table className="w-full text-sm text-left">
                        <thead
                            className="text-xs uppercase bg-gray-600 text-white text-sm">
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
                                    <OllaComunDetailPaginado key={item.id} item={item} index={index} />
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>

            <section
                className="flex justify-center bg-white mt-5">
                <div className="flex justify-center w-5/6">
                    <button
                        className="p-2 bg-cyan-600 text-white rounded font-bold px-5 min-w-20"
                        onClick={handlePrev}
                    >
                        Anterior
                    </button>
                    <span className="align-middle mx-4">Pagina {page + 1} de {totalPaginas}</span>
                    <button
                        className="p-2 bg-cyan-600 text-white rounded font-bold px-5 min-w-20"
                        onClick={handleNext}
                    >
                        Siguiente
                    </button>
                </div>
            </section>
        </>
    )
}
export default OllaComunPage;
