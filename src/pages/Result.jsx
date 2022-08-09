import * as React from "react";
import {
  Center,
  Title,
  Text,
  Image,
  Button,
  Space,
  Transition,
  Container,
} from "@mantine/core";
import Globe from "../assets/globe.svg";
import calculateCarbonFootPrints from "../calculateCarbonFootPrints";
import { useNavigate } from "react-router-dom";

export default function Result() {
  let [resultText, setResultText] = React.useState("");
  let [textColour, setTextColour] = React.useState("");
  let [opened, setOpened] = React.useState(false);
  let navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/home");
    }

    setOpened(true);
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const result = calculateCarbonFootPrints(
      userData.diet,
      userData.redMeat,
      userData.seaFood,
      userData.dairy,
      userData.throwFood
    );
    setResultText(result);
    localStorage.setItem("carbonFootPrint", result);
  }, []);

  React.useEffect(() => {
    if (resultText === "higher") {
      setTextColour("red");
    } else if (resultText === "lower") {
      setTextColour("green");
    } else if (resultText === "same as") {
      setTextColour("yellow");
    }
  }, [resultText]);

  function handleClick() {
    navigate("/home");
  }

  return (
    <Transition
      mounted={opened}
      transition="pop"
      duration={5000}
      timingFunction={"easeOut"}
    >
      {(styles) => {
        return (
          <Center
            style={{
              height: "100vh",
              width: "100%",
              flexDirection: "column",
              textAlign: "center",
              ...styles,
            }}
          >
            <Title m={50}>
              Your food emissions is{" "}
              <Text color={textColour}>{resultText}</Text> than the global
              average.
            </Title>
            <Space h="lg"></Space>
            <Image src={Globe} height={200} width={200}></Image>
            <Space h="lg"></Space>
            <Button color="teal" radius="lg" size="lg" onClick={handleClick}>
              Go to Home
            </Button>
          </Center>
        );
      }}
    </Transition>
  );
}
