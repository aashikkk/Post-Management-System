import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsList: [],
    selectedPost: {},
};

const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {
        addPostToList: (state, action) => {
            const id = Math.random * 100;
            let post = { ...action.payload, id };
            state.postsList.push(post);
        },
        removePostFromList: (state, action) => {
            state.postsList = state.postsList.filter(
                (post) => post.id !== action.payload.id
            );
        },
        updatePostInList: (state, action) => {
            state.postsList = state.postsList.map((post) =>
                post.id === action.payload.id ? action.payload : post
            );
        },
        selectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
});

export const { addPostToList, removePostFromList, updatePostInList, selectedPost } = postsSlice.actions;

export default postsSlice.reducer;

