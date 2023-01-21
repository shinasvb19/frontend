import instance from "./instance";

export const getMessages = (id) => instance.get(`/message/${id}`);

export const addMessage = (data) => instance.post("/message/", data);
