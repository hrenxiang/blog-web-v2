import React, {useEffect, useState} from 'react';
import {useStateContext} from "../../contexts/ContextProvider";
import {BiMoon, BiSun} from "react-icons/bi";
import {CgMenuMotion} from "react-icons/cg";
import {IoMdClose} from "react-icons/io";
import SiteOverlay from "../SiteOverlay";
import {Link, useLocation} from "react-router-dom";

const NavBar: React.FC = () => {

    const {
        currentMode,
        setCurrentMode,
    } = useStateContext();

    const location = useLocation();

    const [menuFlag, setMenuFlag] = useState<boolean>(false);

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeMode) {
            setCurrentMode(currentThemeMode);
        }
    }, [currentMode, setCurrentMode]);

    const switchThemeMode = (themeMode: string) => {
        setCurrentMode(themeMode);
        localStorage.setItem("themeMode", themeMode)
    }

    const switchMenuButton = () => {
        setMenuFlag(!menuFlag);
    }

    return (
        <header className="relative flex w-full flex-col bg-light  text-dark   dark:bg-dark-mode dark:text-light ">
            <nav className="flex w-full items-center justify-between py-4 px-16 lg:px-14 md:px-12 sm:px-4 ">
                <a className="w-12rem sm:w-10rem " href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562 160"
                         className="h-auto w-full fill-dark dark:fill-light">
                        <rect width="160" height="160" rx="15" ry="15"/>
                        <text x="82" y="90" fontSize="120" textAnchor="middle" strokeWidth="1"
                              dominantBaseline="middle" className=" fill-dark-mode dark:fill-light stroke-light dark:stroke-dark">H
                        </text>
                        <text x="80" y="89" fontSize="120" fill="#fff" textAnchor="middle"
                              dominantBaseline="middle" className=" fill-light dark:fill-dark-mode">H
                        </text>
                        <text x="180" y="75" fontSize="46"
                              className="fill-dark dark:fill-light font-medium">PracticalDreamer
                        </text>
                        <text x="180" y="130" fontSize="38" fill="#646464">By Huangrx</text>
                    </svg>
                </a>

                <div className={`ease duration-400 z-50 flex items-center text-1rem transition-all lg:fixed lg:left-[50%]
                                lg:w-[50%] lg:translate-x-[-50%]
                                lg:flex-col  lg:justify-center lg:rounded-lg lg:bg-dark lg:py-6 lg:text-light
                                lg:shadow-xl dark:lg:border-dark
                                dark:lg:bg-light dark:lg:text-dark
                                dark:lg:shadow-xl
                                md:w-[75%]
                                sm:w-[90%] ${menuFlag ? "lg:top-[20%]" : "lg:-top-[500%]"}`}>
                    <div className="group relative undefined">
                        {
                            menuFlag ? <Link to="/" onClick={switchMenuButton}>Home</Link> : <Link to="/">Home</Link>
                        }
                        <span className={`absolute left-0  top-[100%] rounded-md bg-purple-dark dark:bg-purple h-[2px] ${location.pathname === "/" ?"w-full":"ease w-0 rounded-md transition-all duration-200 group-hover:w-full"}`}>&nbsp;</span>
                    </div>

                    <div className="group relative ml-6 lg:m-0 lg:mt-6 lg:ml-0">
                        {
                            menuFlag ? <Link to="/about" onClick={switchMenuButton}>Videos</Link> : <Link to="/about">Videos</Link>
                        }
                        <span className={`absolute left-0 top-[100%] bg-red-dark dark:bg-red h-[2px]  ${location.pathname === "/about" ?"w-full":"ease w-0 rounded-md transition-all duration-200 group-hover:w-full"}`}>&nbsp;</span>
                    </div>

                    <div className="group relative ml-6 lg:m-0 lg:mt-6 lg:ml-0">
                        {
                            menuFlag ? <Link to="/resources" onClick={switchMenuButton}>Resources</Link> : <Link to="/resources">Resources</Link>
                        }
                        <span className={`absolute left-0 top-[100%] bg-green-dark dark:bg-green h-[2px]  ${location.pathname === "/resources" ?"w-full":"ease w-0 rounded-md transition-all duration-200 group-hover:w-full"}`}>&nbsp;</span>
                    </div>

                    <div className="group relative mx-6 lg:m-0 lg:mx-0 lg:mt-6">
                        {
                            menuFlag ? <Link to="https://www.huangrx.cn" onClick={switchMenuButton}>About</Link> : <Link to="https://www.huangrx.cn">About</Link>
                        }
                        <span className={`absolute left-0 top-[100%] bg-dark dark:bg-light h-[2px]  ${location.pathname === "/resources" ?"w-full":"ease w-0 rounded-md transition-all duration-200 group-hover:w-full"}`}>&nbsp;</span>
                    </div>

                    <a href="mailto:codebucks27@gmail.com" target="_blank" rel="noreferrer"
                       className=" hover:border-1 relative mr-6 w-max rounded border border-solid border-dark bg-dark p-2 px-4 text-light hover:bg-light hover:text-dark
                       dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark  dark:hover:text-light lg:mt-6 lg:mr-0 lg:bg-light lg:text-dark  dark:lg:bg-dark dark:lg:text-light ">
                        <span className="absolute -right-1 -top-1 flex h-3 w-0.8rem">
                            <span className="absolute inline-flex h-3 w-0.8rem animate-ping rounded-full bg-purple-dark opacity-75"></span>
                            <span className="relative inline-flex h-3 w-0.8rem rounded-full bg-purple"></span>
                        </span>
                        <span>Hire Me</span>
                    </a>

                    {
                        currentMode === "Dark" ?
                            <button className="ease mr-6 flex items-center justify-center rounded p-1.5 lg:mr-0 lg:hidden bg-light  text-dark" onClick={() => switchThemeMode("Light")}>
                                <BiSun />
                            </button>
                            :
                            <button className="ease mr-6 flex items-center justify-center rounded p-1.5 lg:mr-0 lg:hidden bg-dark  text-light" onClick={() => switchThemeMode("Dark")}>
                                <BiMoon/>
                            </button>
                    }
                </div>

                <div className=" hidden items-center justify-center lg:flex">
                    <button aria-label="Hamburger Menu" className="group relative rounded-lg border-2 border-solid border-dark dark:border-light  sm:rounded sm:border-0">
                        {
                            menuFlag ?
                                <IoMdClose className="flex h-[24px] w-[24px] justify-between sm:h-[20px] sm:w-[20px] transform ease-in duration-300 navbar-close-menu" onClick={switchMenuButton}/>
                                :
                                <CgMenuMotion className="flex h-[24px] w-[24px] justify-center sm:h-[20px] sm:w-[20px]  transform ease-in duration-300 navbar-open-menu" onClick={switchMenuButton}/>
                        }
                    </button>
                    {
                        currentMode === "Dark" ?
                            <button className="ease ml-6 flex items-center justify-center rounded p-1.5 bg-light  text-dark" onClick={() => switchThemeMode("Light")}>
                                <BiSun/>
                            </button>
                            :
                            <button className="ease ml-6 flex items-center justify-center rounded p-1.5 bg-dark  text-light" onClick={() => switchThemeMode("Dark")}>
                                <BiMoon/>
                            </button>
                    }

                    {
                        menuFlag ? <SiteOverlay fc={switchMenuButton}/> : ""
                    }
                </div>
            </nav>
        </header>
    );
};

export default NavBar;