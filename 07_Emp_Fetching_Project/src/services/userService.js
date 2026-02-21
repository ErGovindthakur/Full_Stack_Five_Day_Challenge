import api from "../api/axiosInstance";

export const getUser = () => api.get("/users");
export const createUser = (user) => api.post("/users",user);
export const updateUser = (id,user) => api.patch(`/users/${id}`,user);
export const deleteUser = (id) => api.delete(`/user/${id}`);