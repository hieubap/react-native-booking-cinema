import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8801',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {client};
