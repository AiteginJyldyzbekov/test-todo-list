import axios from "axios";
import { TodoType } from "../types";

const API_URL = axios.create({
  baseURL: "https://64b06f28c60b8f941af5b5ae.mockapi.io/"
})

export const getTodos = () => API_URL.get('todos')
export const fetchDeleteTodo = (id: number | string) => API_URL.delete('todos/' + id)
export const fetchAddTodos = (data: TodoType) => API_URL.post('todos', data)

export const updateTitle = async (id: number | string, newTitle: string) => {
  try {
    const response = await API_URL.put(`/todos/${id}`, { title: newTitle });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (id: number | string, todo: TodoType) => {
  try {
    const response = await API_URL.put(`/todos/${id}`, { status: !todo.status });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};