import { Box, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillEye } from "react-icons/ai";

const CardsMap = ({ keys, showPassword, setShowPassword }) => {
  const { email, password, color, service } = keys.data().dataUser;
  return (
    <Box bg={color} h="16rem" minWidth="30rem" borderRadius="md" fontFamily="Inter" p={3}>
      <Text color="#ffff" mb={5} fontSize="1.8rem">
        {service}
      </Text>
      <Text color="#ffff" mb={1}>
        Email
      </Text>
      <Text color="#ffff" borderWidth="1px" p={2} borderRadius="md" bg="rgba(236, 230, 230, 0.26)" mb={5}>
        {email}
      </Text>
      <Text color="#ffff" mb={1}>
        Password
      </Text>
      {/* <Text color="#ffff" borderWidth="1px" p={2} borderRadius="md" bg="rgba(236, 230, 230, 0.26)">
        {password}
      </Text> */}
      <InputGroup color="#ffff">
        <Input type={showPassword ? "text" : "password"} placeholder="Type your password" readOnly name="password" defaultValue={password} />
        <InputRightElement cursor="pointer" children={<AiFillEye color="gray.300" />} onClick={() => setShowPassword(!showPassword)} />
      </InputGroup>
    </Box>
  );
};

export default CardsMap;
