import axios from "axios"

export const getWeather = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=20")
        return res.data
    } catch (error) {
        throw error
    }
}

export const createTodo = async (title) => {
    try {
        const res = axios.post("https://jsonplaceholder.typicode.com/todos/", {
            userId: 1,
            title: title,
            completed: false
        })
        return res
    } catch (error) {
        throw error
    }
}