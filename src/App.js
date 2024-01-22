import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import RunningRace from "./components/level_1/RunningRace";

function App() {
  const router = createBrowserRouter([
    {
        path : "/",
        element : <MainPage />
        },
        {
        path : "/level1",
        children : [
            {
                path : "runningRace",
                element : <RunningRace />
            },

        ]
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
