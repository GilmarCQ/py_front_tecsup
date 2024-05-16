import {API_PATH_ENDPOINT} from "@/app/services/api";

export const iniciarSesion = async ({usuario, password}) => {
    const url = API_PATH_ENDPOINT + '/auth/login'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({usuario, password})
    }
    const response = await fetch(url, options)
    return await response.json()
}