import { useState } from "react";
import codes from "country-codes-list";
import { Select, Input, InputNumber, Form, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";

type Props = {
  close: () => void;
};

const Login = ({ close }: Props) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
  });
  const [success, setSuccess] = useState("");
  const countryCodes = codes
    .all()
    .map((code) => Number(code.countryCallingCode))
    .sort((a, b) => Number(a) - Number(b));
  console.log("codes");
  const newCodes = Array.from(new Set(countryCodes));

  const onFinish = (values: typeof data) => {
    const newData = {
      ...values,
      phone: `+${values.countryCode}${values.phone}`,
    };
    setSuccess(
      "Thank you for submitting your details. Our Career Advisor will get in touch with you shortly."
    );
    console.log("data entered", newData);
  };

  return (
    <div className=" w-full flex sm:flex-row flex-col relative">
      <button className=" absolute top-0 right-2 p-2" onClick={close}>
        <CloseOutlined />
      </button>
      <div className=" sm:w-1/2 relative w-full overflow-hidden p-5 bg-[#04075b] text-white flex flex-col gap-y-6">
        <div className=" absolute rounded-3xl p-6 -right-14 w-[12em] -rotate-45 top-16 bg-gradient-to-br from-sky-400 via-green-500 to-green-700"></div>
        <button className=" z-10 font-bold border-green-500 w-fit rounded-md text-green-500 border p-1 text-xs">
          Talk to a Career Expert
        </button>
        <h1 className=" text-4xl font-bold z-10">
          Schedule 1:1 free counselling
        </h1>
        <p className=" z-10 text-xl mt-9 font-semibold">
          Start your journey to becoming a Full-Stack Developer!
        </p>
        {/* ul with check icons */}
        <ul className=" list-disc list-inside gap-y-3 flex flex-col">
          <li className=" flex gap-x-2">
            <CheckIcon />
            <p>Experience Outcome-based Immersive Learning</p>
          </li>
          <li className=" flex gap-x-2">
            <CheckIcon />
            <p>
              Globally Recognized Accreditations, Case Studies and Real-World
              Simulations
            </p>
          </li>
          <li className=" flex gap-x-2">
            <CheckIcon />
            <p>Training by Renowned Industry Experts</p>
          </li>
        </ul>
      </div>
      <div className=" sm:w-1/2 w-full py-16 p-8 bg-white flex flex-col">
        <Form
          role="form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className=" w-full flex flex-col gap-y-3"
        >
          <p className=" text-sm text-green-600">{success}</p>
          <div className=" flex gap-x-2">
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input size="large" placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input size="large" placeholder="Last Name" />
            </Form.Item>
          </div>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" size="large" placeholder="Email" />
          </Form.Item>
          <div className=" flex gap-x-2 w-full">
            <Form.Item
              name="countryCode"
              rules={[
                { required: true, message: "Please input your country code!" },
              ]}
            >
              <Select
                size="large"
                showSearch
                style={{ width: 80 }}
                placeholder="Select Country Code"
                optionFilterProp="children"
                onChange={(value: string) => {
                  console.log("value", value);
                  setData({ ...data, countryCode: value });
                }}
              >
                {newCodes.map((code) => (
                  <Select.Option key={code} value={code}>
                    +{code}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="phone"
              className=" w-full"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <InputNumber
                className=" w-full"
                onChange={(value) => {
                  console.log("value", value);
                  setData({ ...data, phone: value?.toString() ?? "" });
                }}
                size="large"
                placeholder="Phone Number"
              />
            </Form.Item>
          </div>
          {/* terms and conditions */}
          <div className=" flex items-center h-fit gap-x-2">
            <Form.Item
              className="mb-0"
              rules={[
                {
                  required: true,
                  message: "Please accept terms and conditions!",
                },
              ]}
              name="terms"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
            <p className=" text-sm">
              I want to receive updates directly on WhatsApp
            </p>
          </div>
          <Form.Item>
            <button className=" py-3 text-base duration-300 font-semibold bg-gradient-to-r from-violet-700 via-orange-600 to-orange-600 text-white w-full p-2 rounded-md">
              Submit
            </button>
          </Form.Item>
        </Form>
        <p className=" text-sm flex flex-wrap justify-center gap-1 text-center">
          By submitting this form, you agree to KnowledgeHut
          <a
            className=" text-blue-600"
            href="#"
          >
            Privacy Policy
          </a>
          and
          <a
            className=" text-blue-600"
            href="#"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        // eslint-disable-next-line max-len
        d="M18.707 4.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 13.586l9.293-9.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
