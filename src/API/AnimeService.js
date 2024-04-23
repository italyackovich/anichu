import axios from "axios"

export default class AnimeService {
    static async getAllAnime() {
        const response = await axios.get('http://localhost:8080/anime')
        return response.data;
    }
    static async getAnimeById(id) {
        const response = await axios.get(`http://localhost:8080/anime/${id}`)
        return response.data;
    }
}