import axios from "axios";

export default class CommentService {

    static postComment = async (comment) => {
        try {
            const response = await axios.post(`http://localhost:8080/anime/${comment.anime_id}/comments`, comment)
            return response.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
}