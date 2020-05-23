import axios from 'axios'
const covid19Api = axios.create({ baseURL: 'https://api.covid19api.com' })
export default covid19Api
