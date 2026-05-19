import ModelViewer from "@/components/gallery/model-viewer";
import { Box } from "@chakra-ui/react";

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
    >
      <ModelViewer />
    </Box>
  );
}
