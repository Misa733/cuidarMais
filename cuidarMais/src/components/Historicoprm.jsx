import React, { useState } from "react";
import {
  Drawer, //
  DrawerBody, //
  DrawerHeader, //
  DrawerOverlay, //
  DrawerContent, //
  DrawerCloseButton, //
  Button, //
  Box, //
  Text, //
  VStack, //
  IconButton, //
  useDisclosure //
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; //
import { useNavigate } from "react-router-dom"; //

const historicoExemplo = [
  { id: 1, data: "2025-06-14 10:15", bpm: 72 },
  { id: 2, data: "2025-06-14 09:50", bpm: 75 },
  { id: 3, data: "2025-06-13 21:20", bpm: 70 },
];

export function HistoricoPrm() {
  const { isOpen, onOpen, onClose } = useDisclosure(); //
  const navigate = useNavigate(); //

  const handleNovoPareamento = () => {
    onClose(); //
    navigate("/"); //
  };

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />} //
        onClick={onOpen} //
        aria-label="Abrir histórico"
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
          <DrawerHeader borderBottomWidth="1px">Histórico de Pareamento</DrawerHeader> {/* */}
          <DrawerBody> {/* */}
            <VStack spacing={4} align="stretch" mt={4}> {/* */}
              {historicoExemplo.length === 0 && <Text>Nenhum pareamento registrado.</Text>}
              {historicoExemplo.map(({ id, data, bpm }) => (
                <Flex
                  key={id}
                  justify="space-between"
                  align="center"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  pb={2}
                  fontSize="md"
                >
                  <Text>{data}</Text>
                  <Text fontWeight="semibold">BPM: {bpm}</Text> {/* */}
                </Flex>
              ))}
            </VStack>
            <Button
              onClick={handleNovoPareamento}
              mt={6}
              colorScheme="green"
              size="lg"
              width="full"
            >
              Novo Pareamento
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}