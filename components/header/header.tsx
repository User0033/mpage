import { Box } from "@chakra-ui/react";

import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "./header-mobile";

export default function Header({ children }: any) {
  return (
    <Box>
      <HeaderDesktop />
      <HeaderMobile />
      {children}
    </Box>
  );
}
