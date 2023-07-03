const allColor = {
    // dark
    'dark': 'rgba(34, 34, 34)',
    'dark-0': 'rgba(34, 34, 34, 0)',
    'dark-10': 'rgba(34, 34, 34, .10)',
    'dark-50': 'rgba(34, 34, 34, .55)',
    'dark-60': 'rgba(34, 34, 34, .60)',

    // dark-mode
    'dark-mode': 'rgba(18, 18, 18)',

    // light
    'light': 'rgba(248, 249, 250)',
    'light-0': 'rgba(248, 249, 250, 0)',
    'light-10': 'rgba(248, 249, 250, .10)',
    'light-50': 'rgba(248, 249, 250, .55)',
    'light-60': 'rgba(248, 249, 250, .60)',

    // light2
    'light2': 'rgba(243, 243, 243)',

    // green
    'green': 'rgba(80, 255, 175)',
    'green-25': 'rgba(80, 255, 175, .25)',
    'green-50': 'rgba(80, 255, 175, .50)',
    'green-dark': 'rgba(33, 150, 78)',
    'green-dark-50': 'rgba(33, 150, 78, .50)',
    'green-dark-75': 'rgba(33,150,78, .75)',

    // purple
    'purple': 'rgba(195, 165, 245)',
    'purple-25': 'rgba(195, 165, 245, .25)',
    'purple-50': 'rgba(195, 165, 245, .50)',
    'purple-dark': 'rgba(105, 45, 202)',
    'purple-dark-50': 'rgba(105, 45, 202, .50)',
    'purple-dark-75': 'rgba(105, 45, 202, .75)',

    // red
    'red': 'rgba(255, 169, 175)',
    'red-15': 'rgba(255, 169, 175, .15)',
    'red-25': 'rgba(255, 169, 175, .25)',
    'red-50': 'rgba(255, 169, 175, .50)',
    'red-dark': 'rgba(220, 39, 55)',
    'red-dark-25': 'rgba(220, 39, 55, .25)',
    'red-dark-50': 'rgba(220, 39, 55, .50)',
    'red-dark-75': 'rgba(220, 39, 55, .75)',
}

const allSize = {
    "1px": '1px',
    "2px": '2px',
    "4px": '4px',
    "6px": '6px',
    "8px": '8px',
    "10px": '10px',

    "0.6rem": "0.6rem",
    "0.8rem": '0.8rem',
    "1rem": '1rem',
    "2rem": '2rem',
    "5rem": '5rem',
    "10rem": '10rem',
    "12rem": '12rem',
};

module.exports = {
    content: [
        './src/page/**/*.{js,ts,jsx,tsx,mdx}',
        './src/component/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            // 将断点设定为 max-width（允许页面的最大值）
            // 即页面宽度小于特定值时，样式才起作用
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }

            'sxl': {'max': '1179px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'slg': {'max': '947px'},
            // => @media (max-width: 1023px) { ... }

            'xslg': {'max': '867px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }

            'xsm': {'max': '479px'},
            // => @media (max-width: 639px) { ... }

            'lxs': {'max': '379px'},
            // => @media (max-width: 639px) { ... }

            'xs': {'max': '320px'},
            // => @media (max-width: 639px) { ... }
        },
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        width: {
            "1/10": "10%",
            "1/5": "20%",
            "3/10": "30%",
            "2/5": "40%",
            "1/2": "50%",
            "3/5": "60%",
            "7/10": "70%",
            "4/5": "80%",
            "9/10": "90%",
            "full": "100%",

            "0": '0',
            "0.6rem": "0.6rem",
            "0.8rem": '0.8rem',
            "1rem": '1rem',
            "1.5rem": '1.5rem',
            "2rem": '2rem',
            "4rem": '4rem',
            "5rem": '5rem',
            "6rem": '6rem',
            "8rem": '8rem',
            "10rem": '10rem',
            "12rem": '12rem',
        },
        extend: {
            blur: allSize,
            fontSize: allSize,
            borderWidth: allSize,
            stroke: allColor,
            padding: allSize,
            margin: allSize,
            top: allSize,
            right: allSize,
            borderRadius: allSize,
            lineHeight: allSize,
            textColor: allColor,
            backgroundColor: allColor,
            borderColor: allColor,
            fill: allColor,
            textDecorationColor: allColor,
        },
    },
    plugins: [],
};