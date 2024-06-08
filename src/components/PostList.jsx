import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UpdatePostModel from "./UpdatePost";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost, removePostFromList } from "../slices/postsSlice";

const PostList = () => {
    const [modalShow, setModalShow] = useState(false);
    const { postsList } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleEdit = (post) => {
        console.log("Update Task");
        setModalShow(true);
        dispatch(setSelectedPost(post));
    };
    const handleDelete = (post) => {
        console.log("Delete Task");
        dispatch(removePostFromList(post));
    };

    return (
        <div className="my-4 w-75 mx-auto">
            {postsList.length === 0 ? (
                <p className="text-center lead">No posts found</p>
            ) : (
                <Table
                    striped
                    bordereless="true"
                    size="sm"
                    hover
                    responsive="lg"
                >
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postsList &&
                            postsList.map((post, index) => {
                                return (
                                    <tr className="text-center" key={post.id}>
                                        <td>{index + 1}</td>
                                        <td>{post.title}</td>
                                        <td>{post.description}</td>
                                        <td>
                                            <Button
                                                size="sm"
                                                variant="primary"
                                                className="mx-3"
                                                onClick={() => handleEdit(post)}
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </Button>
                                            <Button size="sm" variant="danger">
                                                <i
                                                    className="bi bi-trash3"
                                                    onClick={() =>
                                                        handleDelete(post)
                                                    }
                                                ></i>
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            )}

            <UpdatePostModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default PostList;
