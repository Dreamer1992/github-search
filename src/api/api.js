import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
})

export const searchAPI = {
    getSearch(subject) {
        return instance.get(`search/repositories?q=${subject}`)
            .then((res) => res.data)
    },
}
