import React from 'react';
import MarkdownNavbar from "markdown-navbar";
import LazyImage from "../LazyImage";

interface ArticleTocProps {
    tocMarkdown: string;
    width: string;
}

const ArticleToc: React.FC<ArticleTocProps> = ({tocMarkdown, width}) => {
    return (
        <div className={`m-0 ml-auto relative ${width}`}>
            <div className="sticky top-8 bg-transparent flex flex-col items-start">
                <MarkdownNavbar
                    className='w-full bg-transparent text-left rounded-10px overflow-y-auto max-h-[60vh] py-2rem border-purple border-2px border-solid '
                    source={tocMarkdown}
                    headingTopOffset={0}
                    ordered={false}
                />

                <div className="blog-cover w-full bg-transparent top-[calc(7rem + 60vh)] mt-2rem">
                    <LazyImage url={"https://images.huangrx.cn/uploads/2023/06/05/pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255377.jpg"} />
                </div>
            </div>
        </div>
    );
};

export default ArticleToc;