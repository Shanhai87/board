import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='));
    console.log(token);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Удаляем токен из cookies
    document.cookie = 'auth_token=; Max-Age=0; path=/; Secure; HttpOnly; SameSite=Strict';
    setIsAuthenticated(false); // Обновление состояния
    navigate('/'); // Перенаправление на главную страницу
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl">Главная</Link>
        <div className="space-x-4">
          {isAuthenticated ? (
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
