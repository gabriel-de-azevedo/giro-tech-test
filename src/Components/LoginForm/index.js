import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useToast,
} from '@chakra-ui/react';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../../database/controllers';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateLogin(email, password)) {
      toast({
        title: 'Bem-vindo',
        description: 'Que bom ver você novamente',
        status: 'success',
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      });

      return navigate(`/simulation/${email}`);
    }

    toast({
      title: 'Tente novamente',
      description: 'Credenciais incorretas',
      status: 'error',
      position: 'top-right',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <FormControl
      isRequired
      w="300px"
      borderWidth="1px"
      borderRadius={8}
      p={4}
      shadow="md"
    >
      <Stack spacing={4} as="form" onSubmit={handleLogin}>
        <Box>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<MdEmail />} />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box>
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<RiLockPasswordFill />} />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box />
        <Button type="submit">Login</Button>
      </Stack>
    </FormControl>
  );
};
