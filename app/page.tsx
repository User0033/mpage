import ImageCarousel from "@/components/image-carousel";
import OfferSection from "@/components/offer/offer-section";
import { Box, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box h="160rem" bg="rgba(20, 20, 20, 0.98)" pt={20}>
      <ImageCarousel />
      <VStack bg="brand.orange" h={64} justifyContent="center" spaceY={5}>
        <Heading> Why Choose Us?</Heading>
        <Heading>
          We don’t just create images; we create assets that help you win the
          market. You get premium, industry-leading quality at a price point
          designed to scale with your business.
        </Heading>
      </VStack>
      <OfferSection />
    </Box>
  );
}
