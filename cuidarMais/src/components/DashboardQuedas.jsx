import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react"; //

const dados = [
  { dia: "Seg", quedas: 1 },
  { dia: "Ter", quedas: 0 },
  { dia: "Qua", quedas: 2 },
  { dia: "Qui", quedas: 0 },
  { dia: "Sex", quedas: 1 },
  { dia: "Sáb", quedas: 3 },
  { dia: "Dom", quedas: 0 },
];

export function DashboardQuedas() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="md"
    >
      <Heading as="h3" size="md" mb={4}> {/* */}
        Riscos de Queda (últimos 7 dias)
      </Heading>
      <Flex gap={2} justify="space-around" alignItems="flex-end"> {/* */}
        {dados.map((item, index) => (
          <Box key={index} textAlign="center">
            <Box
              h={`${item.quedas * 20 + 20}px`} // Add a base height to make 0 visible
              w="20px"
              bg={item.quedas > 0 ? "red.400" : "green.400"} //
              mb={1}
              borderRadius="md" //
            ></Box>
            <Text fontSize="sm" color="gray.600"> {/* */}
              {item.dia}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}