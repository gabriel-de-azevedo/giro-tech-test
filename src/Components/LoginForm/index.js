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
    <FormControl
      isRequired
      w="300px"
      borderWidth="1px"
      borderRadius={8}
      p={4}
      shadow="md"
    >
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
