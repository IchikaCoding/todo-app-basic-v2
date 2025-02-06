// TodoItem.jsx
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline"; // Heroicons のアイコンをインポート

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div
      className={`flex items-center justify-between bg-white rounded-md shadow-md p-4 my-2 transition ${
        todo.completed ? "line-through text-black opacity-50" : ""
      }`}
    >
      {/* チェックボックス */}
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer border-gray-400 focus:ring-2 focus:ring-blue-600 checked:bg-blue-600 checked:border-blue-600"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {/* タスクのテキスト */}
      <span className="flex-1 ml-4 text-gray-800">{todo.text}</span>

      {/* ゴミ箱アイコン */}
      <TrashIcon
        className="h-5 w-5 text-red-500 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
