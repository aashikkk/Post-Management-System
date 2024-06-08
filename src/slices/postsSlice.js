import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    postsList: JSON.parse(localStorage.getItem("posts")) || [],
    selectedPost: {},
    isLoading: false,
    error: "",
};

const BASE_URL = "http://localhost:8000/posts";

//GET
export const getPostsFromServer = createAsyncThunk(
    "posts/getPostsFromServer",
    async (_, { rejectWithValue }) => {
        const response = await fetch(BASE_URL);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            return rejectWithValue({ error: "No Tasks Found" });
        }
    }
);

//POST
export const addPostToServer = createAsyncThunk(
    "posts/addPostToServer",
    async (post, { rejectWithValue }) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(post),
        };
        const response = await fetch(BASE_URL, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            return rejectWithValue({ error: "No Tasks Found" });
        }
    }
);

const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {
        addPostToList: (state, action) => {
            const id = Math.random() * 100;
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
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostsFromServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPostsFromServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = "";
                state.postsList = action.payload;
            })
            .addCase(getPostsFromServer.rejected, (state, action) => {
                state.error = action.payload.error;
                state.isLoading = false;
                state.postsList = [];
            })
            .addCase(addPostToServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addPostToServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = "";
                state.postsList.push(action.payload);
            })
            .addCase(addPostToServer.rejected, (state, action) => {
                state.error = action.payload.error;
                state.isLoading = false;
            });
    },
});

export const {
    addPostToList,
    removePostFromList,
    updatePostInList,
    setSelectedPost,
} = postsSlice.actions;

export default postsSlice.reducer;
