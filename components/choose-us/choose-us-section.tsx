import { Heading, VStack } from "@chakra-ui/react";

export default function ChooseUsSection() {
  return (
    <VStack bg="brand.orange" h={64} justifyContent="center" spaceY={5}>
      <Heading> Why Choose Us?</Heading>
      <Heading>
        We don’t just create images; we create assets that help you win the
        market. You get premium, industry-leading quality at a price point
        designed to scale with your business.
      </Heading>
    </VStack>
  );
}
