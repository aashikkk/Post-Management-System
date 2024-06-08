import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const UpdatePostModel = (props) => {
    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = (e) => {
        props.onHide();
        // e.preventDefault();
        // console.log({ title: values.title, description: values.description });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Enter Post Title"
                                value={values.title}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Post Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                as="textarea"
                                rows={4}
                                placeholder="Enter Post Description"
                                value={values.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <div className="text-end">
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Update Post
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UpdatePostModel;
