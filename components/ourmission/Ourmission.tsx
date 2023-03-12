import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function CTA() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container
        maxW={1200}
        bg={colorMode == "light" ? "blue.50" : "black"}
        p="10"
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Box flex={3}>
            <Heading>Our Mission</Heading>
            <Text fontSize={"20px"} mt="8">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest,cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </Text>
          </Box>
          <Box flex={1} alignSelf="flex-start">
            <Button colorScheme={"blue"} float="right">
              <Link href="https://www.panaverse.co" target={"_blank"}>
                {" "}
                Details{" "}
              </Link>
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
