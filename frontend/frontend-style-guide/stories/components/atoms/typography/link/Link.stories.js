import { createLink } from "./Link.create";

export default {
  title: "Components/Atoms/Typography/Link",
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    target: { control: "select", options: ["_blank", "_self"] },
    type: { control: "select", options: ["storybook", "basic"] },
  }
};

const Template = (args) => createLink(args);
export const Base = Template.bind({});