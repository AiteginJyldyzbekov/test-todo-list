import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types";
import { addTodos, deleteTodo, fetchTodos } from "./asyncReducers";
import { updateStatus, updateTitle } from "@/api/Api";

interface TodoSliceType {
  data: TodoType[];
  isLoading: boolean;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    isLoading: true,
  } as TodoSliceType,
  reducers: {
    onStatusChange: (state, { payload }: PayloadAction<string | number>) => {
      state.data = state.data.map((item: TodoType) => {
        if (item.id === payload) {
          updateStatus(item.id, item)
          return { ...item, status: !item.status };
        }
        return item;
      });
    },
    onEditTodo: (
      state,
      { payload }: PayloadAction<{ id: number | string; inputValue: string }>
    ) => {
      state.data = state.data.map((item: TodoType) => {
        if (item.id === payload.id) {
          updateTitle(payload.id, payload.inputValue)
          return { ...item, title: payload.inputValue }
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.data = state.data.filter((el: TodoType) => el.id !== action.payload)
    });

    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.data.push(action.payload)
    });

  },
});

export const { onStatusChange, onEditTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
