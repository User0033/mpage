import { Box, Button, HStack } from "@chakra-ui/react";

import {
  NavigationButton,
  navigationButtons,
} from "@/components/utils/header-utils";
import { useRouter } from "next/navigation";

export default function Header({ children }: any) {
  const router = useRouter();
  return (
    <Box bg="red" h={20}>
      <HStack>
        {navigationButtons.map((button: NavigationButton) => {
          return (
            <Button
              key={button.id}
              onClick={() => {
                router.push(button.route);
              }}
              //   borderRadius={0}
              //   bg="brand.orange"
              //   color="white"
              variant="orangeButton"
            >
              {button.name}
            </Button>
          );
        })}
      </HStack>
      {children}
    </Box>
  );
}
