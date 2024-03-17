import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
import UserallPage from "./pages/Userall/Userall";
import LandmarkallPage from "./pages/Landmarkall/Landmarkall";


function App() {

  const routers = createBrowserRouter([
    { path: "/", element: <LoginPage/> },
    { path: "/home", element: <HomePage/> },
    { path: "/user", element: <UserallPage/>},
    { path: "/landmark", element: <LandmarkallPage/>}

  ]);

  return (
    <>
    <RouterProvider router={routers} />
    </>  
  )
}

export default App
