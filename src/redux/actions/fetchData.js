import axios from 'axios';
import { API_URL } from 'configs/AppConfig';

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
    const url = `${API_URL}users`;
    const request = axios.get(url);

    return {
        type: FETCH_USERS,
        payload: request,
    };
}
