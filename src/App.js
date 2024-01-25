import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import RunningRace from "./components/level_1/RunningRace";
import YearningImg from "./components/level_1/YearningImg";
import ParkStrolling from "./components/level_1/ParkStrolling";
import CleanDesktop from "./components/level_1/CleanDesktop";

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
            {
                path : "yearningImg",
                element : <YearningImg />
            },
            {
                path : "parkStroling",
                element : <ParkStrolling />
            },
            {
                path : "cleanDesktop",
                element : <CleanDesktop />
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
