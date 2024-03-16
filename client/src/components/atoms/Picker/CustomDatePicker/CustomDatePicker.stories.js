import React from "react";
import CustomDatePicker from "./index";

export default {
  title: "Atoms/Picker/CustomDatePicker",
  component: CustomDatePicker,
  argTypes: {},
};

const Template = (args) => <CustomDatePicker {...args} />;
export const Default = Template.bind({});
Default.args = {};
