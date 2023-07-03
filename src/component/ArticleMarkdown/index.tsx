import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ArticleSyntaxHighlighter from "./ArticleSyntaxHighlighter";
import ArticleToc from "../ArticleToc";
import {useStateContext} from "../../contexts/ContextProvider";
import ArticleComment from "../ArticleComment";

interface ArticleMarkdownProps {
    lightColor: string;
    darkColor: string;
    markdownWidth: string;
    tocWidth: string;
    enableToc: boolean;
    enableComment: boolean;
}

const ArticleMarkdown: React.FC<ArticleMarkdownProps> = ({lightColor, darkColor, markdownWidth, tocWidth, enableToc, enableComment}) => {

    const {
        currentMode,
        setCurrentMode,
    } = useStateContext();

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeMode) {
            setCurrentMode(currentThemeMode);
        }

    }, [currentMode, setCurrentMode]);

    // 文章内容
    const [markdown, setMarkdown] = useState('');

    // 预处理后的文章目录内容
    const [tocMarkdown, setTocMarkdown] = useState('');

    useEffect(() => {
        // 读取 Markdown 文件内容
        if ("https://huangrx.cn/document/Linux%20Centos7%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E5%8F%8A%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF%E9%83%A8%E7%BD%B2.md") {
            fetch("https://huangrx.cn/document/Redis%20%E8%BF%87%E6%9C%9F%E7%AD%96%E7%95%A5%E5%8F%8A%E6%8C%81%E4%B9%85%E5%8C%96%E6%96%B9%E5%BC%8F.md")
                .then(response => response.text())
                .then(text => {
                    setMarkdown(text)

                    // 预处理markdown内容，将代码块全部删除，以防止代码块中的#误使markdown-navbar生成标题。
                    const processedText = text.replace(/```[\s\S]*?```/g, '');
                    setTocMarkdown(processedText);
                })
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <div className={`relative flex w-full justify-center`}>
            <div className={`text-dark bg-light dark:text-light dark:bg-dark ${markdownWidth}`}>
                <ReactMarkdown
                    className="markdown-body text-dark bg-light dark:text-light dark:bg-dark"
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    children={markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '');
                            return inline ?
                                (
                                    <span
                                        className="text-red dark:text-red-dark bg-red-15 px-6px py-2px rounded-6px mx-2px">
                                                            <code
                                                                className={`${className} !bg-transparent !rounded-none `} {...props}>
                                                                {children}
                                                            </code>
                                                        </span>
                                )
                                :
                                (
                                    match ?
                                        (
                                            <ArticleSyntaxHighlighter lightColor={lightColor}
                                                                      darkColor={darkColor}
                                                                      children={children}
                                                                      language={match[1]}
                                                                      currentMode={currentMode}
                                                                      {...props}
                                            />
                                        )
                                        :
                                        (
                                            <ArticleSyntaxHighlighter lightColor={lightColor}
                                                                      darkColor={darkColor}
                                                                      children={children}
                                                                      language="bash"
                                                                      currentMode={currentMode}
                                                                      {...props}
                                            />
                                        )
                                )
                        },
                    }}
                />

                {enableComment ? <ArticleComment/> : ''}
            </div>

            {enableToc && tocMarkdown ? <ArticleToc tocMarkdown={tocMarkdown} width={tocWidth}/> : ''}
        </div>
    );
};

export default ArticleMarkdown;