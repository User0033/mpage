import { Box, Card, Image, Text } from "@chakra-ui/react";

type PersonCardProps = {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
};

export default function PersonCard({
  name,
  role,
  description,
  imageUrl,
}: Readonly<PersonCardProps>) {
  return (
    <Box>
      <Card.Root maxW="sm" overflow="hidden">
        <Image src={imageUrl} alt="Green double couch with wooden legs" />
        <Card.Body gap="2">
          <Card.Title>{name}</Card.Title>
          <Card.Description color="brand.orange" fontWeight="bold">
            {role}
          </Card.Description>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {description}
          </Text>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
