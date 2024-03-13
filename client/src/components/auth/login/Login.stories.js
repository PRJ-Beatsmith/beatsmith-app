import React from "react";
import Login from "./index";

export default {
  title: "Auth/Login",
  component: Login,
  argTypes: {
    onLogin: { action: "login" },
    onForgotPassword: { action: "forgot password" },
  },
};

const Template = (args) => <Login {...args} />;
export const Default = Template.bind({});
Default.args = {
  onLogin: (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  },
  onForgotPassword: (e) => {
    e.preventDefault();
    console.log("Forgot password button clicked");
  },
};
