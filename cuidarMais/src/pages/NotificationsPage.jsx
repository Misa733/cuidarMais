import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react"; //
import { MenuDrawer } from "../components/MenuDrawer"; //

function NotificationsPage() {
  return (
    <Box p={5} minH="100vh" bg="gray.50"> {/* */}
      <MenuDrawer /> {/* */}
      <VStack spacing={4} align="center" justify="center" h="calc(100vh - 120px)"> {/* */}
        <Heading as="h1" size="xl" color="gray.800"> {/* */}
          Página de Notificações
        </Heading>
        <Text fontSize="lg" color="gray.600"> {/* */}
          Receba alertas importantes aqui.
        </Text>
        {/* Add notifications list or settings here */}
      </VStack>
    </Box>
  );
}

export default NotificationsPage;