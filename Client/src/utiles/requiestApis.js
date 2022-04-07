import axiosInstance from '../config/axiosconfig.js'

export const getMethod = async (url) => {
    const response = await axiosInstance.get(url)
    return response
}

export const postMethod = async (url, payload) => {
    const response = await axiosInstance.post(url, payload)
    return response
}


export const putMethod = async (url, payload) => {
    const response = await axiosInstance.put(url, payload)
    return response
}