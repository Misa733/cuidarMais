import React from "react";
import { BpmAtual } from "../components/BpmAtual";
import { HistoricoConexoes } from "../components/HistoricoConexoes";
import { DashboardQuedas } from "../components/DashboardQuedas";
import { MenuDrawer } from "../components/MenuDrawer"; // Changed import to MenuDrawer
import { Box, SimpleGrid, Heading } from "@chakra-ui/react"; //

function Home() {
  return (
    <Box p={5} minH="100vh" bg="gray.50"> {/* */}
      <MenuDrawer /> {/* */}
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="gray.800"> {/* */}
        Painel Principal
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}> {/* */}
        <BpmAtual />
        <HistoricoConexoes />
        <DashboardQuedas />
        {/* You can add more components here for the home dashboard */}
      </SimpleGrid>
    </Box>
  );
}

export default Home;