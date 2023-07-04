import React, {useEffect, useState} from 'react';
import {DocumentRequestVO, DocumentResponsePageData} from "../../../api/path/document";
import {api} from "../../../api";
import {SubcategoryVO} from "../../../api/path/subcategory";
import {Link, useLocation} from "react-router-dom";
import {BlogArticleItemV2} from "../../../component/ArticleItem";
import {Pagination} from "antd";
import {ArticleMarkdownStyles} from "../../../component/SingleComponentStyles";

const BlogArticleCategory = () => {

    const location = useLocation();

    const match = location.pathname?.match(/\/blogs\/category\/(\d+)/);

    const id = match && match[1];

    const [currentCategory, setCurrentCategory] = useState<number>(id ? parseInt(id) : 0);
    const [currentCategoryName, setCurrentCategoryName] = useState<string>('All');

    const [allSubcategory, setAllSubcategory] = useState<SubcategoryVO[]>([]);

    const [allDocument, setAllDocument] = useState<DocumentResponsePageData>();

    const [state, setState] = useState({
        pageNum: 1,
        pageSize: 9
    })

    useEffect(() => {
        api.acquireAllSubcategory().then((res) => {
            setAllSubcategory(res[0].data)
        });
    }, []);


    useEffect(() => {
        const documentPageVO: DocumentRequestVO = {
            page_num: state.pageNum,
            page_size: state.pageSize,
            category_id: currentCategory
        }

        api.acquireDocument(documentPageVO).then((res) => {
            setAllDocument(res[0].data)
        });
    }, [currentCategory, state.pageNum, state.pageSize]);

    const switchCategory = (category_id: number, category_name: string) => {
        setCurrentCategory(category_id);
        setCurrentCategoryName(category_name);
    }

    function handlePageChange(currentPage:number, pageSize:number) {
        // 将页码发送给后端
        setState(() => ({
            pageNum: currentPage,
            pageSize: pageSize,
        }))

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div
            className="relative mx-32 flex flex-col items-center justify-start lg:mx-14 md:mx-12 xsm:mx-4 text-1rem bg-light dark:bg-dark-mode py-16">

            <h1 className="flex mb-8 block w-full font-ot text-4xl font-semibold capitalize leading-tight tracking-wide text-purple-dark dark:text-purple md:text-center xs:text-3xl ">
                #&nbsp;{currentCategoryName}
            </h1>
            <header className="flex w-full flex-row items-center justify-start overflow-x-auto flex-wrap">
                <Link className={`p-2 px-3 mr-6 lg:mr-4 md:mb-2 md:mr-2 border-solid border-purple-dark dark:border-purple border-1px rounded font-medium capitalize last:mr-0 hover:bg-transparent
                            bg-purple-50 dark:bg-purple hover:bg-transparent hover:dark:bg-transparent hover:dark:text-light text-purple-dark dark:text-dark hover:cursor-pointer ${currentCategory === 0 ? "!bg-purple-dark !text-light" : ""}`}
                      onClick={() => {
                          switchCategory(0, 'All')
                      }}
                      to="/blogs/category/0" key="0">
                    <h2>All</h2>
                </Link>
                {
                    allSubcategory.map((subcategory) => (
                        <Link className={`p-2 px-3 mr-6 lg:mr-4 md:mb-2 md:mr-2 border-solid border-purple-dark dark:border-purple border-1px rounded font-medium capitalize last:mr-0 hover:bg-transparent
                            bg-purple-50 dark:bg-purple hover:bg-transparent hover:dark:bg-transparent hover:dark:text-light text-purple-dark dark:text-dark hover:cursor-pointer ${currentCategory === subcategory.subcategory_id ? "!bg-purple-dark !text-light" : ""}`}
                              onClick={() => {
                                  switchCategory(subcategory.subcategory_id, subcategory.subcategory_name)
                              }}
                              to={`/blogs/category/${subcategory.subcategory_id}`} key={subcategory.subcategory_id}>
                            <h2>{subcategory.subcategory_name}</h2>
                        </Link>
                    ))
                }
            </header>
            <article className="mt-8 grid w-full grid-cols-3 gap-16 xl:gap-12 sxl:gap-8  lg:grid-cols-2  md:grid-cols-1">
                {
                    allDocument?.records?.map((record) => (
                        <BlogArticleItemV2 record={record} key={record.id}/>
                    ))
                }
            </article>
            <div className="w-full my-12 md:my-8">
                <ArticleMarkdownStyles lightColor={"#C3A5F5FF"} darkColor={"#692DCAFF"}/>
                <Pagination
                    onChange={handlePageChange}
                    total={allDocument?.total}
                    pageSize={9}
                    showSizeChanger={false}
                    showQuickJumper={false}
                    showLessItems
                    showTotal={(total) => `共 ${total} 条`}
                    className="text-dark dark:text-light flex items-center justify-center w-full"
                />
            </div>
        </div>
    );
};

export default BlogArticleCategory;