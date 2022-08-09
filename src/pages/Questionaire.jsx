// @ts-check
// import { useState } from "react";
// import Logo from "../assets/logo.jpeg";
import * as React from "react";
import {
  Container,
  Group,
  Button,
  Select,
  TextInput,
  Center,
  Paper,
  Space,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

export default function Questionaire() {
  let navigate = useNavigate();
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      location: "",
      diet: "",
      redMeat: "",
      seaFood: "",
      dairy: "",
      throwFood: "",
    },

    validate: {
      firstName: (value) =>
        /^[A-Za-z]+$/.test(value) ? null : "Invalid value",
      lastName: (value) => (/^[A-Za-z]+$/.test(value) ? null : "Invalid value"),
      location: (value) => (/^india$/.test(value) ? null : "Invalid value"),
      diet: (value) =>
        /^(eat-everything|pescatarian|semi-vegetarian|vegetarian|vegan)$/.test(
          value
        )
          ? null
          : "Invalid value",
      redMeat: (value) =>
        /^(none|few-times-a-week|most-days|everyday)$/.test(value)
          ? null
          : "Invalid value",
      seaFood: (value) =>
        /^(none|few-times-a-week|most-days|everyday)$/.test(value)
          ? null
          : "Invalid value",
      dairy: (value) =>
        /^(none|few-times-a-week|most-days|everyday)$/.test(value)
          ? null
          : "Invalid value",
      throwFood: (value) =>
        /^(never|rarely|sometimes|often)$/.test(value) ? null : "Invalid value",
    },
  });

  React.useEffect(() => {
    if(localStorage.getItem("userInfo")) {
      navigate("/home")
    }
  }, [])

  return (
    <Container mt={30} mb={30}>
      <Center
        style={{
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Title style={{ color: 'white' }}>SusFood</Title>
        <Text color="white">Get Started</Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={form.onSubmit((values) => {
              const jsonValues = JSON.stringify(values);

              localStorage.setItem("userInfo", jsonValues);
              navigate("/result");
            })}
          >
            <Center>
              <TextInput
                required
                label="First Name"
                placeholder="First Name"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                required
                label="Last Name"
                placeholder="Last Name"
                {...form.getInputProps("lastName")}
              />
            </Center>

            <Space h="sm"></Space>

            <Select
              required
              label="Where do you live?"
              placeholder="Location"
              data={[{ value: "india", label: "India" }]}
              {...form.getInputProps("location")}
            />

            <Space h="sm"></Space>

            <Select
              required
              label="What kind of diet you have?"
              placeholder="Diet"
              data={[
                { value: "eat-everything", label: "Eat Everything" },
                { value: "pescatarian", label: "Pescatarian" },
                { value: "semi-vegetarian", label: "Semi-Vegetarian" },
                { value: "vegetarian", label: "Vegetarian" },
                { value: "vegan", label: "Vegan" },
              ]}
              {...form.getInputProps("diet")}
            />

            <Space h="sm"></Space>

            <Select
              required
              label="How often do you eat red meat?"
              placeholder="How often?"
              data={[
                { value: "none", label: "None" },
                { value: "few-times-a-week", label: "A Few times a week" },
                { value: "most-days", label: "Most Days" },
                { value: "everyday", label: "Everyday" },
              ]}
              {...form.getInputProps("redMeat")}
            />

            <Space h="sm"></Space>

            <Select
              required
              label="How often do you eat white meat or sea food?"
              placeholder="How often?"
              data={[
                { value: "none", label: "None" },
                { value: "few-times-a-week", label: "A Few times a week" },
                { value: "most-days", label: "Most Days" },
                { value: "everyday", label: "Everyday" },
              ]}
              {...form.getInputProps("seaFood")}
            />

            <Space h="sm"></Space>

            <Select
              required
              label="How often do you eat dairy or eggs?"
              placeholder="How often?"
              data={[
                { value: "none", label: "None" },
                { value: "few-times-a-week", label: "A Few times a week" },
                { value: "most-days", label: "Most Days" },
                { value: "everyday", label: "Everyday" },
              ]}
              {...form.getInputProps("dairy")}
            />

            <Space h="sm"></Space>

            <Select
              required
              label="How often do you throw food?"
              placeholder="How often?"
              data={[
                { value: "never", label: "Never" },
                { value: "rarely", label: "Rarely" },
                { value: "sometimes", label: "Sometimes" },
                { value: "often", label: "Often" },
              ]}
              {...form.getInputProps("throwFood")}
            />

            <Space h="sm"></Space>

            <Group position="right" mt="md">
              <Button type="submit" fullWidth color="teal">
                Submit
              </Button>
            </Group>
          </form>
        </Paper>
      </Center>
    </Container>
  );
}
