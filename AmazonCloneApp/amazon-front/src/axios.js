import axios from "axios";
const instance = axios.create({
    baseURL: "https://drab-gray-scarab-tie.cyclic.app",
});
export default instance;
