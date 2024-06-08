import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UpdatePostModel from "./UpdatePost";

const PostList = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleEdit = () => {
        console.log("Update Task");
        setModalShow(true);
    };
    const handleDelete = () => {
        console.log("Delete Task");
    };

    return (
        <div className="my-4 w-75 mx-auto">
            <Table striped bordereless="true" size="sm" hover responsive="lg">
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <Button
                                size="sm"
                                variant="primary"
                                className="mx-3"
                                onClick={() => handleEdit()}
                            >
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button size="sm" variant="danger">
                                <i
                                    className="bi bi-trash3"
                                    onClick={() => handleDelete()}
                                ></i>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <UpdatePostModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default PostList;
