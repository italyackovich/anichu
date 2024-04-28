import axios from "axios";

export default class UserService {

    static async getAllUsers() {
        try {
            const response = await axios.get('http://localhost:8080/users')
            return response.data;
        }
        catch (e) {
            console.log(e)
        }  
    }

    static async postUser(user) {
        try {
            const response = await axios.post('http://localhost:8080/users', user)
            return response.data;
        }
        catch (e) {
            console.log(e)
        }
    }    
}