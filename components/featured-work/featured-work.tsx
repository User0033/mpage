import { Box, Center, Heading, Image, SimpleGrid } from "@chakra-ui/react";

export default function FeaturedWork() {
  const imageWorks = [
    "/ar/head1.jpg",
    "/ar/head2.jpg",
    "/ar/lantern1.jpg",
    "/ar/lantern2.jpg",
  ];

  return (
    <Box pt={20} px={20}>
      <Heading py={10} size="5xl" w="full" textAlign="center" mb={20}>
        Featured Work
      </Heading>
      <SimpleGrid columns={2} w="fit-content" mx="auto" gap={5}>
        {imageWorks.map((src, index) => {
          return (
            <Box key={"image" + index} w="fit-content">
              <Image src={src} objectFit="contain" height="800px" />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
