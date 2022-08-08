import {
  Container,
  Card,
  Title,
  Stack,
  Center,
  Tabs,
  ScrollArea,
  Divider,
} from "@mantine/core";

export default function Pantry() {
  const fruits = ["Blueberries", "Banana"];
  const grains = ["Rice"];

  return (
    <Container>
      <Stack>
        <Center style={{ height: "150px", flexDirection: "column" }}>
          <Title>Sustainable</Title>
          <Title>Pantry</Title>
        </Center>

        <Tabs defaultValue="inventory">
          <Tabs.List position="apart">
            <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
            <Tabs.Tab value="shopping-list">Shopping List</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="inventory">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              <Divider my="sm" label="Fruits" />
              {fruits.map((data, key) => {
                return (
                  <Card withBorder key={key} m="xs">
                    {data}
                  </Card>
                );
              })}
              <Divider my="sm" label="Grains" />
              {grains.map((data, key) => {
                return (
                  <Card withBorder key={key} m="xs">
                    {data}
                  </Card>
                );
              })}
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="shopping-list">
            <ScrollArea style={{ height: "60vh", width: "350px" }}></ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
}
