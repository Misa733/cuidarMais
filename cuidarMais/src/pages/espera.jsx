import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SplashContainer = styled.div`
  height: 100vh;
  background-color: #003d33; /* verde escuro */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Segoe UI', sans-serif;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  animation: fadeIn 2s ease-in-out;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #d4af37; /* dourado leve */
  font-weight: 400;
  margin-top: 8px;
  animation: fadeIn 2.5s ease-in-out;
`;

const Espera = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // redireciona para a rota principal
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashContainer>
      <Logo src="/logoCuidarMais.png" alt="Logo Cuidar Mais" />
      <Title>Cuidar Mais</Title>
      <Subtitle>Saúde e Bem-estar</Subtitle>
    </SplashContainer>
  );
};

export default Espera;
