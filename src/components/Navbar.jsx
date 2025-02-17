// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // Запрос на сервер для получения данных о пользователе
    fetch('https://team-board.ru/api/profile', {
      method: 'GET',
      credentials: 'include', // Включаем куки в запрос
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Not authorized');
        }
      })
      .then((data) => {
        setUser(data); // Устанавливаем данные о пользователе
      })
      .catch((err) => {
        // console.error(err);
        setUser(null); // Если ошибка, то показываем неавторизованного пользователя
      });
  }, []);
  //   const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='));
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  // const handleLogout = () => {
  //   // Удаляем токен из cookies
  //   document.cookie = 'auth_token=; Max-Age=0; path=/; Secure; HttpOnly; SameSite=Strict';
  //   setIsAuthenticated(false); // Обновление состояния
  //   navigate('/'); // Перенаправление на главную страницу
  // };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl">Главная</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link to="/profile" className="text-white">Профиль</Link>
              <button onClick={handleLogout} className="text-white">Выйти</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">Войти</Link>
              <Link to="/register" className="text-white">Зарегистрироваться</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
