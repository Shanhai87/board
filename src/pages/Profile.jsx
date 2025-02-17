import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='));
    
    if (!token) {
      navigate('/login'); // Если токен не найден, перенаправляем на страницу логина
    } else {
      // Здесь можно сделать запрос к серверу для получения данных пользователя
      // используя токен для аутентификации
      fetch('https://team-board.ru/profile', {
        headers: {
          'Authorization': `Bearer ${token.split('=')[1]}`,
        },
      })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => {
          console.error('Error fetching profile:', err);
          navigate('/login'); // Перенаправляем на страницу логина в случае ошибки
        });
    }
  }, [navigate]);

  if (!user) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Добро пожаловать, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
