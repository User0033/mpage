import type { IconButtonProps } from "@chakra-ui/react";
import { Box, Carousel, Center, IconButton, Image } from "@chakra-ui/react";
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
        <Carousel.Control gap="4" width="full" position="relative" color="red">
          <Carousel.PrevTrigger asChild bg="brand.orange">
            <ActionButton insetStart="4">
              <LuArrowLeft />
            </ActionButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {items.map((src, index) => (
              <Carousel.Item
                key={"image" + index}
                index={index}
                justifyContent="center"
              >
                <Center>
                  <Image
                    src={src}
                    alt={`Product ${index + 1}`}
                    objectFit="contain"
                    height="800px"
                  />
                </Center>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild bg="brand.orange">
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
  "/images/Sofa_02Test.png",
  "/images/Sofa_01Test.png",
  "/images/Sofa_01Test.png",
  "/images/Sofa_01Test.png",
];
