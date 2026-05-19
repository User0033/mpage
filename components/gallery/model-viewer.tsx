"use client";

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ModelViewer() {
  useEffect(() => {
    // Import the component only on the client
    import("@google/model-viewer");
  }, []);

  return (
    <Box style={{ width: "100%", height: "500px" }} border="solid red 2px">
      <model-viewer
        src=".\ar-models\android\AR-Test\PTRCQT26QV5UJQ33.glb" // Your model file in the /public folder
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="/assets/poster.webp"
        shadow-intensity="1"
        style={{ width: "100%", height: "100%" }}
      >
        <button slot="ar-button">👋 View in your space</button>
      </model-viewer>
    </Box>
  );
}
