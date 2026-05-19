import { ModelViewerElement } from "@google/model-viewer";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}
