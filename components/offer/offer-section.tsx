import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import OfferCard from "@/components/offer/offer-card";
import { CardType, offerCards } from "@/components/utils/home-utils";

export default function OfferSection() {
  return (
    <Box py={10} w="full">
      <VStack my={10} pb={10}>
        <Heading color="brand.orange">Our services</Heading>
        <Heading size="5xl">What we offer</Heading>
      </VStack>
      <SimpleGrid
        mx={{ xl: 72, md: 0 }}
        gapY={{ "2xl": 8, base: 5 }}
        gapX={2}
        minChildWidth={{ "2xl": "500px", lg: "300px", base: "200px" }}
        px={5}
      >
        {offerCards.map((card: CardType) => {
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
