import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

export const LoginForm = () => {
  return (
    <FormControl w="300px">
      <Stack>
        <Box>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </Box>
        <Box>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </Box>
        <Box />
        <Button>Login</Button>
      </Stack>
    </FormControl>
  );
};
