import React, {useEffect, useState} from 'react';
import {ArticleMarkdownStyles} from "../../../component/SingleComponentStyles";
import ArticleMarkdown from "../../../component/ArticleMarkdown";
import {IoEyeOutline} from "react-icons/io5";
import ArticleChip from "../../../component/ArticleChip";
import {useStateContext} from "../../../contexts/ContextProvider";
import {SubcategoryVO} from "../../../api/path/subcategory";
import {api} from "../../../api";
import {Link} from "react-router-dom";

const BlogArticle = () => {

    const {
        articleWordCount,
        currentBlogArticleProps,
    } = useStateContext();

    const readingSpeed = 250;

    const [readingTime, setReadingTime] = useState(0);

    const [subcategoryId, setSubcategoryId] = useState<number>(0);

    useEffect(() => {

        setReadingTime(Math.ceil(articleWordCount / readingSpeed));

        api.acquireAllSubcategory().then((res) => {
            const records = res[0].data as SubcategoryVO[];

            records.map((record) => (
                record.subcategory_name === currentBlogArticleProps.subcategory ? setSubcategoryId(record.subcategory_id) : ''
            ))

            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, [articleWordCount, currentBlogArticleProps.subcategory]);


    return (
        <div
            className="py-16 px-16 md:px-12 sm:px-4 flex flex-col items-center justify-center text-1rem bg-light dark:bg-dark-mode">
            <span>上传日期 {currentBlogArticleProps.create_time}</span>
            <h1 className="my-12 text-center text-8xl font-extrabold uppercase leading-tight drop-shadow-purple dark:drop-shadow-purple-dark sxl:text-7xl sxl:leading-snug md:my-8 md:text-6xl md:leading-snug sm:text-5xl  sm:leading-snug sm:drop-shadow-purple-sm dark:sm:drop-shadow-purple-dark-sm xsm:text-3xl  xsm:leading-tight xsm:drop-shadow-purple-xsm dark:xsm:drop-shadow-purple-dark-xsm xs:text-3xl ">
                {currentBlogArticleProps.title}
            </h1>
            <div className="flex items-center justify-center sm:flex-wrap gap-10 md:gap-5">
                <div>
                    {readingTime}&nbsp;min&nbsp;read
                </div>
                <div className="flex items-center justify-center gap-2">
                    <IoEyeOutline/>
                    <span><span className="waline-pageview-count" data-path={`/blogs/article/${currentBlogArticleProps.id}`}/>&nbsp;views</span>
                </div>

            </div>
            <div className="mt-6 mb-12 flex items-center gap-2">
                <span className="flex-none">分类</span>
                <ArticleChip textColor={"text-purple-75"} darkTextColor={"dark:text-purple"}
                             backgroundColor={"bg-light"} darkBackgroundColor={"dark:bg-dark-mode"}
                             label={currentBlogArticleProps.category}/>
                <Link to={`/blogs/category/${subcategoryId}`}>
                    <ArticleChip textColor={"text-purple-75"} darkTextColor={"dark:text-purple"}
                                 backgroundColor={"bg-light"} darkBackgroundColor={"dark:bg-dark-mode"}
                                 label={currentBlogArticleProps.subcategory}/>
                </Link>
            </div>


            {/*阅读量: <span className="waline-pageview-count" data-path="/" />*/}
            <ArticleMarkdownStyles lightColor={"#C3A5F5FF"} darkColor={"#692DCAFF"}/>
            <ArticleMarkdown
                lightColor={"hover:bg-[#C3A5F5FF]"}
                darkColor={"dark:hover:bg-[#692DCAFF]"}
                markdownWidth={"w-7/10 2xl:w-3/5 lg:w-full"}
                tocWidth={"w-1/5 2xl:w-3/10 lg:hidden"}
                enableToc={true} enableComment={true}
                documentUrl={currentBlogArticleProps.document_url}
                cover={currentBlogArticleProps.cover}
            />
        </div>
    );
};

export default BlogArticle;