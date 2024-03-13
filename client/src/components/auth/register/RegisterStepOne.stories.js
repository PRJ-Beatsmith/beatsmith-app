import React from "react";
import StepOne from "./index";

export default {
  title: "Auth/Register/StepOne",
  component: StepOne,
  argTypes: {
    onContinue: { action: "continue" },
  },
};

const Template = (args) => <StepOne {...args} />;
export const Default = Template.bind({});
Default.args = {
  onContinue: (e) => {
    e.preventDefault();
    console.log("Continue button clicked");
  },
};
