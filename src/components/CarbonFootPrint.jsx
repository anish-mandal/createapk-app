import * as React from 'react';
import {
  Container,
  Card,
  Title,
  Text,
  Button,
  Stack,
  Center,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function CarbonFootPrint() {
  let [resultText, setResultText] = React.useState("");
  let [textColour, setTextColour] = React.useState("");
  let navigate = useNavigate();
  function handleClick() {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("carbonFootPrint");

    navigate("/questions");
  }

  React.useEffect(() => {
    setResultText(localStorage.getItem("carbonFootPrint"));
  }, []);

  React.useEffect(() => {
    if (resultText === "higher") {
      setTextColour("red");
    } else if (resultText === "lower") {
      setTextColour("teal");
    } else if (resultText === "same as") {
      setTextColour("yellow");
    }
  }, [resultText]);

  return (
    <Container>
      <Stack style={{ height: "60vh" }}>
        <Center style={{ height: "150px", flexDirection: "column" }}>
          <Title>Carbon Usage /</Title>
          <Title>Footprint</Title>
        </Center>
        <Card style={{ textAlign: "center" }}>
          <Text>
            Your food emissions is <Text color={textColour}>{resultText}</Text>{" "}
            than the global average.
          </Text>
        </Card>
        <Card withBorder>
          <Title order={4}>Your Carbon Footprint Survey</Title>
          <Button fullWidth onClick={handleClick} color="teal">
            Edit
          </Button>
        </Card>
      </Stack>
    </Container>
  );
}
