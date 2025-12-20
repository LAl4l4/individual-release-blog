import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // 后续改为从环境注入
  timeout: 5000
});

export default instance;