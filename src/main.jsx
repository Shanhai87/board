// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Импорт компонента App
import './index.css'; // Подключаем стили

const root = ReactDOM.createRoot(document.getElementById('root')); // Ищем элемент с id="root" в index.html
root.render(<App />); // Монтируем компонент App в этот элемент

