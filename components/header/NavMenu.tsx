import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, List, Stack, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavMenu({ horizontal = true }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <List
        fontWeight={"bold"}
        color={colorMode == "light" ? "#4A5568" : "white"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
          fontSize="large"
        >
          <Box>
            {" "}
            <Link href="/">Home</Link>
          </Box>
          <Box>
            <Link href="/about">About</Link>{" "}
          </Box>
          <Box>
            {" "}
            <Link href="/contact">Contact</Link>
          </Box>
        </Stack>
      </List>
    </>
  );
}
