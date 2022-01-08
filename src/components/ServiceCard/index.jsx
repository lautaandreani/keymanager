import React from "react";
import { FormLabel, HStack, Input, InputGroup, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";

const ServiceCard = ({ handleChange, showPassword, setShowPassword, values }) => {
  return (
    <VStack>
      <Text textAlign="left" color="#ffff">
        About Service
      </Text>
      <Stack bg="#1F2123" spacing={3} w="30rem" color="white" p={8} borderRadius="md">
        <HStack justifyContent="space-between">
          <Input type="text" placeholder="Service" name="service" w="10rem" onChange={handleChange} value={values.service === undefined ? "" : values.service} />
          <HStack>
            <Text as="small">Background color</Text>
            <Input type="color" border="none" name="color" onChange={handleChange} w="5rem" />
          </HStack>
        </HStack>
        <InputGroup display="block">
          <FormLabel>Email</FormLabel>
          <Input type="text" placeholder="Type your email" name="email" onChange={handleChange} value={values.email === undefined ? "" : values.email} />
        </InputGroup>
        <FormLabel>Password</FormLabel>
        <InputGroup display="block">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Type your password"
            name="password"
            onChange={handleChange}
            value={values.password === undefined ? "" : values.password}
          />
          <InputRightElement cursor="pointer" children={<AiFillEye color="gray.300" />} onClick={() => setShowPassword(!showPassword)} />
        </InputGroup>
        {/* <Button onClick={handleSubmit}>Submit</Button> */}
      </Stack>
    </VStack>
  );
};

export default ServiceCard;
