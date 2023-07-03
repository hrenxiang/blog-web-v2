import React from 'react';
import {VideoArticleItem} from "../../component/ArticleItem";

const About = () => {
    return (
        <>
            <article className="  mt-20 grid w-full grid-cols-3 gap-16 xl:gap-12 sxl:gap-16 lg:grid-cols-2  md:grid-cols-1  ">
                <VideoArticleItem/>
                <VideoArticleItem/>
                <VideoArticleItem/>
            </article>
        </>
    );
};

export default About;