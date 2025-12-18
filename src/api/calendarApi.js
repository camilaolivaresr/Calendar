import axios from "axios";
import { getEnvVariables } from "../calendar/pages/getEnvVariables";

const {VITE_API_URL} = getEnvVariables()


const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

//config interceptores

export default calendarApi;