import "./App.css";
import Navbar_1Page from "./NavbarLayout/NavbarLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Pages/Menu/Menu";
import Biz_Haqimizda from "./Pages/Biz_Haqimizda/Biz_Haqimizda";
import Yangiliklar from "./Pages/Yangiliklar/Yangiliklar";
import Kirish from "./Pages/Kirish/Kirish";
import Uzbek from "./Pages/Menu/uzbek";
import Turk from "./Pages/Menu/Turk";
import Yapon from "./Pages/Menu/Yapon";
import Dengiz from "./Pages/Menu/Dengiz";
import UzbekDetail from "./Pages/Saralanganlar/UzbekDetail";
import Turkdetails from "./Pages/Saralanganlar/Turkdetails";
import Yapondetails from "./Pages/Saralanganlar/Yapondetails";
import Dengizdetails from "./Pages/Saralanganlar/Dengizdetails";
import Yangidetails from "./Pages/Yangiliklar/Yangidetails";
import Homedetails from "./Home/Homedetails";
import Boglanish from "./Pages/Boglanish/Boglanish"
function App() {
 
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar_1Page />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "menu",
          element: <Menu />
        },
        {
          path: "/uzbek",
          element:<Uzbek/>
        },
        {
          path:"/uzbek/:details",
          element: <UzbekDetail/>
        },
        {
          path:"/turk/:details",
          element: <Turkdetails/>
        },
        {
          path:"/yapon/:details",
          element: <Yapondetails/>
        },
        {
          path: "/dengiz/:details",
          element: <Dengizdetails/>
        },
        {
          path: "/yangi/:details",  
          element: <Yangidetails/>
        },
        {
          path: "/homeswiper/:details",
          element: <Homedetails/>
        },
        {
          path: "/turk",
          element:<Turk/>
        },
        {
          path: "/yapon",
          element: <Yapon/>
        },
        {
          path: "/dengiz",
          element:<Dengiz/>
        },
        {
          path: "/biz_haqimizda",
          element: <Biz_Haqimizda />,
        },
        {
          path: "/yangiliklar",
          element: <Yangiliklar />,
        },
        {
          path:"/boglanish",
          element: <Boglanish/>
        },
        {
          path: "kirish",
          element: <Kirish />,
        },
        {
          path: "*",
          element: <h1>Sizda Children Not Found ishladi</h1>,
        },
      ],
    },
    {
      path: "*",
      element: <h1>Sizda Katta Not Found ishladi</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
