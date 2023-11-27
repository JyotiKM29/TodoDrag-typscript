import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos ,completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Task</span>
        {todos.map((todo) => (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Task</span>
        {todos.map((todo) => (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

// <div className="todos">
// {todos.map((todo) => (
//   <SingleTodo
//   todos={todos}
//   todo={todo}
//   key={todo.id}
//   setTodos={setTodos}

//   />
// ))}

// </div>
