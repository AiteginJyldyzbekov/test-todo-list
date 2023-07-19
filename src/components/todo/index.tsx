import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { deleteTodo } from "../../redux/asyncReducers";
import { onEditTodo, onStatusChange } from "../../redux/todoSlice";
import { TodoType } from "../../types";
import scss from "./Todo.module.scss";

const Todo: FC<TodoType> = (props) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.title);

  const dispatch = useDispatch<AppDispatch>();
  const handleEdit = () => {
    setEdit(!isEdit);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(props.id));
  };

  const handleStatus = () => {
    dispatch(onStatusChange(props.id));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(onEditTodo({ id: props.id, inputValue }));
    setEdit(false);
  };

  return (
    <div className={scss.wrapper}>
      {isEdit ? (
        <form onSubmit={submit}>
          <input value={inputValue} onChange={handleInput} type="text" />
          <button className="mainBtn">Save</button>
        </form>
      ) : (
        <label className={scss.content}>
          <input
            checked={props.status}
            onChange={handleStatus}
            type="checkbox"
          />
          <p className={props.status ? scss.completed : ""}>{props.title}</p>
        </label>
      )}
      <div className={scss.buttonsContainer}>
        <button onClick={handleEdit} className="mainBtn">
          Edit
        </button>
        <button onClick={handleDelete} className="mainBtn">
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
