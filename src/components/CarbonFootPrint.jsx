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
  let navigate = useNavigate();
  function handleClick() {
    localStorage.removeItem("userInfo");

    navigate("/questions");
  }

  return (
    <Container>
      <Stack style={{ height: "60vh" }}>
        <Center style={{ height: "150px", flexDirection: "column" }}>
          <Title>Carbon Usage /</Title>
          <Title>Footprint</Title>
        </Center>
        <Card style={{ textAlign: "center" }}>
          <Title>6.2</Title>
          <Text>tonnes CO2 per year</Text>
        </Card>
        <Card withBorder>
          <Title order={4}>Your Carbon Footprint Survey</Title>
          <Button fullWidth onClick={handleClick}>
            Edit
          </Button>
        </Card>
      </Stack>
    </Container>
  );
}
