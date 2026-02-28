import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box h="160rem" bg="blue" pt={20}>
      <HStack bg="brand.orange" h={64} justifyContent="center" spaceX={20}>
        <VStack>
          <Text fontSize={32}>500+</Text>
          <Text fontSize={16}>Projects Completed</Text>
        </VStack>
        <VStack>
          <Text fontSize={32}>500+</Text>
          <Text fontSize={16}>Projects Completed</Text>
        </VStack>
        <VStack>
          <Text fontSize={32}>500+</Text>
          <Text fontSize={16}>Projects Completed</Text>
        </VStack>
        <VStack>
          <Text fontSize={32}>500+</Text>
          <Text fontSize={16}>Projects Completed</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
