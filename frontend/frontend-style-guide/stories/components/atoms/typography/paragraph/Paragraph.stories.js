import { createParagraph } from "./Paragraph.create";
import { mock } from "./Paragraph.mock";

export default {
  title: "Components/Atoms/Typography/Paragraph",
  argTypes: {
    content: {
      control: "text",
      description: "Text that will be displayed in the paragraph"
    },
  },
  args: {
    content: mock.basic
  }
};

const Template  = (args) => createParagraph(args);
export const Base = Template.bind({});