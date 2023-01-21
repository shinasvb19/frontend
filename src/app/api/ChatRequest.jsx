import instance from "./instance";

export const userChats = (id) => instance.get(`/chat/${id}`);
export const getUser = (userId) => instance.get(`/user/${userId}`);
