import { Box, Card, Image } from "@chakra-ui/react";
import { CardType } from "@/components/utils/home-utils";

export default function OfferCard({ title, description }: Readonly<CardType>) {
  return (
    <Card.Root flexDirection="row" overflow="hidden" maxW="xl" h="full">
      <Image
        objectFit="cover"
        maxW="40%"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
        display={{ xl: "block", base: "none" }}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
      </Box>
    </Card.Root>
  );
}
