import {
  Box,
  createListCollection,
  Field,
  Heading,
  Input,
  Portal,
  RadioGroup,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
  const frameworks = [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ];

  return (
    <Box h="100vh" bg="rgba(20, 20, 20, 0.98)" pt={20}>
      <VStack mb={16}>
        <Heading
          textAlign="center"
          w="full"
          size="6xl"
          mt={20}
          color="brand.orange"
        >
          Get in Touch with Foxel
        </Heading>
        <Heading size="xl">
          Fill out the form below, and our team will get back to you
        </Heading>
      </VStack>
      <Box
        borderRadius={40}
        border="solid #D07A25 5px"
        w="fit-content"
        mx="auto"
        p={20}
        shadow="xl"
        outline="solid #D07A25 5px"
      >
        <Field.Root my={5}>
          <Field.Label>Full Name / Company Name</Field.Label>
          <Input border="solid #D07A00 2px" />
        </Field.Root>

        <Field.Root my={5}>
          <Field.Label>E-Mail Address</Field.Label>
          <Input border="solid #D07A00 2px" />
        </Field.Root>

        <Text>Project Type</Text>

        <Heading size="2xl" color="brand.orange" my={5}>
          Select Your Path
        </Heading>

        <Text>
          Please choose the option that best fits your current needs:{" "}
        </Text>

        <RadioGroup.Root colorPalette="orange" my={4}>
          <VStack textAlign="start" justifyContent="start">
            <RadioGroup.Item value="question" w="full">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>
                I have a few questions first.
              </RadioGroup.ItemText>
            </RadioGroup.Item>

            <RadioGroup.Item value="strategy" w="full">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>
                I am ready to book a strategy session
              </RadioGroup.ItemText>
            </RadioGroup.Item>
          </VStack>
        </RadioGroup.Root>

        <Textarea
          placeholder="Message content"
          border="solid #D07A00 2px"
          mt={5}
          minH={36}
        />
      </Box>
    </Box>
  );
}
