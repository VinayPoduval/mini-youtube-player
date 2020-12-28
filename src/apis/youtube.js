import axios from 'axios';

const KEY = 'AIzaSyBMwqg1Vut8PJr71QQzzsmugSox0Ne5wJM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});