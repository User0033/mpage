"use client";

import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  NativeSelect,
  RadioGroup,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { toaster, Toaster } from "@/components/ui/toaster";
import {
  ContactFormFormik,
  FormikContactKeys,
  ProjectType,
} from "@/components/utils/contact-utils";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const formik = useFormik<ContactFormFormik>({
    initialValues: {
      name: "",
      email: "",
      message: "",
      needType: null,
      projectType: null,
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(64, "Too Long!")
        .required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string()
        .min(10, "Too Short!")
        .max(256, "Too Long!")
        .required("Message is required"),
      projectType: Yup.number().nonNullable("A project type is required"),
      needType: Yup.string().nonNullable("Must choose an option "),
    }),

    onSubmit: async (values) => {
      try {
        setIsSending(true);
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }).then((res) => {
          setIsSending(false);
          return res;
        });

        const result = await response.json();
        if (result.success) {
          toaster.success({
            title: "Email sent successfully!",
            description: "We'll get back to you soon.",
          });
          formik.resetForm();
        }
      } catch (error) {
        setIsSending(false);
        console.log(error);
        toaster.error({
          title: "Error sending email",
          description:
            "An error occurred while sending your message. Please try again later.",
        });
      }
    },
  });

  return (
    <Box minH="fit-content" h="100vh" bg="rgba(20, 20, 20, 0.98)" py={20}>
      <Toaster />
      <VStack mb={{ base: 0, md: 16 }}>
        <Heading
          textAlign="center"
          w="full"
          size="6xl"
          mt={20}
          color="brand.orange"
        >
          Get in Touch with Foxel {process.env.HOSTINGER_EMAIL}
        </Heading>
        <Heading size="xl" px={5}>
          Fill out the form below, and our team will get back to you
        </Heading>
      </VStack>
      <Box
        borderRadius={{ base: 0, md: 40 }}
        border={{ base: undefined, md: "solid #D07A25 5px" }}
        w="fit-content"
        mx="auto"
        p={{ base: 5, md: 20 }}
        shadow={{ base: undefined, md: "xl" }}
        outline={{ base: "undefined", md: "solid #D07A25 5px" }}
        backgroundImage="url('./images/logobackground.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize="contain"
      >
        <Heading size="2xl" color="brand.orange" my={5}>
          Select Your Path
        </Heading>

        <Field.Root my={5} invalid={formik.errors.name != undefined}>
          <Field.Label>Full Name / Company Name</Field.Label>
          <Input
            border={
              formik.errors.name == undefined
                ? "solid #D07A00 2px"
                : "solid #f87171 2px"
            }
            value={formik.values.name}
            onChange={(e) => {
              formik.setFieldValue(FormikContactKeys.Name, e.target.value);
            }}
          />
          <Field.ErrorText width="full" mt={1}>
            <Field.ErrorIcon w={4} h={4} />
            {formik.errors.name}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root my={5} invalid={formik.errors.email != undefined}>
          <Field.Label>E-Mail Address</Field.Label>
          <Input
            border={
              formik.errors.email == undefined
                ? "solid #D07A00 2px"
                : "solid #f87171 2px"
            }
            value={formik.values.email}
            onChange={(e) => {
              formik.setFieldValue(FormikContactKeys.Email, e.target.value);
            }}
          />
          <Field.ErrorText width="full" mt={1}>
            <Field.ErrorIcon w={4} h={4} />
            {formik.errors.email}
          </Field.ErrorText>
        </Field.Root>

        <Text pb={1}>Project Type</Text>

        <Field.Root invalid={formik.errors.projectType != undefined}>
          <NativeSelect.Root size="md" width="240px">
            <NativeSelect.Field
              placeholder="Select type"
              value={formik.values.projectType ?? ""}
              onChange={(e) => {
                formik.setFieldValue(
                  FormikContactKeys.ProjectType,
                  e.target.value.length == 0 ? null : e.target.value,
                );
              }}
              border="solid 2px"
              borderColor={
                formik.errors.projectType == undefined
                  ? "brand.orange"
                  : "#f87171"
              }
            >
              <option value={ProjectType.InteriorVisualization}>
                Interior Visualization
              </option>
              <option value={ProjectType.ExteriorVisualization}>
                Exterior Visualization
              </option>
              <option value={ProjectType.ProductVisualization}>
                Product Visualization
              </option>
              <option value={ProjectType.ARInteractiveModel}>
                AR / Interactive Model
              </option>
              <option value={ProjectType.Modelling3D}>3D Modelling</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
          <Field.ErrorText width="full" mt={1}>
            <Field.ErrorIcon w={4} h={4} />
            {formik.errors.projectType}
          </Field.ErrorText>
        </Field.Root>

        <Text mt={5}>
          Please choose the option that best fits your current needs
        </Text>

        <Field.Root invalid={formik.errors.needType != undefined}>
          <RadioGroup.Root
            colorPalette="orange"
            my={4}
            value={formik.values.needType?.toString() ?? " "}
            onValueChange={(e) => {
              formik.setFieldValue(FormikContactKeys.NeedType, e.value);
            }}
          >
            <VStack textAlign="start" justifyContent="start">
              <RadioGroup.Item value="I have a few questions first" w="full">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  I have a few questions first
                </RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item
                value="I am ready to book a strategy session"
                w="full"
              >
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  I am ready to book a strategy session
                </RadioGroup.ItemText>
              </RadioGroup.Item>
            </VStack>
          </RadioGroup.Root>
          <Field.ErrorText width="full">
            <Field.ErrorIcon w={4} h={4} />
            {formik.errors.needType}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={formik.errors.message != undefined}>
          <Textarea
            value={formik.values.message}
            onChange={(e) => {
              formik.setFieldValue(FormikContactKeys.Message, e.target.value);
            }}
            placeholder="Enter a Message: e.g., 'Could you provide a breakdown of your rates? Or I need a set of renders for a residential project in Berlin.'"
            border="solid 2px"
            borderColor={
              formik.errors.message == undefined ? "brand.orange" : "#f87171"
            }
            mt={5}
            minH={36}
            resize="none"
          />
          <Field.ErrorText width="full">
            <Field.ErrorIcon w={4} h={4} />
            {formik.errors.message}
          </Field.ErrorText>
        </Field.Root>

        <Button
          w="full"
          mt={5}
          bg="brand.orange"
          color="white"
          type="submit"
          onClick={() => formik.handleSubmit()}
          loading={isSending}
        >
          Send
        </Button>

        <Text mt={5}>
          <Text color="brand.orange" as="span">
            Note:
          </Text>{" "}
          If you are booking a Strategy Session, please have your, Floor Plans,
          or Sketches <br />
          ready to share during our call. We will review them together in
          real-time.
        </Text>
      </Box>
    </Box>
  );
}
