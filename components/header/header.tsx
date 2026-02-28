import { Box, Button, HStack, Text } from "@chakra-ui/react";

import {
  NavigationButton,
  navigationButtons,
} from "@/components/utils/header-utils";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <Box>
      <HStack
        pos="fixed"
        top={0}
        w="full"
        h={20}
        justifyContent="space-between"
        bg="white"
        px={32}
      >
        <Text fontSize={32} color="black">
          LOGO
        </Text>

        <HStack>
          {navigationButtons.map((button: NavigationButton) => {
            return (
              <Button
                key={button.id}
                onClick={() => {
                  router.push(button.route);
                }}
                variant="linkOrangeButton"
                color={pathname == button.route ? "brand.orange" : undefined}
              >
                {button.name}
              </Button>
            );
          })}
        </HStack>
      </HStack>
      {children}
    </Box>
  );
}
