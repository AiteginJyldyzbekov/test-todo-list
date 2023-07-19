import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddTodos, fetchDeleteTodo, getTodos } from "../api/Api";

export const addTodos = createAsyncThunk("todo/addTodos", async (str: string) => {
    const data = {
      id: Date.now(),
      title: str,
      status: false,
    };
    const res = await fetchAddTodos(data);
    return res.data;
  }
);
// asyncReducer для добавления задачек (далее используем в ExtraReducers)

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await getTodos();
  return res.data;
});
// asyncReducer для получение задачек (далее используем в ExtraReducers)

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id: number | string) => {
    await fetchDeleteTodo(id);
    return id;
  }
);
// asyncReducer для удаления задачки (далее используем в ExtraReducers)
