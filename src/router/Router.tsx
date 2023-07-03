import React, {ReactElement} from 'react';
import Home from "../page/Home";
import About from "../page/About";

interface Route {
    path: string;
    element: ReactElement;
    children?: Route[];
}

const loadingComponent = (component: React.ReactElement) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {component}
        </React.Suspense>
    );
}

const routers: Route[] = [
    {
        path: "/",
        element: loadingComponent(<Home/>)
    },
    {
        path: "/about",
        element: loadingComponent(<About/>)
    }
]

export default routers;
