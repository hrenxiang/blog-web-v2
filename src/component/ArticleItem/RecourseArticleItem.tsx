import React from 'react';
import ArticleChip from "../ArticleChip";
import LazyImage from "../LazyImage";

const RecourseArticleItem: React.FC = () => {
    return (
        <article className="ease flex h-auto  w-full  flex-col overflow-hidden  rounded-lg border border-solid   border-green-dark-50 bg-light  shadow-xl transition-all duration-300 first:my-0 hover:shadow-none dark:border-green-50 dark:bg-dark-mode ">
            <a className="relative  aspect-[4/3] h-auto w-full overflow-hidden" href="/">
                <div className="object-cover ease h-full w-full  transition-all duration-300 hover:scale-105">
                    <LazyImage url="https://images.huangrx.cn/uploads/2022/08/11/62f4e5834180a.png"/>
                </div>
            </a>
            <div className="flex flex-col justify-between  p-6">
                <ArticleChip textColor="text-green-dark" backgroundColor="bg-green-25" darkBackgroundColor="dark:bg-green" label="Development"/>
                <a href="/">
                    <h2 className="mt-2 cursor-pointer font-os text-3xl font-bold decoration-green-dark  decoration-solid decoration-2 underline-offset-2 hover:underline  dark:text-light dark:decoration-green xl:text-2xl  lg:text-xl  ">adfafdaf</h2>
                </a>
                <h3 className="mt-2 font-os text-sm  font-semibold leading-normal text-dark-60  dark:font-light dark:text-light-60 sxl:text-base lg:text-sm ">Bring
                    your ideas to life with unDraw an Open-source illustrations for all!</h3>
                <p className="mt-2 w-full font-os text-sm font-normal leading-normal dark:text-light xsm:hidden ">Patterns.dev 是 Web 开发人员和设计人员的宝贵资源，提供了设计模式和 com 的集合</p>
            </div>
        </article>
    );
};

export default RecourseArticleItem;