import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddTask = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title: values.title, description: values.description });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <section className="my-4 w-50 mx-auto">
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
                <div className="text-end">
                    <Button variant="primary" type="submit">
                        Add Task
                    </Button>
                </div>
            </Form>
        </section>
    );
};
