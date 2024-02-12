import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";

export const getUserData = async () => {
    return await axios.get(`${API_BASE_URL}/users`).then((response) => {
        return response.data;
    })
}