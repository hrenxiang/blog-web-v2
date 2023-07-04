import {Global, css} from '@emotion/react';
import React, {useEffect, useState} from "react";
import {useStateContext} from "../../../contexts/ContextProvider";

const GlobalStyles: React.FC = () => {
    const whiteColor = "#F8F9FAFF";
    const blackColor = "#121212FF";
    const grayColor = "#7E838DFF";

    const [currentColor, setCurrentColor] = useState<string>("");
    const [currentColorReverse, setCurrentColorReverse] = useState<string>("");

    const {
        currentMode,
        setCurrentMode,
    } = useStateContext();

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeMode) {
            setCurrentMode(currentThemeMode);

            currentThemeMode === "Dark" ? setCurrentColor(whiteColor) : setCurrentColor(blackColor);
            currentThemeMode === "Dark" ? setCurrentColorReverse(blackColor) : setCurrentColorReverse(whiteColor);
        }

    }, [currentMode, setCurrentMode]);

    return (
        <>
            <Global
                styles={css`

                  .markdown-body table tr {
                    background-color: inherit !important;
                    border-top: 1px solid ${grayColor};
                  }

                  .markdown-body table tr:nth-of-type(2n) {
                    background-color: inherit !important;
                    border-top: 1px solid ${grayColor};
                  }

                  .markdown-body table th,
                  .markdown-body table td {
                    padding: 10px 12px;
                    border: 1px solid ${grayColor};
                  }

                  .markdown-body .highlight pre,
                  .markdown-body pre {
                    padding: 0 !important;
                    overflow: auto;
                    border-radius: 0 !important;
                  }

                  .markdown-body .code-wrapper:hover .copy-btn {
                    display: block;
                  }

                  .markdown-navigation .title-anchor {
                    display: block;
                    color: ${currentColor};
                    transition: all 0.2s;
                    margin: 0.8em 0;
                    font-weight: lighter;
                    line-height: 2em;
                    padding-right: 1.8em;
                    cursor: pointer;

                    white-space: nowrap; /* 不换行 */
                    overflow: hidden; /* 超出部分隐藏 */
                    text-overflow: ellipsis; /* 使用省略号表示多余部分 */
                  }

                  .markdown-navigation .title-anchor small {
                    margin: 0 0.8em;
                  }

                  .markdown-navigation .title-level1 {
                    color: ${currentColor};
                    font-size: 1.2rem;
                    padding-left: 1em;
                    font-weight: normal;
                  }

                  .markdown-navigation .title-level2 {
                    color: ${currentColor};
                    font-size: 1.1rem;
                    padding-left: 1.5em;
                    font-weight: normal;
                  }

                  .markdown-navigation .title-level3 {
                    color: ${currentColor};
                    font-size: 1rem;
                    padding-left: 3em;
                    font-weight: normal;
                  }

                  .markdown-navigation .title-level4 {
                    color: ${grayColor};
                    font-size: 0.9rem;
                    padding-left: 5em;
                  }

                  .markdown-navigation .title-level5 {
                    color: ${grayColor};
                    font-size: 0.9rem;
                    padding-left: 6.5em;
                  }

                  .markdown-navigation .title-level6 {
                    color: ${grayColor};
                    font-size: 0.9rem;
                    padding-left: 8em;
                  }

                  .lazy-load-image-background.blur {
                    filter: blur(15px) !important;
                    width: 100%;
                    height: 100%;
                  }

                  .lazy-load-image-background.blur.lazy-load-image-loaded {
                    filter: blur(0) !important;
                    transition: filter .3s !important;
                    width: 100%;
                    height: 100%;
                  }

                  .lazy-load-image-background.blur > img {
                    opacity: 0 !important;
                  }

                  .lazy-load-image-background.blur.lazy-load-image-loaded > img {
                    opacity: 1 !important;
                    transition: opacity .3s !important;
                  }

                  @keyframes navbarOpenMenuAnimation {
                    0% {
                      transform: rotate(45deg);
                    }
                    100% {
                      transform: rotate(0deg);
                    }
                  }

                  @keyframes navbarCloseMenuAnimation {


                    0% {
                      transform: rotate(-45deg);
                    }
                    100% {
                      transform: rotate(0deg);
                    }
                  }

                  .navbar-close-menu {
                    animation: navbarCloseMenuAnimation 0.3s ease forwards;
                  }

                  .navbar-open-menu {
                    animation: navbarOpenMenuAnimation 0.3s ease forwards;
                  }

                  #waline {
                    width: 100% !important;
                    margin: 0 auto !important;
                    background-color: ${currentColorReverse};
                    padding-bottom: 1.5rem;
                  }

                  .wl-panel {
                    border: none !important;
                    border-radius: 0.5em !important;
                    margin: 0 !important;
                  }

                  .wl-comment {
                    border: none !important;
                    box-shadow: none !important;
                    flex-direction: column !important;
                  }

                  .wl-editor {
                    min-height: 15rem !important;
                    width: calc(100% - 3rem) !important;
                  }

                  .wl-editor:focus, .wl-input:focus, .wl-card .wl-meta > span {
                    background: none !important;
                  }

                  .wl-footer, .wl-editor {
                    margin: 1.5rem !important;
                  }

                  .wl-editor,
                  .wl-input,
                  .wl-action,
                  .wl-card .wl-delete,
                  .wl-card .wl-like,
                  .wl-card .wl-reply,
                  .wl-card .wl-edit,
                  .wl-btn,
                  [data-waline] p,
                  .wl-count {
                    color: ${currentColor} !important;
                  }

                  .wl-card {
                    border-bottom: none !important;
                  }

                  .wl-user, .wl-meta, .wl-power, .wl-like, .wl-login-info {
                    display: none !important;
                  }

                  .wl-card-item {
                    margin-bottom: 1.5rem !important;
                    padding: 1.5rem !important;
                  }

                  .wl-panel, .wl-card-item {
                    border: 1px solid rgb(156, 163, 175, 0.4) !important;
                    box-shadow: none !important;
                    border-radius: 10px !important;
                  }

                  .wl-card-item, .wl-tab-wrapper, .wl-comment, .wl-panel {
                    background: ${currentColorReverse} !important;
                  }

                  .wl-card-item .wl-card-item {
                    padding-inline-end: 1.5rem !important;
                  }

                  .wl-card .wl-quote {
                    border-inline-start: none !important;
                  }

                  .wl-btn.primary:disabled {
                    background-color: ${currentColorReverse}
                  }

                  .ant-btn-primary {
                    background-color: #1677ff;
                  }

                  .ant-pagination, .ant-pagination-item a, .ant-pagination-item-link, .ant-pagination-item-ellipsis {
                    color: ${currentColor} !important;
                  }
                `}
            />
        </>
    );
};

export default GlobalStyles;