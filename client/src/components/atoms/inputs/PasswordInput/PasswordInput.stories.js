import React from "react";
import PasswordInput from "./index";

export default {
  title: "Atoms/Inputs/PasswordInput",
  component: PasswordInput,
  argTypes: {
    onChange: { action: "changed" },
    value: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    style: { control: "object" },
    autoComplete: { control: "text" },
    id: { control: "text" },
    name: { control: "text" },
    showProgressBar: { control: "boolean" },
    showGuidelines: { control: "boolean" },
    showCubeIcon: { control: "boolean" },
    showEyeIcon: { control: "boolean" },
    showPasswordStartIcon: { control: "boolean" },
  },
};

const Template = (args) => <PasswordInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "",
  placeholder: "Enter your password",
  autoComplete: "password",
  value: "b.qwX^zE8^",
  id: "password",
  name: "password",
  fullWidth: true,
};
