import {all} from "redux-saga/effects";
import { getCategoriesWatcher } from "./product/product.watcher";


export function* rootSaga(){
    let array = [getCategoriesWatcher()]
    yield all(array)
}