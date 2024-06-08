import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postsSlice";

export default configureStore({
    reducer: {
        posts: postReducer,
    },
});

// posts - key of reducer, this will be use for useSelector.
