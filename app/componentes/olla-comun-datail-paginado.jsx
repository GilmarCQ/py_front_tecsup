import React from "react";
import {anularOllaComun} from "@/app/services/olla-comun";

export const OllaComunDetailPaginado = ({item, index}) => {

    const editarOllaComun = (event) => {
        event.preventDefault()
        console.log(ollaComunLista)
        router.push('/olla-comun/editar/')
    }
    const handleAnularOllaComun = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const id = event.target.value
        if (confirm('¿Esta seguro que desea anular la olla común?')) {
            anularOllaComun(id)
                .then(data => {
                    const {mensaje, valido} = data
                    alert(mensaje)
                    if (valido) {
                        console.log(valido)
                    }
                })
        }
    }

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-100 text-black hover:bg-orange-100"
                key={item.id}>
                <th scope="row"
                    className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                </th>
                <td className="px-2 py-2">
                    {item.nombre}
                </td>
                <td className="px-2 py-2">
                    {item.direccion}
                </td>
                <td className="px-2 py-2 text-center">
                    {/*<button
                        className="text-center rounded bg-emerald-500 hover:bg-emerald-600 text-white
                                                py-1 px-5 font-medium lg:w-1/6 sm:w-full mx-2"
                        onClick={editarOllaComun}
                        value={item.id}
                    >Editar
                    </button>*/}
                    <button
                        className="text-center rounded bg-red-500 hover:bg-red-700 text-white py-1 px-5
                                                font-medium lg:w-1/6 sm:w-full mx-2"
                        onClick={handleAnularOllaComun}
                        value={item.id}
                    >Anular
                    </button>
                </td>
            </tr>
        </>
    )
}