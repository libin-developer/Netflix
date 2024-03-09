import axios from "axios";
import { baseurl } from "./consatants/Const";


const instance =axios.create({
    baseURL: baseurl,
})

export default instance ;