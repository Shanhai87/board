import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    console.log('Register:', { email, password });
    // Здесь будет запрос к API
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
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
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Подтвердите пароль"
          className="border p-2 w-full mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white p-2 w-full">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
