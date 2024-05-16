import {API_PATH_ENDPOINT} from "@/app/services/api";

export const addOllaComun = async ({nombre, direccion}) => {
    const url = API_PATH_ENDPOINT + '/olla-comun/crear'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre, direccion})
    }
    const response = await fetch(url, options)
    return await response.json()
}

export const listarOllasComunesPaginado = async(page, size) => {
    const url = API_PATH_ENDPOINT + '/olla-comun/listar-paginado'
    const response = await fetch(`${url}?page=${page}&size=${size}&sort_by=nombre&order_by=asc`)
    return await response.json()
}

export const listarOllasComunes = async(page, size) => {
    const url = API_PATH_ENDPOINT + '/olla-comun/listar'
    const response = await fetch(url)
    return await response.json()
}

export const anularOllaComun = async(id) => {
    const url = API_PATH_ENDPOINT + '/olla-comun/anular'

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(url + '?id=' + id, options)
    return await response.json()
}
