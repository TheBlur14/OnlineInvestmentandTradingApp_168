import axios from "axios";

const URI='http://localhost:8080'
const URI1 = 'http://localhost:1199'

const addUser = () => axios.post(`${URI}/re/add`)
const addFeed = () => axios.post(`${URI1}/addfed`)


export {addUser,addFeed}