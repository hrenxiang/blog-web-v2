import { documentApi } from "./path/document"
import {subcategoryApi} from "./path/subcategory";

export const api = {
    ...documentApi,
    ...subcategoryApi
}