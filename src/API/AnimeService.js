import axios from "axios"

export default class AnimeService {
    static async getAllAnime() {
        try {
            const response = await axios.get('http://localhost:8080/anime')
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    static async getAnimeById(id) {
        try {
            const response = await axios.get(`http://localhost:8080/anime/${id}`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}