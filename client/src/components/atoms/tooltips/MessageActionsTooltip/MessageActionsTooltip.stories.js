import React from "react";
import MessageActionsTooltip from "./index";

export default {
  title: "Atoms/Tooltips/MessageActionsTooltip",
  component: MessageActionsTooltip,
  argTypes: {
    children: { control: "text" },
  },
};

const Template = (args) => <MessageActionsTooltip {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "MessageActionsTooltip",
};
