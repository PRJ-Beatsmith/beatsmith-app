import React from "react";
import CheckboxInput from "./index";

export default {
  title: "Atoms/Inputs/CheckboxInput",
  component: CheckboxInput,
  argTypes: {
    onChange: { action: "changed" },
    defaultChecked: { control: "boolean" },
    label: { control: "text" },
    variant: { control: "text" },
    id: { control: "text" },
  },
};

const Template = (args) => <CheckboxInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "I agree to the terms and conditions",
  variant: "outlined",
  id: "checkbox",
};
