import React, { useState, useEffect } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import CreateCard from "../CreateCard";
import { GetData } from "../../helpers/helpers";
import { nanoid } from "nanoid";
import CardsMap from "../CardsMap";

const YourKeys = () => {
  const { getDatafirebase } = GetData();
  const [cards, SetCards] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getDatafirebase().then((res) => SetCards(res.docs));
  }, []);

  return (
    <>
      <Stack direction="row" h="88vh">
        <Stack color="white" justifyContent="space-around" p={10} bg="#1F2123" top="0">
          <Text as="h2" fontWeight={600} fontFamily="Inter" fontSize="3rem">
            Your Keys
          </Text>
          <Text as="h2" fontWeight={600} fontFamily="Inter" fontSize="3rem">
            Create new
          </Text>
        </Stack>
        <Stack justifyContent="space-around" p={10} w="80%">
          <HStack overflow="scroll" overflowX={cards.length === 0 ? "hidden" : "scroll"} overflowY="hidden" spacing={5} p={3}>
            {cards.length === 0 ? (
              <Text color="#fff" fontWeight={600} fontSize="1.5rem">
                Here show the keys...
              </Text>
            ) : (
              cards.map((keys) => <CardsMap showPassword={showPassword} setShowPassword={setShowPassword} keys={keys} key={nanoid()} />)
            )}
          </HStack>
          <CreateCard showPassword={showPassword} setShowPassword={setShowPassword} SetCards={SetCards} />
        </Stack>
      </Stack>
    </>
  );
};

export default YourKeys;
