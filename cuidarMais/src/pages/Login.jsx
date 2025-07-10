import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Input,
  Button,
  Stack,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    if (!email || !senha) {
      toast({
        title: 'Preencha todos os campos.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // Simula login
    toast({
      title: 'Login realizado com sucesso!',
      status: 'success',
      duration: 1500,
      isClosable: true,
    });

    setTimeout(() => {
      navigate('/pareamento');
    }, 1600);
  };

  return (
    <Box
      bg="#003d33"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      p={6}
    >
      <Box
        bg="white"
        color="#003d33"
        p={8}
        rounded="xl"
        shadow="lg"
        maxW="400px"
        w="full"
      >
        <Heading mb={6} fontSize="2xl" textAlign="center">
          Login - Cuidar Mais
        </Heading>

        <Stack spacing={4}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button colorScheme="teal" onClick={handleLogin}>
            Entrar
          </Button>

          <Text fontSize="sm" textAlign="center">
            Não tem conta? <strong>Entre em contato com o suporte.</strong>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
