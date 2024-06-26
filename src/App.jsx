import "./index.css";
import { AddPost } from "./components/AddPost";
import { Navbar } from "./components/Navbar";
import PostList from "./components/PostList";

function App() {
    return (
        <>
            <Navbar />
            <AddPost />
            <PostList />
        </>
    );
}

export default App;
