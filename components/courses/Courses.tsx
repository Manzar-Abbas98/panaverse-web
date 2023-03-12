import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Button,
  Center,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbCloudComputing } from "react-icons/tb";
import { SiHiveBlockchain, SiSmartthings } from "react-icons/si";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Highlights() {
  return (
    <Box py="50" as="section">
      {/* top header */}

      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Courses
        </Text>
        <Heading fontWeight={"semibold"}>Available Programs</Heading>
        <Text fontSize={"20"} py="3">
          Technology has the power to do many things, including changing the
          world we live in and the way we live too.
        </Text>
      </Box>
      <Container maxW={1200}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
          <Card align="center">
            <CardHeader>
              <Center color={"blue.500"}>
                <GiArtificialIntelligence size={70} />
              </Center>

              <Heading size="md" mt="5">
                {" "}
                Artificial Intelligence
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={"center"}>
                A one year AI program designed for absolute beginners. Getting
                pakistan ready for the new era of computing enabled by the rise
                of AI.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">
                <Link
                  href="https://www.piaic.org/artificial-inteligence"
                  target={"_blank"}
                >
                  Enroll Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color={"blue.500"}>
                <TbCloudComputing size={70} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Cloud Native Computing
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A one year cloud computing program designed for absolute
                beginners. Getting pakistan ready for the new era of multi-cloud
                native computing.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">
                <Link
                  href="https://www.piaic.org/cloud-native"
                  target={"_blank"}
                >
                  Enroll Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color={"blue.500"}>
                <SiHiveBlockchain size={70} />
              </Center>
              <Heading size="md" mt="5">
                Blockchain Specialist
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A one year blockchain program designed for absolute beginners
                getting pakistan ready for the new era of blockchain and smart
                contracts.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">
                <Link
                  href="https://www.piaic.org/block-chain"
                  target={"_blank"}
                >
                  Enroll Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color={"blue.500"}>
                <SiSmartthings size={70} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Internet of Things
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A fifteen months IOT and AI program designed for absolute
                beginners getting pakistan ready for the new era of internet of
                things and AI.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">
                {" "}
                <Link href="https://www.piaic.org/iot" target={"_blank"}>
                  Enroll Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
