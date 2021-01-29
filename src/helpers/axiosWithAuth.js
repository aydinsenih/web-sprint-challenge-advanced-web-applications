import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            authorization: token,
        },
    });
};

export default AxiosWithAuth;
