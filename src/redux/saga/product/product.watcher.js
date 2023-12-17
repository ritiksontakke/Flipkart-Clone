import { takeLatest } from "redux-saga/effects";
import { getCategoryData } from "../../product.slice";
import { getCategoriesHandler } from "./product.handler";



export function* getCategoriesWatcher()
{
    yield takeLatest(getCategoryData.type,getCategoriesHandler);
}