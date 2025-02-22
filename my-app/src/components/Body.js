import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./signup"; 
import Signupnext from "./signupnext";
import VideoCardComponent from "./videocardcomponent";



const Body = () => {
 

  const [email, setEmail] = useState(""); 

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup email={email} setEmail={setEmail} /> },
    { path: "/next", element: <Signupnext email={email} /> }, 
    { path: "/browse", element: <Browse /> },
    {path:"/video/:id",element: <VideoCardComponent/>}
  ]);


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
