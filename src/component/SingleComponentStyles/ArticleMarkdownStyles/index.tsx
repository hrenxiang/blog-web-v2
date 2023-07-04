import {Global, css} from '@emotion/react';
import React, {useEffect, useState} from "react";
import {useStateContext} from "../../../contexts/ContextProvider";

interface ArticleMarkdownStylesProps {
    lightColor: string;
    darkColor: string;

}

const ArticleMarkdownStyles: React.FC<ArticleMarkdownStylesProps> = ({lightColor, darkColor}) => {

    const [currentMainColor, setCurrentMainColor] = useState<string>("");

    const {
        currentMode,
        setCurrentMode,
    } = useStateContext();

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeMode) {
            setCurrentMode(currentThemeMode);
            currentThemeMode === "Dark" ? setCurrentMainColor(darkColor) : setCurrentMainColor(lightColor);
        }

    }, [currentMode, setCurrentMode, darkColor, lightColor]);

    return (
        <>
            <Global
                styles={css`

                  :root {
                    --waline-theme-color: ${lightColor};
                    --waline-active-color: ${lightColor};
                  }

                  blockquote {
                    /* 在这里设置你想要的样式 */
                    background-color: ${lightColor};
                    color: ${'rgba(34, 34, 34)'} !important;
                    border-color: ${darkColor} !important;
                    padding: 1rem !important;
                  }

                  .markdown-navigation .title-anchor:hover {
                    text-decoration-line: underline;
                    text-underline-offset: 2px;
                    text-decoration-thickness: 2px;
                    text-decoration-style: solid;
                    text-decoration-color: ${currentMainColor} !important;
                  }

                  .wl-delete svg path {
                    fill: ${currentMainColor}
                  }

                  .wl-btn:disabled {
                    background-color: ${lightColor};
                  }
                  
                  .ant-pagination-item-active {
                    background: transparent !important;
                    border-color: ${currentMode === "Dark" ? lightColor : darkColor} !important;
                  }
                `}
            />
        </>
    );
};

export default ArticleMarkdownStyles;