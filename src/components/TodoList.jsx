// TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const TodoList = ({ todos, toggleTodo, deleteTodo, addTodo }) => {
  return (
    <div className="font-bold max-w-md mx-auto mt-10">
      {/* タスクリスト */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
