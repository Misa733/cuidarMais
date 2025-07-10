import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  Heading,
  Link,
  useToast
} from '@chakra-ui/react';

const CadastroLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || (!isLogin && !nome)) {
      toast({
        title: 'Preencha todos os campos.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: isLogin ? 'Login realizado' : 'Cadastro realizado',
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
          {isLogin ? 'Entrar no Cuidar Mais' : 'Cadastro no Cuidar Mais'}
        </Heading>

        <Stack spacing={4}>
          {!isLogin && (
            <Input
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          )}

          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button colorScheme="teal" onClick={handleSubmit}>
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </Button>

          <Text fontSize="sm" textAlign="center">
            {isLogin ? 'Não tem conta?' : 'Já tem conta?'}{' '}
            <Link
              color="teal.600"
              fontWeight="bold"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Cadastre-se' : 'Entrar'}
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default CadastroLogin;
