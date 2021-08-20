import { all } from "@redux-saga/core/effects";
import { movieDetailsSaga } from "../features/MovieDetails/movieDetailsSaga";
import { popularPeopleSaga } from "../features/PersonList/popularPeopleSaga";

export default function* saga() {
    yield all([
        popularPeopleSaga(),
        movieDetailsSaga(),
    ]);
};