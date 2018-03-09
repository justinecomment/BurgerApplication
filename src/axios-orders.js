import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapplication-ff293.firebaseio.com/'});

export default instance;