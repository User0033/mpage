import { Box, Card, Image } from "@chakra-ui/react";
import { CardType } from "@/components/utils/home-utils";

export default function OfferCard({
  title,
  description,
  imageSrc,
}: Readonly<CardType>) {
  return (
    <Card.Root
      flexDirection={{ base: "column", md: "row" }}
      w="full"
      maxH="fit-content"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "full", md: "40%" }}
        src={imageSrc}
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{title}</Card.Title>
          <Card.Description fontSize={18}>{description}</Card.Description>
        </Card.Body>
      </Box>
    </Card.Root>
  );
}
