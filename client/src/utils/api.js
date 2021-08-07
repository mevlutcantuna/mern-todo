import axios from "axios";

export const api = axios.create({
    baseURL:"https://mern-todo-backend-mct.herokuapp.com/"
});

