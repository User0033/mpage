import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

export default function FeaturedWork() {
  const imageWorks = [
    "./ar/head1.jpg",
    "./ar/head2.jpg",
    "./ar/lantern1.jpg",
    "./ar/lantern2.jpg",
  ];

  return (
    <Box pt={{ base: 5, lg: 20 }} px={{ lg: 20, md: 2 }}>
      <Heading py={10} size="5xl" w="full" textAlign="center" mb={20}>
        Featured Work
      </Heading>
      <SimpleGrid
        columns={{ xl: 2, sm: 1 }}
        w="full"
        mx="auto"
        gap={5}
        gapY={{ base: 5, xl: 8 }}
      >
        {imageWorks.map((src, index) => {
          return (
            <Box key={"image" + index} w="full" px={2}>
              <Image src={src} objectFit="contain" />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
