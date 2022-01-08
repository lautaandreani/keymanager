import { FormLabel, HStack, Input, InputGroup, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PreviewCard = ({ values }) => {
  return (
    <VStack>
      <Text textAlign="left" color="#ffff">
        Preview
      </Text>
      <Stack bg={values.color ? values.color : "#1F2123"} spacing={3} w="30rem" color="white" p={8} borderRadius="md">
        <HStack justifyContent="space-between">
          <Text h="2.6rem" w="100%" overflow="hidden" fontSize="1.5rem">
            {values.service}
          </Text>
        </HStack>
        <InputGroup display="block">
          <FormLabel>Email</FormLabel>
          <Text h="2.6rem" borderWidth=".1rem" borderRadius="md" paddingTop=".40rem" paddingLeft=".9rem">
            {values.email}
          </Text>
        </InputGroup>
        <InputGroup display="block">
          <FormLabel>Password</FormLabel>
          <Input type="password" defaultValue={values.password} readOnly />
        </InputGroup>
      </Stack>
    </VStack>
  );
};

export default PreviewCard;
