import React from 'react';
import {BlogArticleItem} from "../../component/ArticleItem";

const Home = () => {

    return (
        <>
            <article className="m-2">
                <BlogArticleItem/>
                <BlogArticleItem/>
                <BlogArticleItem/>
            </article>

            {/*<article>*/}
            {/*    <ArticleMarkdownStyles lightColor={"#C3A5F5FF"} darkColor={"#692DCAFF"}/>*/}
            {/*    <ArticleMarkdown*/}
            {/*        lightColor={"hover:bg-[#C3A5F5FF]"}*/}
            {/*        darkColor={"dark:hover:bg-[#692DCAFF]"}*/}
            {/*        markdownWidth={"w-7/10 2xl:w-3/5 lg:w-full"}*/}
            {/*        tocWidth={"w-1/5 2xl:w-3/10 lg:hidden"}*/}
            {/*        enableToc={true} enableComment={true}/>*/}

            {/*</article>*/}
        </>
    );
};

export default Home;