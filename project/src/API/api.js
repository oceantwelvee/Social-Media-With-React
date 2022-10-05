import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f66bf0a6-7cff-4098-b780-a374da7c1ff6"
    }
})

export const usersAPI = {
    getUsers(currentPage , pageSize) {
        return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data 
        });
    }
}


export const getUsers2 = (currentPage , pageSize) => {
    return instance
    .get(`follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data 
    });
}
