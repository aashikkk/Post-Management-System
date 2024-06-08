import React from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const { postsList } = useSelector((state) => state.posts);
    return (
        <div>
            <h1 className="text-center mt-4 text-primary">Post Management</h1>
            <p className="text-center lead">{`Currently ${postsList.length} post(s) listed here`}</p>
        </div>
    );
};
