import React from 'react';
import Header from './components/Header';
import Body from './components/Body'; 
import Footer from './components/Footer';
import { createBrowserRouter, Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurentMenu';
//import { IMG_CDN_URL } from './config';
//import { createBrowserRouter, RouterProvider} from 'react-router-dom';


function App() {
  return (
    <div>
       <Header />
       <Outlet />
       <Footer />
    </div>
  );
  
}

export const  appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/restaurantMenu/:id",
        element:<RestaurantMenu />,
      },
    ],
  },
]);


export default App;
/**const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);
<RouterProvider router={appRouter} />
reportWebVitals();
*/