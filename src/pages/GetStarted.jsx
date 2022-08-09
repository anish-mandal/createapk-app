import * as React from "react";
import { Center, Stack, Title, Text, Image, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Food from "../assets/food.png";
import { useNavigate } from 'react-router-dom'

export default function GetStarted() {
  let navigate = useNavigate();
  React.useEffect(() => {
    if(localStorage.getItem("userInfo")) {
      navigate("/home")
    }
  }, [])

  return (
    <Center
      style={{ justifyContent: "center", height: "100vh", width: "100%" }}
    >
      <Stack align="center">
        <Center style={{ flexDirection: "column" }}>
          <Text color="white">Welcome to</Text>
          <Title style={{ color: 'white' }}>SUSFood</Title>
        </Center>
        <Image src={Food} height={300} width={300}></Image>
        <Link to="/questions">
          <Button color="green" radius="lg" size="lg">Get Started</Button>
        </Link>
      </Stack>
    </Center>
  );
}
