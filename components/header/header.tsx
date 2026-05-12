import { Box } from "@chakra-ui/react";

import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";

export default function Header({ children }: any) {
  return (
    <Box bg="rgba(20, 20, 20, 0.98)" h="100vh">
      <HeaderDesktop />
      <HeaderMobile />
      {children}
    </Box>
  );
}
