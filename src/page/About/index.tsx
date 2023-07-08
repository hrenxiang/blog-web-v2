import React, {useRef} from 'react';
import LazyImage from "../../component/LazyImage";
import useIntersectionObserver from "../../component/Observer";
import AboutSkills from "../../component/AboutSkills";

const About = () => {

    const basicInfoRef = useRef<HTMLDivElement>(null);
    const projectInfoRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(basicInfoRef, 'scale-up-hor-left');
    useIntersectionObserver(projectInfoRef, 'scale-up-hor-right');

    return (
        <div
            className="sm:px-4 mx-1/10 2xl:mx-6r xl:mx-4r lg:mx-2r md:mx-0 font-extrabold font-kuaile text-6r 2xl:text-4r md:text-1.6r text-center leading-3r text-dark dark:text-light"
        >
            <div className="flex flex-col  py-8r md:py-4r relative">

                <div className="font-sans text-08r mb-6r md:mb-4r">
                    <p className="">现在的清晨，你我站在同一个门口</p>
                </div>

                <div className="w-full flex justify-between ">
                    <div className="w-2/5">
                        <div className="w-full flex justify-center">
                            <p style={{writingMode: 'vertical-lr', textOrientation: 'upright'}}>关于我</p>
                        </div>
                        <div className="w-full flex justify-center mt-4r xl:mt-2r">
                            <div className="w-8r h-8r xl:w-4r xl:h-4r md:w-2r md:h-2r rotate-center">
                                <LazyImage url={'https://huangrx.cn/svg/flower.svg'}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 md:w-full relative">
                        <LazyImage url={'https://huangrx.cn/img/about-rose.jpg'}/>

                        <div
                            className="w-8r absolute -bottom-[4rem] -left-[6rem] md:w-4r md:-bottom-[2rem] md:-left-[2rem]">
                            <LazyImage url='https://huangrx.cn/svg/leaf.svg' />
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6r md:mt-4r bg-no-repeat bg-full bg-about-paper bg-center px-1/5 py-4r text-left font-sans text-1.6r md:text-06r dark:text-dark relative">
                    <div ref={basicInfoRef}>
                        <p>来自历史悠久的中国河南，</p>
                        <p>是一名后端开发工程师，</p>
                        <p>梦想来自实干，要继续加油啊！</p>
                    </div>

                    <div
                        className="w-8r absolute -bottom-[2rem] -right-[2rem] xl:w-6r md:w-4r md:right-0">
                        <LazyImage url='https://huangrx.cn/svg/leaf2.svg' />
                    </div>
                </div>

                <div className="w-full mt-6r md:mt-4r flex justify-between items-center">
                    <div className="w-2/5 md:w-3/5">
                        <LazyImage url={'https://huangrx.cn/svg/bubble1.svg'}/>
                    </div>

                    <div className="w-2/5 text-center 2xl:text-4r lg:text-2r md:text-1r">
                        <p>本科学历</p>
                        <p>工作两年</p>
                        <p>热爱且积极</p>
                    </div>
                </div>

                <div className="w-full mt-6r md:mt-4r bg-no-repeat bg-full bg-about-paper bg-center pl-3/5 md:pl-1/5 py-4r text-left font-sans text-1.6r md:text-06r dark:text-dark relative">
                    <div ref={projectInfoRef} className="flex justify-end flex-col w-full">
                        <div className="w-auto">
                            <p>至今参与开发五个项目，</p>
                            <p>涉及商线下收银、酒店服务以及教育平台。</p>
                            <br/>
                            <p>独自开发三个前端服务一个后端服务，</p>
                            <p>是自己的站点前后台服务。</p>
                        </div>
                    </div>
                </div>

                <div className="text-1.6r 2xl:text-1r md:text-06r font-sans w-full mt-6r md:mt-4r flex justify-center mb-4r">
                    <div className="w-7/10 2xl:w-full">
                        <AboutSkills/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
