import axios from "axios";

export default class UserService {

    static async getAllUsers() {
        try {
            const response = await axios.get('http://localhost:8080/users')
            return response.data;
        }
        catch (error) {
            console.log(error.message)
        }  
    }

    static async getById(id) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`)
            return response.data;
        } catch (error) {
            console.log(error.message)
        }
    }

    static async postUser(user) {
        try {
            const response = await axios.post('http://localhost:8080/users', user)
            return response.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }    
}