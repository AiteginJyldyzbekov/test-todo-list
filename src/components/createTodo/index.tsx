import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { addTodos } from "../../redux/asyncReducers";
import scss from "./CreateTodo.module.scss";

const CreateTodo: FC = () => {
  const [inputValue, setInputValue] = useState("");
   
  const dispatch = useDispatch<AppDispatch>()
  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputValue) {
      dispatch( addTodos(inputValue) )
      setInputValue('')
    }
  }
  //Добавление задачки

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  //Берем значение инпута в состояние

  return (
    <form onSubmit={submit} className={scss.wrapper}>
      <input value={inputValue} onChange={handleChange} className="mainInput" placeholder="Add some todo" type="text" />
      <button className="mainBtn">+Add</button>
    </form>
  );
};

export default CreateTodo;
