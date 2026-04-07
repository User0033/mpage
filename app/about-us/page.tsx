import { HStack } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <HStack h="100vh" justifyContent="center" mt={10}>
      <iframe
        title="Untitled"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/8904c7308adb4e9e947b136470503d50/embed"
        height="1200px"
        width="1200px"
      >
        {" "}
      </iframe>{" "}
    </HStack>
  );
}
