import ModelViewer from "@/components/gallery/model-viewer";
import { Box, Flex, Heading, HStack } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <Box
      backgroundImage="url('./images/bgPattern.png')"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      bgSize="contain"
      minH="100vh"
      maxH="full"
      pt={32}
      px={{ base: 0, lg: "15rem", "2xl": "30rem" }}
    >
      <Flex overflow="wrap" overflowWrap="wrap">
        <ModelViewer
          src=".\ar-models\android\AR-Test\PTRCQT26QV5UJQ33.glb"
          iosSrc=".\ar-models\ios\AR-Test\PTRCQT26QV5UJQ33.usdz"
          w="700px"
          h="700px"
        />
        <Box>
          <Heading>Model Name</Heading>
        </Box>
      </Flex>
    </Box>
  );
}
