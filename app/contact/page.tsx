"use client";
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Input,
  Heading,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";

export default function contact() {
  return (
    <Box ml={20}>
      <Heading mb="5"> Contact Us </Heading>

      <FormControl isRequired mb="5">
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="Full Name" w="50%" />
      </FormControl>

      <FormControl as="fieldset" isRequired mb="5">
        <FormLabel as="legend">Select Your Gender</FormLabel>
        <RadioGroup>
          <HStack spacing="24px">
            <Radio value="ml">Male</Radio>
            <Radio value="fl">Female</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired mb="5">
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="abc@gmail.com" w="50%" />
      </FormControl>

      <FormControl isRequired mb="5">
        <FormLabel>Message</FormLabel>
        <Input
          type="text"
          placeholder="Type Your Text Here...."
          w="50%"
          h={100}
        />
      </FormControl>

      <Button colorScheme="teal" variant="solid">
        Submit
      </Button>
    </Box>
  );
}
