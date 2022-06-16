import { createHeading } from "./Heading.create";
export default {
  title: "Components/Atoms/Typography/Heading",
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    subHeadingText: { control: "text" },
    type: {
      control: "select",
      options: ["heading-100", "heading-200", "heading-300", "heading-400"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};

const Template = (args) => createHeading(args);

export const Base = Template.bind({});