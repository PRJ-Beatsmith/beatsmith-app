import React from "react";
import { AuthCarousel } from "./index";

export default {
  title: "Organisms/Carousels/AuthCarousel",
  component: AuthCarousel,
  argTypes: {
    activeStep: { control: "number" },
    carouselItems: { control: "object" },
  },
};

const Template = (args) => <AuthCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
  activeStep: 2,
  carouselItems: [
    {
      name: "Producer",
      image: "CarouselImage1",
      title: "Layout.Auth.CarouselText1",
    },
    {
      name: "Ghostwriter",
      image: "CarouselImage2",
      title: "Layout.Auth.CarouselText2",
    },
    {
      name: "Rapper",
      image: "CarouselImage3",
      title: "Layout.Auth.CarouselText3",
    },
    {
      name: "Beats",
      image: "CarouselImage4",
      title: "Layout.Auth.CarouselText4",
    },
    {
      name: "Samples",
      image: "CarouselImage5",
      title: "Layout.Auth.CarouselText5",
    },
  ],
};
