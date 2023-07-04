import React from 'react';
import ArticleChip from "../ArticleChip";
import LazyImage from "../LazyImage";
import {DocumentResponseRecord} from "../../api/path/document";
import {IoEyeOutline} from "react-icons/io5";
import {useStateContext} from "../../contexts/ContextProvider";
import {Link} from "react-router-dom";

interface BlogArticleItemProps {
    record: DocumentResponseRecord;
}

const BlogArticleItemV2: React.FC<BlogArticleItemProps> = ({record}) => {

    const {setCurrentBlogArticleProps} = useStateContext();

    const toBlogArticle = () => {
        setCurrentBlogArticleProps(record);
    }

    return (
        <article
            className="ease  my-4 flex h-max w-full  flex-col items-center overflow-hidden rounded-lg border border-solid   border-purple-dark-50 bg-white shadow-md transition-all duration-300 hover:shadow-none dark:border-purple-50 dark:bg-dark undefined">
            <Link className="relative    col-span-5 flex aspect-video h-auto w-full items-center justify-center self-center overflow-hidden rounded-lg sxl:col-span-12 sxl:rounded-b-none"
               to={`/blogs/article/${record.id}` } onClick={() => toBlogArticle()}>
                <div className="object-cover ease h-full w-full  transition-all duration-300 hover:scale-105">
                    <LazyImage url={record.cover}/>
                </div>
            </Link>
            <div className="w-full flex flex-col justify-center px-10 py-8 sxl:p-6">
                <ArticleChip textColor="text-purple-dark" darkTextColor="text-purple-dark"
                             backgroundColor="bg-purple-25" darkBackgroundColor="dark:bg-purple"
                             label={record.subcategory}/>
                <Link to={`/blogs/article/${record.id}`} onClick={() => toBlogArticle()}>
                    <h2 className="mt-2 cursor-pointer  font-os text-xl font-bold   decoration-purple-dark decoration-solid  decoration-2 underline-offset-2 hover:underline dark:text-light dark:decoration-purple xslg:text-lg text-ellipsis line-clamp-1">{record.title}</h2>
                </Link>
                <p className="mt-2 w-full font-os text-sm font-normal leading-normal text-dark dark:text-light xslg:text-xs md:text-sm text-ellipsis line-clamp-1">{record.description}</p>
                <div className="flex justify-between items-center">
                    <div className="mt-4 flex items-center dark:text-light">
                        <span className="mr-2">By</span>
                        <a href="https://www.huangrx.cn" rel="noreferrer nofollow" target="_blank"
                           className="flex items-center undefined">
                            <img src={record.author_avatar} alt="img"
                                 className="mr-1 h-[1.5rem] w-[1.5rem] rounded-full"/>
                            <span className="font-os font-bold dark:font-semibold">{record.author}</span>
                        </a>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <IoEyeOutline/>
                        <span><span className="waline-pageview-count" data-path="/blogs/19"/>&nbsp;views</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogArticleItemV2;