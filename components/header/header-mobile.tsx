import {
  Button,
  CloseButton,
  Drawer,
  Heading,
  HStack,
  Icon,
  Image,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

import {
  NavigationButton,
  navigationButtons,
  RouteEnum,
} from "@/components/utils/header-utils";

export default function HeaderMobile() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <HStack
      pos="fixed"
      top={0}
      w="full"
      h={20}
      justifyContent="space-between"
      bg="#141414"
      px={5}
      zIndex={1000}
      hideFrom="md"
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

      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size="full"
      >
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">
            <Icon size="lg">
              <MdMenu />
            </Icon>
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop opacity={0.9} />
          <Drawer.Positioner opacity={0.9}>
            <Drawer.Content>
              <Drawer.Body>
                <VStack spaceY={10} mt={20}>
                  {navigationButtons.map((button: NavigationButton) => {
                    return (
                      <Button
                        key={button.id}
                        onClick={() => {
                          router.push(button.route);
                          setOpen(false);
                        }}
                        bg="transparent"
                        borderRadius={0}
                        fontSize={24}
                        color={
                          pathname == button.route ? "brand.orange" : "white"
                        }
                      >
                        {button.name}
                      </Button>
                    );
                  })}
                </VStack>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="xl" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  );
}
