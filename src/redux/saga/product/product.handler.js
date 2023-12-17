import { call, put } from "redux-saga/effects";
import { saveCategories } from "../../product.slice";
import { getCategoriesService } from "./product.service";

export function* getCategoriesHandler() {
  try {
    let data = yield call(getCategoriesService);
    yield put(saveCategories(data));
  } catch (error) {
    alert("server error");
  }
}
