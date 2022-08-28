import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const authAPI = {
    me() {
        return instance.post<ResponseType>('auth/me', {})
    },
    login(data: LoginParamsType) {
        return instance.post<ResponseType>('auth/login', data)
    },
    updateProfile(model: UpdateProfileType) {
        return instance.put<ResponseType>('auth/me', model)
    },
    logOutProfile() {
        return instance.delete('auth/me')
    },
    registration(model: RegisterType) {
        return instance.post<ResponseType>('auth/register', model)
    }
}


export type UpdateProfileType = {
    name: string,
    avatar: string
}

export type RegisterType = {
    email: string
    password: string
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ResponseType = {

    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created?: Date;
    updated?: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;

}