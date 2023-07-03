import React from 'react';

interface ArticleChipProps {
    textColor: string;
    backgroundColor: string;
    darkBackgroundColor: string;
    label: string;
}

const ArticleChip: React.FC<ArticleChipProps> = ({
                                                     textColor,
                                                     backgroundColor,
                                                     darkBackgroundColor,
                                                     label,
                                                 }) => {
    return (
        <div className="flex w-full items-center justify-between">
            <span
                className={`w-max rounded-sm ${backgroundColor} py-1 px-2 text-sm font-semibold uppercase ${textColor} ${darkBackgroundColor} dark:text-dark`}>
                {label}
            </span>
        </div>
    );
};

export default ArticleChip;