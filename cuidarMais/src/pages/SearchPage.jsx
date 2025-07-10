import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react"; //
import { MenuDrawer } from "../components/MenuDrawer"; //

function SearchPage() {
  return (
    <Box p={5} minH="100vh" bg="gray.50"> {/* */}
      <MenuDrawer /> {/* */}
      <VStack spacing={4} align="center" justify="center" h="calc(100vh - 120px)"> {/* */}
        <Heading as="h1" size="xl" color="gray.800"> {/* */}
          Página de Busca
        </Heading>
        <Text fontSize="lg" color="gray.600"> {/* */}
          Aqui você poderá pesquisar por informações.
        </Text>
        {/* Add search bar or other search related components here */}
      </VStack>
    </Box>
  );
}

export default SearchPage;