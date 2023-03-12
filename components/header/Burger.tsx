import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";

export default function Burger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box onClick={onOpen}>
        <GiHamburgerMenu size={25} />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Panaverse</DrawerHeader>
          <DrawerBody>
            <NavMenu />
          </DrawerBody>
          <DrawerFooter>
            <Image width={100} height={51} src="../images/logo.png" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
