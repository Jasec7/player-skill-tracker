import App from "./App";
import Home from "./Home";
import PlayerPage from "./PlayerPage";
import NotePage from "./NotePage";

const routes = [
    {
        path:'/',
        element:<App />,
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