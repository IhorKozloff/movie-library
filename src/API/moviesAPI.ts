import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8b9c2b35d1bc0d9e8879c4faa9dd8b75';

export async function getTrailerKey (movieID: number): Promise<string | undefined> {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`);
        return response.data.results[0].key;
    } catch (error) {
        console.log('Упс, ошибочка вышла');
        console.error(error);
    }
}