import React from "react";
import { Avatar, Button, HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";
import YourKeys from "../../components/YourKeys";
// Firebase

const Home = ({ logout }) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    <Spinner color="#7F5AF0" />;
  }

  return (
    <>
      <Stack as="nav" color="#ffff" direction="row" bg="#39393A" alignItems="center" justifyContent="space-evenly" p="2rem">
        <HStack>
          <Avatar src={user.picture} alt={user.name} borderRadius="full" />
          <Text fontFamily="Inter" fontWeight={600}>
            Welcome {user.nickname}
          </Text>
        </HStack>
        <Button color="white" bg="#7F5AF0" height="48px" width="200px" _hover="" onClick={logout} rightIcon={<FiLogOut />}>
          Logout
        </Button>
      </Stack>
      <YourKeys />
    </>
  );
};

export default Home;
