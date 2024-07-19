import React from "react";
import { Todo as TodoType } from "./Todos.types";

type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
};

function Todo({ todo, deleteTodo, toggleComplete }: TodoProps) {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div onClick={() => deleteTodo(todo.id)}>delete</div>
    </div>
  );
}

export default Todo;
