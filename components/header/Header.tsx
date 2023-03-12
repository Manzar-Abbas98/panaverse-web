"use client";

import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  Image,
  Link,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";
import NavMenu from "./NavMenu";
import Burger from "./Burger";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Box as="header" position={"sticky"} top="0" zIndex={1}>
      {/* left area */}
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        bg={colorMode == "dark" ? "black" : "white"}
        px="50"
      >
        <Box>
          <HStack>
            <Image src="/images/logo.png" alt="logo" mr="50" />
            <Hide below="md">
              <HStack spacing={10} pl="10">
                <NavMenu />
              </HStack>
            </Hide>
          </HStack>
        </Box>
        {/* right area */}
        <HStack>
          <Box pr="35">
            <SearchIcon w="27" h="30" />
          </Box>

          <ColorModeSwitcher />
          <Box pr={15}>
            <Show below="md">
              <Burger />
            </Show>
          </Box>
          <Link href="http://piaic.org/" target={"_blank"}>
            <Button variant={"outline"}>Go to Piaic</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
