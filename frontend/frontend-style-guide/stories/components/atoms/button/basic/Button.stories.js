// import { createButton } from "./Button.create";
// import Button from "./../Button.mdx";

// export default {
//   title: "Components/Atoms/Button",
//   argTypes: {
//     backgroundColor: { control: "color" },
//     label: { control: "text" },
//     onClick: { action: "button clicked" },
//     btnType: {
//       control: { type: "select" },
//       options: [
//         "primary",
//         "secondary",
//         "success",
//         "warning",
//         "info",
//         "light",
//         "dark",
//         "link",
//       ],
//     },
//     size: {
//       control: { type: "select" },
//       options: ["small", "normal", "large"],
//     },
//     disabled: { control: "boolean" },
//     shape: {
//       control: { type: "select" },
//       options: ["none", "square-rounded-corners", "square-rounded-sides"],
//     },
//     animated: { control: "boolean" },
//   },
//   parameters: {
//     docs: {
//       page: Button,
//     },
//   }
// };

// // connect to Figma design
// // Button.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
// //   },
// // }

// const Template = ({ label, ...args }) => {
//   return createButton({ label, ...args });
// };

// export const EnabledPrimaryNormal = Template.bind({});
// EnabledPrimaryNormal.args = {
//   label: "Enabled Primary Normal",
//   btnType: "primary",
//   disabled: false
// };

// export const DisabledSmall = Template.bind({});
// DisabledSmall.args = {
//   label: "Disabled Small",
//   disabled: true,
//   shape: "square-rounded-corners",
//   size: "small",
// };

// export const OutlineClickSuccessLarge = Template.bind({});
// OutlineClickSuccessLarge.args = {
//   label: "Outline Click Success Large",
//   disabled: false,
//   shape: "square-rounded-corners",
//   btnType: "success",
//   size: "large"
// };

// export const ScaleAnimatedWarning = Template.bind({});
// ScaleAnimatedWarning.args = {
//   label: "Warning Scaled Animated",
//   disabled: false,
//   animated: true,
//   btnType: "warning",
//   shape: "square-rounded-sides"
// };

