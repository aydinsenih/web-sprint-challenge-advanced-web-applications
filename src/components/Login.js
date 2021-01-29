import React from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { Form, Input, Button } from "antd";

const Login = (props) => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route

    const onFinish = (values) => {
        axiosWithAuth()
            .post("/login", values)
            .then((res) => {
                localStorage.setItem("token", res.data.payload);
                props.history.push("/bubblepage");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Form
                name="login"
                initialValues={{
                    username: "Lambda School",
                    password: "i<3Lambd4",
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
