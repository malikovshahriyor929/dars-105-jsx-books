import { Button, Form, Input, notification } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { verifyMutation } from "../../hooks/useQueryHandler/useMutation";

const Verify = () => {
  let navigate = useNavigate();
  let { mutate, isLoading } = verifyMutation();
  const onFinish = (values) => {
    mutate({ email: localStorage.getItem("email"), code: values.code });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Form name="verify" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              len: 6,
              message: "Please enter a valid 6-digit code!",
            },
          ]}
        >
          <Input.OTP
            className="text-center tracking-widest"
            placeholder="123456"
            maxLength={6}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            size="large"
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Verify;
