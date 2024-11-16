import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {

      navigate('/');
    }
  }, [navigate]);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    navigate('/home');
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de login fixo
    const loginFixo = "admin";
    const senhaFixa = "admin";

    if (username === loginFixo && password === senhaFixa) {
      const fakeToken = 'fake-auth-token'; 
      login(fakeToken);
      alert("Login efetuado com sucesso!");
    } else {
      alert("Login inválido");
    }
  };

  return (
    <section className="login">
      <div>
        <div className="sessenta"></div>
        <div className="login-teste">
          <p className="login-text">Login</p>
          <div className="login-form">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Digite seu usuário"
              className="login-input"
            />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
              className="login-input"
            />
            <a className="esquece-senha">Esqueceu sua senha?</a>
            <button className="login-btn" onClick={handleSubmit}>Entrar</button>
            <a className="nao-tem-conta">
              Não tem conta? <span className="crie-conta">Criar Conta</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;