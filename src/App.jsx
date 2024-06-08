import "./index.css";
import { AddTask } from "./components/AddTask";
import { Navbar } from "./components/Navbar";
import PostList from "./components/PostList";

function App() {
    return (
        <>
            <Navbar />
            <AddTask />
            <PostList />
        </>
    );
}

export default App;
