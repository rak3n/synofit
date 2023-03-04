import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input } from "antd";

import Button from "../../components/Button";
import "./antd-override.css";
import styles from "./style.module.css";

const LoginForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  // TODO: Change password visibility toggle icon
  return (
    <div className={styles.container}>
      <Form form={form}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Button
          text="Login"
          style={{
            padding: "12px 30px",
            cursor: "pointer",
            width: "inherit",
          }}
          onClick={() => history.push("/")}
        />
      </Form>
    </div>
  );
};

export default LoginForm;
