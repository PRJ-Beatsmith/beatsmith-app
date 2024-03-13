import React from "react";
import CustomInput from "./index";

export default {
  title: "Atoms/Inputs/CustomInput",
  component: CustomInput,
  argTypes: {
    onChange: { action: "changed" },
    type: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    fullWidth: { control: "boolean" },
    style: { control: "object" },
    autoComplete: { control: "text" },
    id: { control: "text" },
    name: { control: "text" },
    showEmailStartIcon: { control: "boolean" },
    showUserStartIcon: { control: "boolean" },
  },
};

const Template = (args) => <CustomInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "",
  placeholder: "Enter your email",
  type: "email",
  autoComplete: "email",
  id: "email",
  name: "email",
};
