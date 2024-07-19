import {
  // BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AllTasks, Completed, DoItNow, Important } from "./pages";
import Home from "./pages/Home";
import { CssVarsProvider } from "@mui/joy/styles";
import darkTheme from "./Theme/ThemeProvider";

const App = () => {
  return (
    <>
      <CssVarsProvider theme={darkTheme} defaultMode="dark">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/all-tasks" replace />} />
            <Route path="all-tasks" element={<AllTasks />} />
            <Route path="important" element={<Important />} />
            <Route path="completed" element={<Completed />} />
            <Route path="do-it-now" element={<DoItNow />} />
          </Route>
        </Routes>
      </CssVarsProvider>
    </>
  );
};

export default App;
