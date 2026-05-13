import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import OfferCard from "@/components/offer/offer-card";
import { CardType, offerCards } from "@/components/utils/home-utils";

export default function OfferSection() {
  return (
    <Box
      py={10}
      w="full"
      bg="rgba(20, 20, 20, 0.98)"
      backgroundImage="url('./images/bgPattern.png')"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      bgSize="contain"
    >
      <VStack my={10} pb={10}>
        <Heading color="brand.orange">Our services</Heading>
        <Heading size="5xl">What we offer</Heading>
      </VStack>
      <SimpleGrid
        mx={{ "2xl": 32, md: 32 }}
        gap={{ base: 5, "2xl": 6 }}
        columns={{ base: 1, xl: 2, "2xl": 3 }}
        px={5}
      >
        {offerCards.map((card: CardType) => {
          return (
            <OfferCard
              key={card.title}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
