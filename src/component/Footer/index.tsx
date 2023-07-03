import React, {useEffect, useState} from 'react';
import {RiGithubLine, RiQqLine, RiWechatLine} from "react-icons/ri";
import {Modal} from "antd";

import {useStateContext} from "../../contexts/ContextProvider";
import {Link} from "react-router-dom";


const Footer = () => {

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

    const [state, setState] = useState({
        isModalOpen: false,
        isWeChat: false
    });

    const showModal = (param: string) => {
        let flag = state.isWeChat;

        if ("wechat" === param) {
            flag = true;
        }

        setState({
            isModalOpen: true,
            isWeChat: flag
        });
    };

    const handleOk = () => {
        setState((prevState) => ({
            ...prevState,
            isModalOpen: false
        }))
    };

    const handleCancel = () => {
        setState((prevState) => ({
            ...prevState,
            isModalOpen: false
        }))
    };


    return (
        <footer className="py-6 px-16 font-ot dark:bg-dark dark:text-light md:px-12 sm:px-4">
            <div className="flex w-full items-center justify-between sm:flex-col">
                <div className="sm:w-full sm:mb-1rem flex gap-6 items-center sm:justify-between">
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"
                             className="h-auto w-8rem lg:w-4rem fill-dark dark:fill-light">
                            <rect width="160" height="160" rx="15" ry="15"/>
                            <text x="82" y="90" fontSize="120" textAnchor="middle" strokeWidth="1"
                                  dominantBaseline="middle"
                                  className=" fill-dark-mode dark:fill-light stroke-light dark:stroke-dark">H
                            </text>
                            <text x="80" y="89" fontSize="120" fill="#fff" textAnchor="middle"
                                  dominantBaseline="middle" className=" fill-light dark:fill-dark-mode">H
                            </text>
                        </svg>
                    </a>
                    <div className="text-1rem">
                        保持实干作风<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;锤炼实干品质!
                    </div>
                </div>

                <div className="flex sm:w-full sm:justify-between">
                    <div className="flex flex-col text-xl gap-2 mr-5rem">
                        <button className="flex items-center text-1rem group relative">
                            <Link to="/">Home</Link>
                            <span
                                className={`absolute left-0  top-[100%] rounded-md bg-purple-dark dark:bg-purple h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                        </button>
                        <button className="flex items-center text-1rem group relative">
                            <Link to="/">Video</Link>
                            <span
                                className={`absolute left-0  top-[100%] rounded-md bg-red-dark dark:bg-red h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                        </button>
                        <button className="flex items-center text-1rem group relative">
                            <Link to="/">Recourse</Link>
                            <span
                                className={`absolute left-0  top-[100%] rounded-md bg-green-dark dark:bg-green h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                        </button>
                        <button className="flex items-center text-1rem group relative">
                            <Link to="https://www.huangrx.cn">About</Link>
                            <span
                                className={`absolute left-0  top-[100%] rounded-md bg-dark dark:bg-light h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                        </button>
                    </div>

                    <div className="flex flex-col text-xl gap-2">
                        <a href="https://github.com/hrenxiang" target="_blank " rel="noreferrer">
                            <button className="flex items-center text-1rem">
                                <div className="mr-2 h-auto w-1.5rem p-1 bg-[#FF8551] rounded-4px">
                                    <RiGithubLine className=" fill-light w-full h-full"/>
                                </div>
                                <div className="group relative">
                                    Github
                                    <span
                                        className={`absolute left-0  top-[100%] rounded-md bg-[#FF8551] h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                                </div>
                            </button>
                        </a>

                        <button className="flex items-center text-1rem"
                                onClick={() => {
                                    showModal("wechat")
                                }}>
                            <div className="mr-2 h-auto w-1.5rem p-1 bg-[#55acee] rounded-4px">
                                <RiQqLine className=" fill-light w-full h-full"/>
                            </div>
                            <div className="group relative">
                                QQ
                                <span
                                    className={`absolute left-0  top-[100%] rounded-md bg-[#55acee] h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                            </div>
                        </button>

                        <button className="flex items-center text-1rem"
                                onClick={() => {
                                    showModal("qq")
                                }}>
                            <div className="mr-2 h-auto w-1.5rem p-1 bg-[#87CBB9] rounded-4px">
                                <RiWechatLine className=" fill-light w-full h-full"/>
                            </div>
                            <div className="group relative">
                                Wechat
                                <span
                                    className={`absolute left-0  top-[100%] rounded-md bg-[#87CBB9] h-[2px] ease w-0 rounded-md transition-all duration-200 group-hover:w-full`}>&nbsp;</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>

            <hr className="my-6 h-px w-full border-0 bg-dark-50 text-dark dark:bg-light-50"/>

            <div className="flex justify-between">
                <a href="https://beian.miit.gov.cn/#/Integrated/index"
                   target="_blank"
                   rel="noreferrer"
                   className="underline-offset-4 hover:underline">
                    <p className="text-dark dark:text-light">&copy; 豫ICP备2022017977号</p>
                </a>

                <p className="text-dark dark:text-light">Huangrx🍃</p>
            </div>

            <Modal title="天选的缘分啊！"
                   open={state.isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   okText="好的"
                   cancelText="下次啦"
            >
                <div>
                    {
                        state.isWeChat ?
                            <img
                                src="https://images.huangrx.cn/uploads/2023/05/01/66e7f6b3ed5be545c39ef15a5edae42.jpg"
                                style={{width: "100%"}} alt="qq"/>
                            :
                            <img
                                src="https://images.huangrx.cn/uploads/2023/05/01/1682924167357.png"
                                style={{width: "100%"}} alt="wechat"/>
                    }
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
