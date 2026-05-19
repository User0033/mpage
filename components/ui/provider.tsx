"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { system } from "@/theme";

export function Provider(props: Readonly<ColorModeProviderProps>) {
  const { children, ...rest } = props;
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...rest}>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
