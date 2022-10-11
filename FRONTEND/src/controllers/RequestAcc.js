import axios from "axios";

export const confirmRequest = async (newItem) => {
    const {data} = await axios.post('http://localhost:8090/Student/add', newItem)
    return data;
}