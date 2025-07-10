import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react"; //
import { MenuDrawer } from "../components/MenuDrawer"; //

function ProfilePage() {
  return (
    <Box p={5} minH="100vh" bg="gray.50"> {/* */}
      <MenuDrawer /> {/* */}
      <VStack spacing={4} align="center" justify="center" h="calc(100vh - 120px)"> {/* */}
        <Heading as="h1" size="xl" color="gray.800"> {/* */}
          Página de Perfil
        </Heading>
        <Text fontSize="lg" color="gray.600"> {/* */}
          Gerencie suas informações de usuário.
        </Text>
        {/* Add user profile details, settings, etc. here */}
      </VStack>
    </Box>
  );
}

export default ProfilePage;