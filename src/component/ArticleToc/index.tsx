import React from 'react';
import MarkdownNavbar from "markdown-navbar";
import LazyImage from "../LazyImage";
import {useStateContext} from "../../contexts/ContextProvider";

interface ArticleTocProps {
    tocMarkdown: string;
    width: string;
    cover: string;
}

const ArticleToc: React.FC<ArticleTocProps> = ({tocMarkdown, width, cover}) => {

    const {currentColor} = useStateContext();

    return (
        <div className={`m-0 ml-auto relative ${width}`}>
            <div className="sticky top-[8rem] bg-transparent flex flex-col items-start">
                <div className={`w-full bg-transparent text-left rounded-10p overflow-y-auto max-h-[60vh] py-2r border-2p border-solid text-1r text-06r`} style={{borderColor: currentColor}}>
                    <MarkdownNavbar
                        source={tocMarkdown}
                        headingTopOffset={0}
                        ordered={false}
                    />
                </div>

                <div className="blog-cover w-full bg-transparent top-[calc(8rem + 60vh)] mt-2r ">
                    <LazyImage url={cover} borderRadius="10px" />
                </div>
            </div>
        </div>
    );
};

export default ArticleToc;