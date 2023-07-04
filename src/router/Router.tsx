import React, {ReactElement} from 'react';
import Home from "../page/Home";
import BlogArticle from "../page/Article/BlogArticle";
import BlogArticleCategory from "../page/ArticleCategory/BlogArticleCategory";

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
        path: '/blogs/article/:id',
        element: loadingComponent(<BlogArticle/>)
    },
    {
        path: '/blogs/category/:category',
        element: loadingComponent(<BlogArticleCategory/>)
    }
]

export default routers;
