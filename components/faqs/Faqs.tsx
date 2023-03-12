import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Faqs() {
  return (
    <Box>
      <Container maxW={1200} my="16">
        <Flex flexDirection={{ base: "column", md: "row" }}>
          {/* left section */}
          <Box flex={2} pr="28">
            <Box textAlign={"left"}>
              <Text color={"blue.500"} fontWeight="bold">
                Support
              </Text>
              <Heading fontWeight={"semibold"}>FAQs</Heading>
              <Text fontSize={"20"} py="3">
                Got a questions? We'are here to answere you. If you don't see
                your question here drop us a line on our contact page.
              </Text>
            </Box>
          </Box>
          {/* left section ends above */}
          {/* right section */}
          <Box flex={3}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Which type of courses you offering?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We offering several types of courses on future technologies
                  such as Web 3.0 & Metaverse, Artificial Intelligence,
                  Blockchain, Internet of things, Cloud native computing,
                  Network programmability and automation etc..
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Are you providing Internships for Students ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We have sound internship model in our training programs that
                  gives you an opportunity to work with professionals on live
                  industry projects. It helps you to build your own projects,
                  applications and personal portfolio.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Can I get a good Job after complete any course from
                      panaverse?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Our Skill development Training programs are designed according
                  to need of job market. These programs are supervised and
                  taught by highly industry experienced professionals.
                  INTERNSHIPS
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Button display="block" m="auto" mt="5">
              Show more
            </Button>
          </Box>
          {/* right section ends above */}
        </Flex>
      </Container>
    </Box>
  );
}
