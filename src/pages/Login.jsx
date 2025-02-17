// /src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем запрос на сервер
    const response = await fetch('https://team-board.ru/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Если авторизация успешна, сохраняем токен в cookies
      document.cookie = `auth_token=${data.token}; path=/; HttpOnly; Secure; SameSite=Strict`;

      // Перенаправляем на главную страницу или страницу профиля
      navigate('/profile');
    } else {
      alert(data.error || 'Ошибка авторизации');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Вход</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Войти</button>
      </form>
    </div>
  );
};

export default Login;
