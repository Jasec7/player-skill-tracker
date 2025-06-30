import App from "./App";
import Home from "./Home";
import PlayerPage from "./PlayerPage";

const routes = [
    {
        path:'/',
        element:<Home/>

    },
    {
        path:'/players',
        element:<PlayerPage />
    },
];

export default routes;