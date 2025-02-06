# プロジェクト構造

## node_modules

## public

- vite.svg

## src

### assets

- react.svg

### components

- TodoInput.jsx（タスク入力用コンポーネント）
- TodoItem.jsx（個別タスク表示）
- TodoList.jsx（全タスクを管理・表示）

### hooks

- useTodos.js(タスクの状態管理用のカスタムフック)

### styles

- index.css (全体の CSS + Tailwind の基盤)

### ~~App.css(Tailwind 以外の CSS)~~

### App.jsx（アプリの本体。UI の構造を書く）

### main.jsx(エントリーポイント)

## 設定ファイル

- index.html
- tailwind.config.js（Tailwind の設定ファイル）
- eslint.config.js
- package.json
- vite.config.js
