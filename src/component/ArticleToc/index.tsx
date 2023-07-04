import React from 'react';
import MarkdownNavbar from "markdown-navbar";
import LazyImage from "../LazyImage";

interface ArticleTocProps {
    tocMarkdown: string;
    width: string;
    cover: string;
}

const ArticleToc: React.FC<ArticleTocProps> = ({tocMarkdown, width, cover}) => {
    return (
        <div className={`m-0 ml-auto relative ${width}`}>
            <div className="sticky top-8 bg-transparent flex flex-col items-start">
                <MarkdownNavbar
                    className='w-full bg-transparent text-left rounded-10px overflow-y-auto max-h-[60vh] py-2rem border-purple border-2px border-solid '
                    source={tocMarkdown}
                    headingTopOffset={0}
                    ordered={false}
                />

                <div className="blog-cover w-full bg-transparent top-[calc(7rem + 60vh)] mt-2rem ">
                    <LazyImage url={cover} borderRadius="10px" />
                </div>
            </div>
        </div>
    );
};

export default ArticleToc;