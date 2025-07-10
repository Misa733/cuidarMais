import React from "react";
import { Box, Heading, Text, Flex, Spinner, Icon } from "@chakra-ui/react"; //
import { FaExclamationTriangle } from "react-icons/fa";

const Pareamento = () => {
  return (
    <Box
      bg="orange.50" //
      border="2px solid"
      borderColor="orange.200" //
      borderRadius="xl"
      p={6}
      maxW="md"
      mx="auto"
      mt={20} // Top margin to center vertically a bit more
      textAlign="center"
      boxShadow="lg"
    >
      <Icon as={FaExclamationTriangle} w={12} h={12} color="orange.500" mb={4} /> {/* */}
      <Heading as="h2" size="lg" color="orange.700" mb={2}> {/* */}
        Cinta não pareada
      </Heading>
      <Text color="gray.600" mb={6}> {/* */}
        Aguardando conexão com o dispositivo...
      </Text>
      <Flex justify="center" align="center"> {/* */}
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.400"
          size="xl"
        /> {/* */}
      </Flex>
    </Box>
  );
};

export default Pareamento;