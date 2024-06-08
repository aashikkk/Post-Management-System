import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsList: JSON.parse(localStorage.getItem("posts")) || [],
    selectedPost: {},
};

const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {
        addPostToList: (state, action) => {
            const id = Math.random() * 100;
            let post = { ...action.payload, id };
            state.postsList.push(post);
            localStorage.setItem("posts", JSON.stringify(state.postsList));
        },
        removePostFromList: (state, action) => {
            state.postsList = state.postsList.filter(
                (post) => post.id !== action.payload.id
            );
            localStorage.setItem("posts", JSON.stringify(state.postsList));
        },
        updatePostInList: (state, action) => {
            state.postsList = state.postsList.map((post) =>
                post.id === action.payload.id ? action.payload : post
            );
            localStorage.setItem("posts", JSON.stringify(state.postsList));
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
});

export const {
    addPostToList,
    removePostFromList,
    updatePostInList,
    setSelectedPost,
} = postsSlice.actions;

export default postsSlice.reducer;
