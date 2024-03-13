import React from "react";
import FormButton from "./index";

export default {
  title: "Atoms/Buttons/FormButton",
  component: FormButton,
  argTypes: {
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text", "primary"],
    },
    type: { control: "select", options: ["button", "submit", "reset"] },
    label: { control: "text" },
    showNextIcon: { control: "boolean" },
    showPreviousIcon: { control: "boolean" },
  },
};

const Template = (args) => <FormButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Submit",
};
