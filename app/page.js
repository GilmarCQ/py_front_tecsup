"use client"

import Navbar from "@/app/componentes/Navbar";
import React, {useEffect, useState} from "react";
import {listarOllasComunes} from "@/app/services/olla-comun";
import {OllaComunDetail} from "@/app/componentes/olla-comun-detail";

export default function Home() {
    const [ ollasComunes, setOllasComunes ] = useState([]);
    useEffect(() => {
        listarOllasComunes()
            .then(data => {
                const { valido, contenido } = data
                if (valido) {
                    setOllasComunes(contenido)
                }
            })
    }, []);

    return (
        <main className="mx-auto flex flex-col bg-zinc-600">
            <Navbar/>
            <h1 className="text-center font-medium text-3xl mt-10 mb-5 text-white">OLLAS COMUNES</h1>
            <section className="mt-5 w-full ">
                <div className="flex flex-wrap items-center w-full justify-between gap-4 px-40">
                    {
                        ollasComunes.map((item) => {
                            return (
                                <OllaComunDetail key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </section>

            <section className="mx-auto mt-5 w-5/6 items-center mt-10 text-white ">
                <h5 className="w-full font-bold text-xl mb-3">Contacto</h5>
                <p className="w-2/6"><b>Direccion:</b> Av. Las Torres S/N</p>
                <p className="w-2/6"><b>Telefono:</b> 987654321</p>
                <p className="w-2/6"><b>Correo:</b> entidad@entidad.gob.pe</p>
            </section>

            <section className="mx-auto mt-5 w-5/6 items-center mb-10 text-white ">
                <p className="text-center">Todos los Derechos Reservados</p>
            </section>
        </main>
);
}
