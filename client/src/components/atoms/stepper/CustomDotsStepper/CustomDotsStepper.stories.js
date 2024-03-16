import React from "react";
import CustomDotsStepper from "./CustomDotsStepper";

export default {
  title: "CustomDotsStepper",
  component: CustomDotsStepper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CustomDotsStepper {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  activeStep: 0,
  steps: 2,
};
