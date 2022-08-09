// @ts-check
import * as React from "react";
import { Center, Tabs, Stack, Title } from "@mantine/core";
import { BsClipboardCheck } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import Challenges from "../components/Challenges";
import CarbonFootPrint from "../components/CarbonFootPrint";
import StyledTabs from "../components/StyledTabs";
import Pantry from "../components/Pantry";

export default function Home() {
  return (
    <Center style={{ overflow: 'hidden' }}>
      <Stack>
        <StyledTabs color="teal" defaultValue="challenges" inverted>
          <Tabs.Panel value="challenges">
            <Challenges />
          </Tabs.Panel>

          <Tabs.Panel value="carbon-footprint">
            <CarbonFootPrint />
          </Tabs.Panel>

          <Tabs.Panel value="my-pantry">
            <Pantry />
          </Tabs.Panel>

          <Tabs.List
            style={{
              position: "fixed",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Tabs.Tab value="challenges" icon={<BsClipboardCheck />}>
              Challenges
            </Tabs.Tab>
            <Tabs.Tab value="carbon-footprint" icon={<FaLeaf />}>
              Carbon Footprint
            </Tabs.Tab>
            <Tabs.Tab value="my-pantry" icon={<CgSmartHomeRefrigerator />}>
              My Pantry
            </Tabs.Tab>
          </Tabs.List>
        </StyledTabs>
      </Stack>
    </Center>
  );
}
