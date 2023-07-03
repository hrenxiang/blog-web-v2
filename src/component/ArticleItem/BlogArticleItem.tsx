import React from 'react';
import ArticleChip from "../ArticleChip";
import LazyImage from "../LazyImage";

const BlogArticleItem: React.FC = () => {
    return (
        <article className="ease my-16  grid h-auto  w-full grid-cols-12 overflow-hidden rounded-lg border border-solid   border-purple-dark-50 bg-light p-6 shadow-md transition-all duration-300 first:my-0 hover:shadow-none dark:border-purple-50 dark:bg-dark  sxl:p-0">
            <a className="relative    col-span-5 flex aspect-video h-auto w-full items-center justify-center self-center overflow-hidden rounded-lg sxl:col-span-12 sxl:rounded-b-none" href="/">
                <div className="object-cover ease h-full w-full  transition-all duration-300 hover:scale-105">
                    <LazyImage url="https://images.huangrx.cn/uploads/2022/08/11/62f4e5834180a.png"/>
                </div>
            </a>
            <div className="col-span-7 flex flex-col justify-center pl-6 sxl:col-span-12 sxl:p-6">
                <ArticleChip textColor="text-purple-dark" backgroundColor="bg-purple-25" darkBackgroundColor="dark:bg-purple" label="Development"/>
                <a href="/">
                    <h2 className="mt-2 cursor-pointer  font-os text-xl font-bold   decoration-purple-dark decoration-solid  decoration-2 underline-offset-2 hover:underline dark:text-light dark:decoration-purple xslg:text-lg ">adfafdaf</h2>
                </a>
                <p className="mt-2 w-full font-os text-sm font-normal leading-normal text-dark dark:text-light xslg:text-xs md:text-sm">Patterns.dev 是 Web 开发人员和设计人员的宝贵资源，提供了设计模式和 com 的集合</p>
                <div className="mt-2 flex items-center dark:text-light sm:hidden"><span className="mr-2">By</span><a href="https://twitter.com/code_bucks" rel="noreferrer nofollow" target="_blank" className="flex items-center undefined"><span className="font-os font-bold dark:font-semibold">CodeBucks</span></a></div>
            </div>
        </article>
    );
};

export default BlogArticleItem;