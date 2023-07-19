import scss from "./Header.module.scss";

interface PropsType {
  completedTodos: number;
  todos: number;
}
const Header: React.FC<PropsType> = ({completedTodos, todos}) => {
  return (
    <header className={scss.wrapper}>
      <h1>
        Todos ({completedTodos} / {todos})
        {/* Показываем количество выполненных и общее количество задач */}
      </h1>
    </header>
  );
};

export default Header;
