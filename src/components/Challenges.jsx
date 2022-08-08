import * as React from "react";
import {
  Center,
  Tabs,
  Card,
  Button,
  Space,
  Badge,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Challenges() {
  let navigate = useNavigate();
  let [userData, setUserData] = React.useState({});
  let [browseChallenges, setBrowseChallenges] = React.useState([]);
  let [myChallenges, setMyChallenges] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const userData = JSON.parse(localStorage.getItem("userInfo"));
      setUserData(userData);

      setBrowseChallenges([
        {
          challenge: "Buy from local market for one month.",
          badge: ["good impact", "save plastic", "reduce food waste"],
        },
        {
          challenge: "Grow your own herbs.",
          badge: ["small impact", "save plastic", "reduce food waste"],
        },
        {
          challenge: "Compost your food waste for two weeks.",
          badge: ["small impact", "reduce food waste"],
        },
        {
          challenge: "Go vegan for a month.",
          badge: ["good impact", "reduce food waste", "save water"],
        },
        {
          challenge: "Substitute milk with plant-based milk.",
          badge: ["good impact", "save water"],
        },
      ]);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Center>
      <Stack>
        <Center style={{ height: "150px", flexDirection: "column" }}>
          <Title>Hi {userData.firstName},</Title>
          <Title>How are you ?</Title>
        </Center>
        <Tabs defaultValue="my-challenges">
          <Tabs.List position="apart">
            <Tabs.Tab value="my-challenges">My Challenges</Tabs.Tab>
            <Tabs.Tab value="browse-challenges">Browse Challenges</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="browse-challenges">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              {browseChallenges.map((data, key) => {
                return (
                  <Card withBorder m="md" key={key} style={{ width: "300px" }}>
                    <Title order={4}>{data.challenge}</Title>
                    <Stack align={"flex-start"}>
                      {data.badge.map((data, key) => {
                        return <Badge key={key}>{data}</Badge>;
                      })}
                    </Stack>
                    <Space h="md"></Space>
                    <Button fullWidth>Add</Button>
                  </Card>
                );
              })}
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="my-challenges">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              {myChallenges.map((data, key) => {
                return (
                  <Card withBorder m="md" key={key} style={{ width: "300px" }}>
                    <Title order={4}>{data.challenge}</Title>
                    <Stack align={"flex-start"}>
                      {data.badge.map((data, key) => {
                        return <Badge key={key}>{data}</Badge>;
                      })}
                    </Stack>
                    <Space h="md"></Space>
                    <Button fullWidth>Add</Button>
                  </Card>
                );
              })}
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Center>
  );
}
