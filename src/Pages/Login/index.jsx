import { Box, Button, Center, Text } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import React from "react";

const Login = ({ loginWithRedirect, isLoading }) => {
  return (
    <Center alignItems="center" h="100vh" flexDirection="column">
      <Text as="h2" fontSize="2rem" marginBottom="1rem">
        🔏
      </Text>
      {isLoading ? (
        <Button isLoading height="48px" width="200px">
          Email
        </Button>
      ) : (
        <Button height="48px" width="200px" leftIcon={<FiLogIn />} onClick={() => loginWithRedirect()}>
          Login
        </Button>
      )}
    </Center>
  );
};

export default Login;
