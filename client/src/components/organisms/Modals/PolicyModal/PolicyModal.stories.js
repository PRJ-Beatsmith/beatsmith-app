import React from "react";
import { PolicyModal } from "./index";

export default {
  title: "Organisms/Modals/PolicyModal",
  component: PolicyModal,
  argTypes: {
    open: { control: "boolean" },
    onClose: { control: "boolean" },
    modalTitle: { control: "text" },
    modalContent: { control: "text" },
  },
};

const Template = (args) => <PolicyModal {...args} />;
export const Default = Template.bind({});
Default.args = {
  open: true,
  modalTitle: "Privacy Policy",
  modalContent: `This privacy policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of the Service.`,
};
