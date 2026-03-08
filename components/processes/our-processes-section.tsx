import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import { processeCards } from "@/components/utils/home-utils";
import ProcessCard from "@/components/processes/process-card";

export default function OurProcessesSection() {
  return (
    <Box mt={{ base: 20, lg: 48 }}>
      <VStack my={10} pb={10}>
        <Heading color="brand.orange">How It Works</Heading>
        <Heading size="5xl">Our Process</Heading>
      </VStack>

      <SimpleGrid
        columns={{ xl: 4, sm: 2 }}
        w="full"
        maxW="fit-content"
        mx="auto"
        gap={5}
        px={{ base: 5, lg: 20 }}
      >
        {processeCards.map((card, index) => {
          return (
            <Box px={{ md: 0, sm: 5 }} key={card.title}>
              <ProcessCard
                key={card.title}
                title={card.title}
                description={card.description}
                index={index + 1}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
