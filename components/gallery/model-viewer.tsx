"use client";

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

type ModelViewerProps = {
  src: string;
  iosSrc: string;
  w: string;
  h: string;
};

export default function ModelViewer({
  src,
  iosSrc,
  w = "100%",
  h = "500px",
}: Readonly<ModelViewerProps>) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <Box
      style={{ width: w, height: h }}
      border="solid 4px"
      borderColor="brand.orange"
    >
      <model-viewer
        src={src}
        ios-src={iosSrc}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="/assets/poster.webp"
        shadow-intensity="20"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <button
          slot="ar-button"
          style={{
            right: 20,
            background: "#D07A25",
            padding: "6px 12px",
            margin: "auto",
            width: "100%",
          }}
        >
          View in your space
        </button>
      </model-viewer>
    </Box>
  );
}
