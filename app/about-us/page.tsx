import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import PersonCard from "@/components/about-us/person-card";

export default function AboutUs() {
  const people = [
    {
      name: "John Doe",
      role: "CEO",
      description:
        "John is the visionary behind our company, leading us with passion and dedication.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description:
        "Jane is the technical mastermind, ensuring our products are innovative and reliable.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "John Doe",
      role: "CEO",
      description:
        "John is the visionary behind our company, leading us with passion and dedication.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description:
        "Jane is the technical mastermind, ensuring our products are innovative and reliable.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "John Doe",
      role: "CEO",
      description:
        "John is the visionary behind our company, leading us with passion and dedication.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description:
        "Jane is the technical mastermind, ensuring our products are innovative and reliable.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "John Doe",
      role: "CEO",
      description:
        "John is the visionary behind our company, leading us with passion and dedication.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description:
        "Jane is the technical mastermind, ensuring our products are innovative and reliable.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  return (
    <Box
      pt={12}
      px={{ base: "10%", xl: "20%" }}
      backgroundImage="url('./images/bgPattern.png')"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      bgSize="contain"
    >
      <Heading
        textAlign="center"
        w="full"
        size="4xl"
        mt={20}
        color="brand.orange"
      >
        The Foxel Story: Strategic Quality, Local Roots
      </Heading>

      <Text w="full" textAlign="start" mt={10} fontSize={24}>
        Based in North Macedonia, Foxel Visuals is a visualization company
        founded on a simple realization: the global market deserves professional
        architectural assets without the friction or inflated costs of
        large-scale agencies. We are a dedicated team of specialists who believe
        that every Interior, Exterior, AR-models, 3D Modeling, PBR Materials
        should be a high-impact asset that helps you win your market. By
        leveraging our strategic location, we provide high-tier modeling,
        texturing, and rendering at fair, transparent prices. We bring your
        vision to life with technical precision, a "get-it-done" attitude, and a
        relentless work ethic that ensures your project moves from blueprint to
        reality on schedule.
      </Text>

      <Flex mt={32} wrap="wrap" gapX={10} gapY={5}>
        {people.map((person) => (
          <PersonCard
            key={person.name}
            name={person.name}
            role={person.role}
            description={person.description}
            imageUrl={person.imageUrl}
          />
        ))}
      </Flex>
    </Box>
  );
}
