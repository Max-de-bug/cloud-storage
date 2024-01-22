"use client";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../styles/Auth.module.scss";
import { LoginFormDTO } from "../api/dto/auth.dto";
import { setCookie } from "nookies";

import * as Api from "../api";
import error from "next/error";

export const LoginForm = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const response = await Api.auth.login(values);
      const token = response.token;
      notification.success({
        message: "You have been registered succesfully!",
        duration: 2,
      });

      setCookie(null, "_token", token, {
        path: "/",
      });
    } catch (error) {}
    console.error(error);
  };

  return (
    <div className={styles.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
