import React from 'react';
import ArticleChip from "../ArticleChip";
import LazyImage from "../LazyImage";

const VideoArticleItem: React.FC = () => {
    return (
        <article className="ease flex h-auto  w-full  flex-col overflow-hidden  rounded-lg border border-solid   border-red-dark-50 bg-light  shadow-xl transition-all duration-300 first:my-0 hover:shadow-none dark:border-red-50 dark:bg-dark-mode ">
            <a className="relative  aspect-[4/3] h-auto w-full overflow-hidden" href="/">
                <div className="object-cover ease h-full w-full  transition-all duration-300 hover:scale-105">
                    <LazyImage url="https://images.huangrx.cn/uploads/2022/08/11/62f4e5834180a.png"/>
                </div>
            </a>
            <div className="flex flex-col justify-between  p-6">
                <ArticleChip textColor="text-red-dark" darkTextColor="text-red-dark" backgroundColor="bg-red-25" darkBackgroundColor="dark:bg-red" label="Development"/>
                <a href="/">
                    <h2 className="mt-2 cursor-pointer font-os text-3xl font-bold decoration-red-dark  decoration-solid decoration-2 underline-offset-2 hover:underline  dark:text-light dark:decoration-red xl:text-2xl  lg:text-xl  ">adfafdaf</h2>
                </a>
                <p className="mt-2 w-full font-os text-sm font-normal leading-normal dark:text-light xsm:hidden ">Patterns.dev 是 Web 开发人员和设计人员的宝贵资源，提供了设计模式和 com 的集合</p>
            </div>
        </article>
    );
};

export default VideoArticleItem;