import { Button, Heading, HStack, Image } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

import {
  NavigationButton,
  navigationButtons,
  RouteEnum,
} from "@/components/utils/header-utils";

export default function HeaderDesktop() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <HStack
      pos="fixed"
      top={0}
      w="full"
      h={20}
      justifyContent="space-between"
      bg="#141414"
      px={{ base: 5, xl: 32 }}
      zIndex={1000}
      hideBelow="md"
    >
      <HStack
        onClick={() => {
          router.push(RouteEnum.Home);
        }}
        cursor="pointer"
      >
        <Image
          src="./images/logo.png"
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
              _hover={{ opacity: "0.6" }}
            >
              {button.name}
            </Button>
          );
        })}
      </HStack>
    </HStack>
  );
}
