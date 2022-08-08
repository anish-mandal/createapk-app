import * as React from "react";
import { Center, Stack, Title, Text, Image, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
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
          <Text>Welcome to</Text>
          <Title>SUSFOOD</Title>
        </Center>
        <Image src={Logo} height={200} width={200}></Image>
        <Link to="/questions">
          <Button>Get Started</Button>
        </Link>
      </Stack>
    </Center>
  );
}
