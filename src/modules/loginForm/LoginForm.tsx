import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
};
export default function LoginForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("🚀 ~ file: LoginForm.tsx ~ line 32 ~ onSubmit ~ data", data);
  };

  return (
    <Container>
      <Box as="form" w="360px" p={4} onSubmit={handleSubmit(onSubmit)}>
        <Heading pb={6}>Sign In</Heading>
        <FormControl
          pb={4}
          id="username"
          isRequired
          isInvalid={!!errors.username}
        >
          <FormLabel>Username</FormLabel>
          <Input
            type="email"
            placeholder="Username"
            ref={register({
              required: {
                message: "This field is required",
                value: true,
              },
            })}
            name="username"
          ></Input>
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          pb={4}
          id="password"
          isRequired
          isInvalid={!!errors.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            name="password"
            ref={register({
              required: {
                message: "This field is required",
                value: true,
              },
              minLength: {
                message: "Password must be more than 6 letters",
                value: 6,
              },
            })}
          ></Input>
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
        <Flex justifyContent="space-between" pb={6}>
          <Checkbox colorScheme="blue">Remember me</Checkbox>
          <Link>Forgot password?</Link>
        </Flex>
        <Stack direction="row" spacing={4}>
          <Button
            colorScheme="blue"
            variant="solid"
            size="md"
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </Button>
          <Button colorScheme="blue" variant="outline" size="md">
            Sign up
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
