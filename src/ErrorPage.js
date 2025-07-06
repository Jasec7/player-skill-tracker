import {useRouteError} from "react-router-dom"

function Errorpage(){
    const error = useRouteError();

    return(
        <main>
            <h1>Whoops! Something went wrong</h1>
        </main>
    )
};

export default Errorpage