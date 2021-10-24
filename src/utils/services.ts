import { LoginRes, WinnersType } from '../types/general';

const BASE_URL = 'https://frozen-peak-68797.herokuapp.com/';

const fetchMiddle = async (method: "GET" | "POST",route:string, jsonData: any, token = '') => {
    const url = BASE_URL + route;
    const tokenBearer = token ? `Bearer ${token}` : '';

    if(__DEV__) {
        console.log("------")
        console.log("Fetched url:")
        console.log(url)
        console.log("------")
        console.log("Fetched Token:")
        console.log(tokenBearer)
        console.log("------")
    }

    let response

    if(method === "GET") {
        response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': tokenBearer
            },
        })
    }
    if(method === "POST") {
        response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/jso    n',
                'Accept': 'application/json',
            },
            body: JSON.stringify(jsonData)
        })
    }

    const json = response ? response.text() : ''
    return json

}

const login_email = async (email: string, password: string): Promise<LoginRes> => {
    const res = await fetchMiddle("POST", 'login', {email, password})
    let returnedValue = {
        error: false,
        token: '',
        message: ''
    }

    if(res.includes('Credentials')) {
        returnedValue.error = true    
        returnedValue.message = "login invalido, tente novamente."
    }
    else {
        const json = JSON.parse(res)
        returnedValue.token = JSON.parse(res).Token
    }

    return returnedValue
}

const get_winners = async (token:string): Promise<WinnersType[]> => {
    let res = await fetchMiddle("GET", 'winners', {}, token)
    const winners = JSON.parse(res).winners as unknown as WinnersType[]
    return winners
}

export {
    login_email,
    get_winners
}

