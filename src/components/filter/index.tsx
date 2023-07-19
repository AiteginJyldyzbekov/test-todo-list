import scss from "./Filter.module.scss";

interface PropsType {
  state: string;
  setState: (s: string) => void;
}
const Filter: React.FC<PropsType> = ({ state, setState }) => {
  const handle = (status: string) => {
    setState(status);
  };
  //Изменение состояния фильтрации, чтобы в другой функции отфильтровать массив
  return (
    <div className={scss.wrapper}>
      <button
        className={state === "all" ? scss.activeBtn : scss.checkBtn}
        onClick={() => handle("all")}
      >
        All
      </button>
      <button
        className={state === "completed" ? scss.activeBtn : scss.checkBtn}
        onClick={() => handle("completed")}
      >
        Completed
      </button>
      <button
        className={state === "progress" ? scss.activeBtn : scss.checkBtn}
        onClick={() => handle("progress")}
      >
        Progress
      </button>
    </div>
  );
};

export default Filter;
