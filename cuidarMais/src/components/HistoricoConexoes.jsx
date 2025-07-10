import React from "react";
import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react"; //

const conexoes = [
  { id: 1, data: "2025-06-14 10:10", status: "Conectado" },
  { id: 2, data: "2025-06-14 08:45", status: "Desconectado" },
  { id: 3, data: "2025-06-13 22:20", status: "Conectado" },
];

export function HistoricoConexoes() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="md"
    >
      <Heading as="h3" size="md" mb={4}> {/* */}
        Histórico de Conexões
      </Heading>
      <UnorderedList listStyleType="none" p={0}> {/* */}
        {conexoes.map((item) => (
          <ListItem key={item.id} mb={2} fontSize="sm"> {/* */}
            <Text as="strong" color={item.status === "Conectado" ? "green.600" : "red.600"}> {/* */}
              {item.status}
            </Text>{" "}
            em {item.data}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}