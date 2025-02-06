//App.jsx
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./styles/index.css"; // Tailwindのスタイルをインポート

// 全てのコンポーネントを統合
const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg max-lg:rounded p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Todoアプリ
        </h1>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
