import React, {useEffect, useState} from 'react';
import {Pagination} from "antd";
import {DailyRecord, DailyRequestVO, DailyResponsePageData} from "../../api/path/daily";
import {api} from "../../api";
import LazyImage from "../../component/LazyImage";
import {useStateContext} from "../../contexts/ContextProvider";
import moment from "moment";

const Daily = () => {

    const {currentColor} = useStateContext();

    const [state, setState] = useState<DailyRequestVO>({
        page_num: 1,
        page_size: 6
    })

    const [allDaily, setAllDaily] = useState<DailyResponsePageData>();

    useEffect(() => {
        api.acquireDaily(state).then((res) => {
            if (res[0]?.data) {
                setAllDaily(res[0]?.data)
            }
        })
    }, [state])

    const handlePageChange = (currentPage: number, pageSize: number) => {
        // 将页码发送给后端
        setState((prevState) => ({
            page_num: currentPage,
            page_size: pageSize
        }))

        // 滚动到顶部
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateOffset = (distance: number, bgColor: string, isScrollX: boolean, isScrollY: boolean, perspectiveX: number, perspectiveY: number) => {
        // const scaleFactor = Math.abs(distance - 1);
        // const zIndex = distance * 1000;
        const translateY = scrollY * distance * perspectiveY;
        const translateX = scrollY * distance * perspectiveX;

        return {
            transform: `${isScrollX ? `translateX(${translateX}px)` : ''} ${isScrollY ? `translateY(${translateY}px)`: ''}`,
            backgroundColor: bgColor
        };
    };

    return (
        <div className="w-full">
            <div className="py-8r md:py-4r px-16 md:px-12 sm:px-4 relative overflow-hidden relative z-[2]">
                <div className="leading-3r text-dark dark:text-light mx-1/5 2xl:mx-6r xl:mx-4r lg:mx-2r md:mx-0">
                    <div className="bounce-top mb-2r w-3/5 m-auto">
                        <LazyImage url="https://huangrx.cn/svg/xxlove.svg"
                                   borderRadius="10px"/>
                    </div>
                    {allDaily?.records &&
                        Object.entries(allDaily.records[0]).map(([year, value]) => (
                            <div key={year}>
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
                                            <div className="flex flex-col w-full text-1r leading-tight gap-4 font-sans">
                                                <p className="flex align-bottom">{moment(event.create_time).format('YYYY-MM-DD')}</p>
                                                <p className="font-semibold text-1.6r">{event.tittle}</p>
                                                <p className="text-1r md:text-0.6r leading-6">{event.content}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                </div>

                <div className="w-full flex justify-center">
                    <Pagination
                        onChange={handlePageChange}
                        total={allDaily && allDaily.total ? allDaily.total : 0}
                        pageSize={6}
                        showSizeChanger={false}
                        showQuickJumper={false}
                        showLessItems
                    />
                </div>

                <div className="absolute left-[2rem] top-[10vh] xl:top-[20vh] w-12r 2xl:w-6r xl:w-4r lg:w-2r md:w-0 p-2 rounded-10p -z-[1]"
                     style={calculateOffset(0.2, "none", true, true, 9, 9)}>
                    <LazyImage url="https://huangrx.cn/svg/star.svg" />
                </div>

                <div className="absolute right-[2rem] top-[90vh] w-12r 2xl:w-6r xl:w-4r lg:w-2r md:w-0 p-2 rounded-10p"
                     style={calculateOffset(0.6, currentColor, false, true, 0, 1)}>
                    <LazyImage url="https://huangrx.cn/svg/you-and-me.svg" />
                </div>
            </div>
        </div>
    );
};

export default Daily;