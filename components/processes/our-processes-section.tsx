import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import { processeCards } from "@/components/utils/home-utils";
import ProcessCard from "@/components/processes/process-card";

export default function OurProcessesSection() {
  return (
    <Box mt={"64"}>
      <VStack my={10} pb={10}>
        <Heading color="brand.orange">How It Works</Heading>
        <Heading size="5xl">Our Process</Heading>
      </VStack>

      <SimpleGrid columns={4} mx="auto" w="fit-content" gap={12}>
        {processeCards.map((card, index) => {
          return (
            <ProcessCard
              key={card.title}
              title={card.title}
              description={card.description}
              index={index + 1}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
 