import Header from "@/components/header";
import ThemeToggle from "@/components/toggleTheme";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux";
import { fetchTodos } from "@/redux/asyncReducers";
import { TodoType } from "@/types";
import Todo from "@/components/todo";
import CreateTodo from "@/components/createTodo";
import Filter from "@/components/filter";
import Preloader from "@/components/preloader";

export default function Home() {
  const todosArray = useSelector((state: RootState) => state.data);
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  //Фильтрация задач
  const newTodos = todosArray
    .filter((item: TodoType) => {
      if (filter === "all") return item;
      if (filter === "completed" && item.status) return item;
      if (filter === "progress" && !item.status) return item;
    })
    .map((item: TodoType) => <Todo key={item.id} {...item} />);
  const completedTodos = todosArray.reduce(
    (acc: number, item: TodoType) => acc + Number(item.status),
    0
  );
  return (
    //Suspense вместе с lazy load, для прелоадера и для небольшой оптимизации
    <Suspense fallback={<Preloader full />}> 
      <ThemeToggle />
      <div className="App">
        <Header todos={todosArray.length} completedTodos={completedTodos} />
        <div className="content">
          <CreateTodo />
          <Filter state={filter} setState={setFilter} />
          <div className="todosWrapper">{newTodos}</div>
        </div>
      </div>
    </Suspense>
  );
}
