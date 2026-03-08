import { Heading, VStack } from "@chakra-ui/react";

export default function ChooseUsSection() {
  return (
    <VStack
      bg="brand.orange"
      minH={64}
      maxH="fit-content"
      justifyContent="center"
      spaceY={5}
      p={5}
    >
      <Heading> Why Choose Us?</Heading>
      <Heading>
        We don’t just create images; we create assets that help you win the
        market. You get premium, industry-leading quality at a price point
        designed to scale with your business.
      </Heading>
    </VStack>
  );
}
