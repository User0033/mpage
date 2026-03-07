import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";

import {
  NavigationButton,
  navigationButtons,
  RouteEnum,
} from "@/components/utils/header-utils";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box>
      <HStack
        pos="fixed"
        top={0}
        w="full"
        h={20}
        justifyContent="space-between"
        bg="#141414"
        px={32}
        zIndex={1000}
      >
        <HStack
          onClick={() => {
            router.push(RouteEnum.Home);
          }}
          cursor="pointer"
        >
          <Image
            src="/images/logo.png"
            objectFit="contain"
            height="50px"
            width="50px"
          />
          <Heading color="brand.orange"> ꜰᴏxᴇʟ ᴠɪꜱᴜᴀʟꜱ</Heading>
        </HStack>

        <HStack>
          {navigationButtons.map((button: NavigationButton) => {
            return (
              <Button
                key={button.id}
                onClick={() => {
                  router.push(button.route);
                }}
                bg="transparent"
                borderRadius={0}
                fontSize={16}
                color={pathname == button.route ? "brand.orange" : "white"}
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
