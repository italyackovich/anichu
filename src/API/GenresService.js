import axios from "axios";

export default class GenresService {

    static getAllGenres = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/anime/genres`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}