import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react"; //

export function BpmAtual() {
  const bpmAtual = 74; // Valor simulado

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="md"
      textAlign="center"
    >
      <Heading as="h3" size="md" mb={2}> {/* */}
        BPM Atual
      </Heading>
      <Text fontSize="5xl" fontWeight="bold" color={bpmAtual > 100 ? "red.500" : "gray.800"}> {/* */}
        {bpmAtual} BPM
      </Text>
    </Box>
  );
}