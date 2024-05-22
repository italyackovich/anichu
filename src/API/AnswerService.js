import axios from "axios";

export default class AnswerService {

    static postAnswer = async (comment, answer) => {
        try {
            const response = await axios.post(`http://localhost:8080/anime/${comment.anime_id}/comments/${comment.id}/answers`, answer)
            return response.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    static getAnswersByCommentId = async (comment) => {
        try {
            const response = await axios.get(`http://localhost:8080/anime/${comment.anime_id}/comments/${comment.id}/answers`)
            return response.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
}