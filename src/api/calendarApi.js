import axios from "axios";
import { getEnvVariables } from "../calendar/pages/getEnvVariables";

const {VITE_API_UR} = getEnvVariables()


const calendarApi = axios.create({
    baseURL: VITE_API_UR
});

//config interceptores

export default calendarApi;