import React, {useEffect} from 'react';
import {api} from "../../api";
import {DocumentRequestVO} from "../../api/path/document";

const Home = () => {

    useEffect(() => {

        const documentPageVO: DocumentRequestVO = {
            page_num: 1,
            page_size: 10,
            category_id: 2
        }

        api.acquireDocument(documentPageVO).then();

        api.acquireAllSubcategory().then();
    }, []);


    return (
        <>
            <article className="m-2">
                {/*<BlogArticleItem/>*/}
                {/*<BlogArticleItem/>*/}
                {/*<BlogArticleItem/>*/}
            </article>
        </>
    );
};

export default Home;