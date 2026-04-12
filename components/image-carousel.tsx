import type { IconButtonProps } from "@chakra-ui/react";
import {
  AspectRatio,
  Box,
  Carousel,
  Center,
  Heading,
  IconButton,
  Image,
  VStack,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function ImageCarousel() {
  return (
    <Box>
      <Carousel.Root
        slideCount={items.length}
        mx="auto"
        gap="4"
        position="relative"
        colorPalette="white"
        autoplay={{ delay: 2000 }}
        allowMouseDrag
      >
        <Carousel.Control gap="4" width="full" position="relative">
          <Carousel.PrevTrigger asChild bg="brand.orange" hideBelow="lg">
            <ActionButton insetStart="4">
              <LuArrowLeft />
            </ActionButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {items.map((item, index) => (
              <Carousel.Item
                key={"image" + index}
                index={index}
                justifyContent="center"
              >
                <Center>
                  <VStack gap={0} pos="relative">
                    <AspectRatio minW="100vw" ratio={21 / 9}>
                      <Image
                        src={item.url}
                        alt={`Product ${index + 1}`}
                        objectFit="contain"
                      />
                    </AspectRatio>
                    <Box
                      w="full"
                      h="full"
                      pos="absolute"
                      bg="rgba(20, 20, 20, 0.20)"
                      bottom={0}
                      pb={14}
                    >
                      <Heading size="3xl" px={5} textAlign="center" pt={5}>
                        {item.title}
                      </Heading>

                      <Heading size="2xl" px={5} textAlign="center">
                        {item.description}
                      </Heading>
                    </Box>
                  </VStack>
                </Center>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild bg="brand.orange" hideBelow="lg">
            <ActionButton insetEnd="4">
              <LuArrowRight />
            </ActionButton>
          </Carousel.NextTrigger>

          <Box position="absolute" bottom="6" width="full">
            <Carousel.Indicators
              transition="width 0.2s ease-in-out"
              transformOrigin="center"
              opacity="0.5"
              boxSize="2"
              _current={{ width: "10", bg: "brand.orange", opacity: 1 }}
              bg="brand.orange"
            />
          </Box>
        </Carousel.Control>
      </Carousel.Root>
    </Box>
  );
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        ref={ref}
        size="xs"
        variant="outline"
        rounded="full"
        position="absolute"
        zIndex="1"
        bg="bg"
      />
    );
  },
);

const items = [
  {
    url: "./images/Sofa_03Test.png",
    title: "title1",
    description: "description1",
  },
  {
    url: "./images/Sofa_02Test.png",
    title: "title2",
    description: "description2",
  },
  { url: "./images/Sofa_01Test.png", title: "title3", description: "" },
  { url: "./images/Sofa_01Test.png", title: "title4", description: "" },
  { url: "./images/iphone17.png", title: "title5", description: "" },
  {
    url: "./images/Exterior01.png",
    title: "Exterior",
    description: "",
  },
];
