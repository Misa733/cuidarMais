import React from "react";
import {
  Drawer, //
  DrawerBody, //
  DrawerHeader, //
  DrawerOverlay, //
  DrawerContent, //
  DrawerCloseButton, //
  Button, //
  Text, //
  VStack, //
  IconButton, //
  useDisclosure //
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; //
import { useNavigate } from "react-router-dom"; //

export function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure(); //
  const navigate = useNavigate(); //

  const handleNavigateToPareamento = () => {
    onClose(); //
    navigate("/"); //
  };

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />} //
        onClick={onOpen} //
        aria-label="Abrir Menu"
        position="fixed"
        top={4}
        left={4}
        zIndex={1001}
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        p={2}
        boxShadow="md"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}> {/* */}
        <DrawerOverlay /> {/* */}
        <DrawerContent> {/* */}
          <DrawerCloseButton /> {/* */}
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader> {/* */}
          <DrawerBody> {/* */}
            <VStack spacing={4} align="stretch" mt={4}> {/* */}
              <Button colorScheme="blue" onClick={handleNavigateToPareamento}>
                Novo Pareamento
              </Button>
              {/* Add more menu items here as needed */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}