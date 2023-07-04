import React from 'react';

interface ArticleChipProps {
    textColor: string;
    darkTextColor: string;
    backgroundColor: string;
    darkBackgroundColor: string;
    label: string;
}

const ArticleChip: React.FC<ArticleChipProps> = ({
                                                     textColor,
                                                     darkTextColor,
                                                     backgroundColor,
                                                     darkBackgroundColor,
                                                     label,
                                                 }) => {
    return (
        <div className="flex w-full items-center justify-between">
            <span
                className={`w-max rounded-sm ${backgroundColor} py-1 px-2 text-sm font-semibold uppercase ${textColor} ${darkTextColor} ${darkBackgroundColor} dark:text-dark flex-none`}>
                {label}
            </span>
        </div>
    );
};

export default ArticleChip;