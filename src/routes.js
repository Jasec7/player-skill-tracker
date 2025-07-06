import App from "./App";
import Home from "./Home";
import PlayerPage from "./PlayerPage";
import NotePage from "./NotePage";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path:'/',
        element:<App />,
        errorElement:<ErrorPage />,
        children:[

            {
                path:'/',
                element:<Home/>
            },
            {
                 path:'/players',
                 element:<PlayerPage />
            },
            {
                path:'/players/:id/notes',
                element: <NotePage />
            }
        ]
    }
];

export default routes;