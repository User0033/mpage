import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import OfferCard from "@/components/offer/offer-card";
import { offerCards } from "@/components/utils/offer-utils";

export type OfferCardType = {
  title: string;
  description: string;
};

export default function OfferSection() {
  return (
    <Box py={10} w="full">
      <VStack my={10} pb={10}>
        <Heading color="brand.orange">Our services</Heading>

        <Heading size="5xl">What we offer</Heading>
      </VStack>
      <SimpleGrid mx={72} gapY={10} gapX={2} minChildWidth="500px">
        {offerCards.map((card: OfferCardType) => {
          return (
            <OfferCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
