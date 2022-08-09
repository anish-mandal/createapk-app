import * as React from "react";
import {
  Container,
  Card,
  Title,
  Stack,
  Center,
  Tabs,
  ScrollArea,
  Divider,
  Group,
  Button
} from "@mantine/core";

function Fruits(props) {
  if (!props.fruits.length) {
    return null;
  }

  return (
    <>
      <Divider my="sm" label="Fruits" />
      {props.fruits.map((data, key) => {
        return (
          <Card withBorder key={key} m="xs">
            {data}
          </Card>
        );
      })}
    </>
  );
}

function Grains(props) {
  if (!props.grains.length) {
    return null;
  }

  return (
    <>
      <Divider my="sm" label="Grains" />
      {props.grains.map((data, key) => {
        return (
          <Card withBorder key={key} m="xs">
            {data}
          </Card>
        );
      })}
    </>
  );
}

function Vegetables(props) {
  if (!props.vegetables.length) {
    return null;
  }

  return (
    <>
      <Divider my="sm" label="Vegetables" />
      {props.vegetables.map((data, key) => {
        return (
          <Card withBorder key={key} m="xs">
            {data}
          </Card>
        );
      })}
    </>
  );
}

export default function Pantry() {
  const [inventoryFruits, setInventoryFruits] = React.useState([]);
  const [inventoryGrains, setInventoryGrains] = React.useState([]);
  const [inventoryVegetables, setInventoryVegetables] = React.useState([]);
  const [shoppingFruits, setShoppingFruits] = React.useState([]);
  const [shoppingGrains, setShoppingGrains] = React.useState([]);
  const [shoppingVegetables, setShoppingVegetables] = React.useState([]);

  React.useEffect(() => {
    setInventoryFruits(["Blueberries", "Banana"]);
    setInventoryGrains(["Rice"]);
    setInventoryVegetables([]);

    setShoppingFruits(["Apple"]);
    setShoppingGrains([]);
    setShoppingVegetables(["Lettuce", "Mushrooms"]);
  }, []);

  return (
    <Container>
      <Stack>
        <Center style={{ height: "150px", flexDirection: "column" }}>
          <Title>Sustainable</Title>
          <Title>Pantry</Title>
        </Center>

        <Tabs defaultValue="inventory" color="teal">
          <Tabs.List position="apart">
            <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
            <Tabs.Tab value="shopping-list">Shopping List</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="inventory">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              <Fruits fruits={inventoryFruits}/>
              <Vegetables vegetables={inventoryVegetables}/>
              <Grains grains={inventoryGrains}/>
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="shopping-list">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              <Fruits fruits={shoppingFruits}/>
              <Vegetables vegetables={shoppingVegetables}/>
              <Grains grains={shoppingGrains}/>
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
}
