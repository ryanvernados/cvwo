import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authAPI = {
    login: function(username: string) {
        return api.post('/login', { username });
    }
};

export const topicAPI = {
    getAll: function() {
        return api.get('/topics');
    },
    getById: function(id: number) {
        return api.get(`/topics/${id}`);
    }
}

