import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function ChooseUsSection() {
  return (
    <VStack
      bg="brand.orange"
      minH={64}
      maxH="fit-content"
      justifyContent="center"
      spaceY={5}
      p={5}
      py={10}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        spaceY={{ base: 12, lg: 0 }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack borderRight={{ base: "none", lg: "solid 1px white" }}>
          <Image
            src="./images/choose-us/WeCreate.png"
            alt="Accelerated"
            w={24}
            h={24}
          />
          <Heading color="white" size="lg">
            We Create What AI Can't
          </Heading>

          <Text px="20%" textAlign="center">
            Consistency is the foundation of a premium brand. While AI gives you
            a lucky guess, we provide a controlled 3D pipeline that delivers
            identical, high-fidelity assets across every channel.
          </Text>
        </VStack>

        <VStack borderRight={{ base: "none", lg: "solid 1px white" }}>
          <Image
            src="./images/choose-us/Accelerated.png"
            alt="Accelerated"
            w={24}
            h={24}
          />
          <Heading color="white" size="lg">
            Accelerated time-to-market
          </Heading>

          <Text px="20%" textAlign="center">
            Don't wait months for physical prototyping. We deliver
            photorealistic digital twins and visuals at speed, allowing you to
            launch and sell faster than your competitors.
          </Text>
        </VStack>
        <VStack>
          <Image
            src="./images/choose-us/Accessible.png"
            alt="Accelerated"
            w={24}
            h={24}
          />
          <Heading color="white" size="lg">
            Accessible CGI, Lean Pipeline
          </Heading>

          <Text px="20%" textAlign="center">
            High-end visuals shouldn't be reserved for massive budgets. We
            leverage a streamlined 3D workflow to provide world-class quality
            for everyone at a fraction of the traditional cost
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
}
