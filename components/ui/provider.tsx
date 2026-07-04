"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { system } from "@/theme";
import { useEffect } from "react";

import { usePathname } from "next/navigation";
import { RouteToTabName } from "../utils/router-utils";

export function Provider(props: Readonly<ColorModeProviderProps>) {
  const { children, ...rest } = props;

  const pathname = usePathname();

  useEffect(() => {
    document.title = RouteToTabName[pathname] || "Foxel Visuals";
  }, [pathname]);

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...rest}>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
