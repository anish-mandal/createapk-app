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
  Button,
  Drawer,
} from "@mantine/core";
import { BsPlusLg } from "react-icons/bs";

export default function Pantry() {
  let [inventory, setInventory] = React.useState([]);
  let [shoppingList, setShoppingList] = React.useState([]);
  let [opened, setOpened] = React.useState(false);
  let [addItemsList, setAddItemsList] = React.useState([]);

  React.useEffect(() => {
    setInventory(["Blueberries", "Banana", "Rice"]);
    setShoppingList(["Apple", "Lettuce", "Mushrooms"]);
    setAddItemsList(["Tofu", "Tomatoes", "Broccoli"]);
  }, []);

  function addToShoppingListHandle(key) {
    const updatedState = addItemsList.filter((elem, id) => id !== key);

    setAddItemsList(updatedState);

    setShoppingList((prevState) => {
      if (prevState.includes(addItemsList[key])) {
        return prevState;
      } else {
        return [addItemsList[key], ...prevState];
      }
    });
  }

  return (
    <Container>
      <Stack>
        <Center style={{ height: "150px", flexDirection: "column" }}>
          <Title>Sustainable</Title>
          <Title>Pantry</Title>
        </Center>

        <Drawer
          title="Add food to the shopping list"
          opened={opened}
          onClose={() => setOpened(false)}
          padding="xl"
          size="xl"
          position="bottom"
        >
          <Center>
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              {addItemsList.map((data, key) => {
                return (
                  <Card withBorder key={key} m="xs">
                    {data}
                    <Button onClick={() => addToShoppingListHandle(key)} fullWidth>
                      Add to list
                    </Button>
                  </Card>
                );
              })}
            </ScrollArea>
          </Center>
        </Drawer>

        <Tabs defaultValue="inventory" color="teal">
          <Tabs.List position="apart">
            <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
            <Tabs.Tab value="shopping-list">Shopping List</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="inventory">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              {inventory.map((data, key) => {
                return (
                  <Card withBorder key={key} m="xs">
                    {data}
                  </Card>
                );
              })}
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="shopping-list">
            <ScrollArea style={{ height: "60vh", width: "350px" }}>
              {shoppingList.map((data, key) => {
                return (
                  <Card withBorder key={key} m="xs">
                    {data}
                  </Card>
                );
              })}
            </ScrollArea>
          </Tabs.Panel>
          <Button
            style={{
              position: "fixed",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "50%",
              height: "50px",
              width: "50px",
            }}
            color="teal"
            onClick={() => setOpened(true)}
          >
            <BsPlusLg />
          </Button>
        </Tabs>
      </Stack>
    </Container>
  );
}
