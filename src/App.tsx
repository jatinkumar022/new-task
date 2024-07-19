import {
 
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
          <Route path="new-task/" element={<Home />}>
         
            <Route path="new-task/all-tasks" element={<AllTasks />} />
            <Route path="new-task/important" element={<Important />} />
            <Route path="new-task/completed" element={<Completed />} />
            <Route path="new-task/do-it-now" element={<DoItNow />} />
          </Route>
        </Routes>
      </CssVarsProvider>
    </>
  );
};

export default App;
