import React from 'react';
import ArticleChip from "../ArticleChip";
import LazyImage from "../LazyImage";
import {DocumentResponseRecord} from "../../api/path/document";

interface BlogArticleItemProps {
    record: DocumentResponseRecord;
}

const BlogArticleItem: React.FC<BlogArticleItemProps> = ({record}) => {
    return (
        <article className="ease my-16  grid h-auto  w-full grid-cols-12 overflow-hidden rounded-lg border border-solid   border-purple-dark-50 bg-light p-6 shadow-md transition-all duration-300 hover:shadow-none dark:border-purple-50 dark:bg-dark  sxl:p-0">
            <a className="relative    col-span-5 flex aspect-video h-auto w-full items-center justify-center self-center overflow-hidden rounded-lg sxl:col-span-12 sxl:rounded-b-none"
               href={`/blogs/article/${record.id}`}>
                <div className="object-cover ease h-full w-full  transition-all duration-300 hover:scale-105">
                    <LazyImage url={record.cover}/>
                </div>
            </a>
            <div className="col-span-7 flex flex-col justify-center pl-6 sxl:col-span-12 sxl:p-6">
                <ArticleChip textColor="text-purple-dark" darkTextColor="text-purple-dark" backgroundColor="bg-purple-25" darkBackgroundColor="dark:bg-purple" label="Development"/>
                <a href={`/blogs/article/${record.id}`}>
                    <h2 className="mt-2 cursor-pointer  font-os text-xl font-bold   decoration-purple-dark decoration-solid  decoration-2 underline-offset-2 hover:underline dark:text-light dark:decoration-purple xslg:text-lg ">{record.title}</h2>
                </a>
                <p className="mt-2 w-full font-os text-sm font-normal leading-normal text-dark dark:text-light xslg:text-xs md:text-sm">{record.description}</p>
                <div className="mt-2 flex items-center dark:text-light sm:hidden">
                    <span className="mr-2">By</span>
                    <a href="https://www.huangrx.cn" rel="noreferrer nofollow" target="_blank" className="flex items-center undefined">
                        {/*<img src={record.author_avatar} alt="img"/>*/}
                        <span className="font-os font-bold dark:font-semibold">{record.author}</span>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default BlogArticleItem;