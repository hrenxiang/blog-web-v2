import React, {useEffect, useRef, useState} from 'react';
import {Pagination} from "antd";
import {DailyRecord, DailyRequestVO, DailyResponsePageData} from "../../api/path/daily";
import {api} from "../../api";
import LazyImage from "../../component/LazyImage";
import {useStateContext} from "../../contexts/ContextProvider";
import moment from "moment";
import useIntersectionObserver from "../../component/Observer";
import LoadingAnimation from "../../component/Animations/LoadingAnimation";

const Daily = () => {

    const {currentColor} = useStateContext();

    const [state, setState] = useState<DailyRequestVO>({
        page_num: 1,
        page_size: 6
    })

    const [allDaily, setAllDaily] = useState<DailyResponsePageData>();

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        api.acquireDaily(state).then((res) => {
            if (res[0]?.data) {
                setAllDaily(res[0]?.data)
                // 滚动到顶部
                window.scrollTo({top: 0, behavior: 'smooth'});
            }

            setLoading(false);
        })
    }, [state])

    const handlePageChange = (currentPage: number, pageSize: number) => {
        // 将页码发送给后端
        setState(() => ({
            page_num: currentPage,
            page_size: pageSize
        }))
    }

    // const [scrollY, setScrollY] = useState(0);
    //
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    //
    // const calculateOffset = (distance: number, bgColor: string, isScrollX: boolean, isScrollY: boolean, perspectiveX: number, perspectiveY: number) => {
    //     // const scaleFactor = Math.abs(distance - 1);
    //     // const zIndex = distance * 1000;
    //     const translateY = scrollY * distance * perspectiveY;
    //     const translateX = scrollY * distance * perspectiveX;
    //
    //     return {
    //         transform: `${isScrollX ? `translateX(${translateX}px)` : ''} ${isScrollY ? `translateY(${translateY}px)` : ''}`,
    //         backgroundColor: bgColor
    //     };
    // };

    const headerImgRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(headerImgRef, 'bounce-top', "span");

    return (
        <div className="w-full">
            <div className="py-[4rem] 2xl:py-[3.6rem] md:py-[3.2rem] px-16 md:px-12 sm:px-4 relative overflow-hidden relative z-[2]">
                <div className="leading-3r text-dark dark:text-light mx-1/5 2xl:mx-6r xl:mx-4r lg:mx-2r md:mx-0">
                    {/*<div className="mb-2r w-3/5 m-auto" ref={headerImgRef}>*/}
                    {/*    <LazyImage url="https://huangrx.cn/svg/xxlove.svg"*/}
                    {/*               borderRadius="10px"/>*/}
                    {/*</div>*/}
                    {
                        loading ?
                            <div className="flex justify-center items-center mt-4r">
                                <LoadingAnimation/>
                            </div>
                            :
                            allDaily?.records && Object.entries(allDaily.records[0]).map(([year, value]) => (
                                <div key={year}
                                     className="grid grid-cols-2 gap-16 2xl:gap-8 md:gap-0 md:grid-cols-1 mt-2r">
                                    {/*<div className="flex justify-center font-extrabold font-kuaile text-6r 2xl:text-4r md:text-1.6r ">*/}
                                    {/*    <h2>{year}</h2>*/}
                                    {/*</div>*/}
                                    {Array.isArray(value) &&
                                        value.map((event: DailyRecord, index) => (
                                            <div key={event.id}
                                                 className="relative p-4r 2xl:p-2r md:p-1r mb-2r border-dark dark:border-light border-2p border-dashed rounded-10p"
                                                 style={{backgroundColor: currentColor}}>
                                                {
                                                    event.illustration ?
                                                        <div className="w-full mb-1.6r">
                                                            <LazyImage url={event.illustration}/>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                                <div
                                                    className="flex flex-col w-full text-1r leading-tight gap-4 font-pf">
                                                    <p className="flex align-bottom">{moment(event.create_time).format('YYYY-MM-DD')}</p>
                                                    <p className="font-semibold text-xl 2xl:text-lg md:text-1r">{event.tittle}</p>
                                                    <p className="text-1r md:text-08r leading-6">{event.content}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                    }
                </div>

                <div className="w-full flex justify-center">
                    {
                        loading ? '' :
                            <Pagination
                                onChange={handlePageChange}
                                total={allDaily && allDaily.total ? allDaily.total : 0}
                                pageSize={6}
                                showSizeChanger={false}
                                showQuickJumper={false}
                                showLessItems
                            />
                    }
                </div>

                {/*<div*/}
                {/*    className="absolute left-[1rem] top-[10vh] xl:top-[20vh] w-8r xl:w-6r lg:w-4r md:hidden p-2 rounded-10p -z-[1]"*/}
                {/*    style={calculateOffset(0.2, "none", false, true, 0, 6)}>*/}
                {/*    <LazyImage url="https://huangrx.cn/svg/star.svg"/>*/}
                {/*</div>*/}

                {/*/!*<div className="absolute right-[2rem] top-[90vh] w-12r 2xl:w-6r xl:w-4r lg:w-2r p-2 rounded-10p md:hidden"*!/*/}
                {/*/!*     style={calculateOffset(0.2, currentColor, false, true, 0, -0.01)}>*!/*/}
                {/*/!*    <LazyImage url="https://huangrx.cn/svg/you-and-me.svg" />*!/*/}
                {/*/!*</div>*!/*/}

                {/*<div className="fixed right-[1rem] top-[90vh] w-12r 2xl:w-8r xl:w-6r lg:w-4r p-2 rounded-10p md:hidden">*/}
                {/*    <LazyImage url="https://huangrx.cn/svg/you-and-me.svg"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Daily;