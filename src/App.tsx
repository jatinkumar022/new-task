import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AllTasks, Completed, DoItNow, Important } from "./pages";
import Home from "./pages/Home";
import { CssVarsProvider } from "@mui/joy/styles";
import darkTheme from "./Theme/ThemeProvider";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Navigate to="/all-tasks" replace />,
        },
        {
          path: "all-tasks",
          element: <AllTasks />,
        },
        {
          path: "important",
          element: <Important />,
        },
        {
          path: "completed",
          element: <Completed />,
        },
        {
          path: "do-it-now",
          element: <DoItNow />,
        },
      ],
    },
  ],
  { basename: "/new-task" }
);

const App = () => {
  return (
    <CssVarsProvider theme={darkTheme} defaultMode="dark">
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
};

export default App;
