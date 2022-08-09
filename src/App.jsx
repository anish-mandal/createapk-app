import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionaire from "./pages/Questionaire";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Result from "./pages/Result";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <Router>
        <Routes>
          <Route index path="/" element={<GetStarted />} />
        </Routes>
        <Routes>
          <Route path="/questions" element={<Questionaire />} />
        </Routes>
        <Routes>
          <Route path="/result" element={<Result />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
