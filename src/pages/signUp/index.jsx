import signUp from "../../shared/assets/svg/Two factor authentication-pana 1.svg";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { signUpMutation } from "../../hooks/useQueryHandler/useMutation";

const SignUp = () => {
  let { mutate } = signUpMutation();
  let SignUpFn = (formValue) => {
    mutate(formValue);
    localStorage.setItem("email", formValue.email);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side (Image Section) */}
      <div className="hidden md:flex w-1/2 bg-[#D9C3A3] justify-center items-center p-8">
        <img
          src={signUp}
          alt="Sign Up Illustration"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Sign up</h2>
          <div className="*:text-gray-500 mb-6 flex  gap-2">
            <p> Already have an account?</p>
            <Link to={"/logIn"}>
              <p className="text-blue-500"> Sign in</p>
            </Link>
          </div>

          <Form onFinish={SignUpFn} className="space-y-4">
            <Form.Item
              name="first_name"
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
            >
              <Input
                type="text"
                placeholder="First name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="last_name"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input
                type="text"
                placeholder="Last name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </Form.Item>

            {/* <input
              {...register("phone")}
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg"
            /> */}

            <button
              type="submit"
              className="w-full bg-[#111827] text-white p-3 rounded-lg"
            >
              Next step
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
