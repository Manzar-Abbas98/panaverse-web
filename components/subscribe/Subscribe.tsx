import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function Newsletter() {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Container
        bg={colorMode == "light" ? "gray.50" : "black"}
        maxW="1200"
        py="14"
      >
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Heading fontWeight={"semibold"}>Subscribe Now</Heading>
            <Text>
              Subscribe us now to get email updates on our new programs,
              courses, workshops, Internships, Jobs & much more.
            </Text>
          </Box>
          <Box>
            <HStack>
              <Input placeholder="Enter your email" />
              <Button width={150}>Subscribe</Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
