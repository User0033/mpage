import { Avatar, Card } from "@chakra-ui/react";
import { CardType } from "@/components/utils/home-utils";

export default function ProcessCard({
  title,
  description,
  index,
}: Readonly<CardType> & { index: number }) {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          {index}
        </Avatar.Root>
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
