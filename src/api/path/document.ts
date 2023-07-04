import {Post} from "../server";

export interface DocumentResponsePageData {
    countId: null;
    current: number;
    maxLimit: null;
    optimizeCountSql: boolean;
    orders: string[];
    pages: number;
    records: DocumentResponseRecord[];
    searchCount: boolean;
    size: number;
    total: number;
}

export interface DocumentResponseRecord {
    author: string;
    author_avatar: string;
    category: string;
    cover: string;
    create_time: string;
    description: string;
    document_url: string;
    id: number;
    online: number;
    subcategory: string;
    title: string;
    update_time: string;
}

export interface DocumentRequestVO {
    page_num: number;
    page_size: number;
    category_id: number;
}

export const acquireDocument = (param: DocumentRequestVO) => {
    return Post("/document/acquire",
        {
            "page_num": param.page_num,
            "page_size": param.page_size,
            "category_id": param.category_id
        });
}

export const documentApi = {
    acquireDocument
}