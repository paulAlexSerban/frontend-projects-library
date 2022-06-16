// import "./organism.scss";

// import { createText } from "../../../molecules/text/basic/text.create";
// import { createTextList } from "../../../molecules/text-list/basic/text-list.basic.create";

// export const createSection = ({ content }) => {
//   let sectionContent = document.createElement("section");
//   sectionContent.className = ["o-section__base"].join(" ");

//   const rawSectionContent = content.forEach((item) => {
//     switch (item.type) {
//       case "text":
//         console.log(`Content is of type ${item.type}`);
//         item.fragments.forEach((fragment) => {
//           console.log(`fragment: ${fragment}`);
//           sectionContent.insertAdjacentElement(
//             "beforeend",
//             createText({ text: fragment })
//           );
//         });
//         break;
//       case "unordered-text-list":
//         console.log(`Content is of type ${item.type}`);
//         item.fragments.forEach((fragment) => {
//           console.log(`fragment: ${fragment}`);
//           // sectionContent.insertAdjacentElement(
//           //   "beforeend",
//           //   createTextList({ type: "unordered", items: fragment })
//           // );
//         });
//         break;
//       case "link":
//         console.log(`Content is of type ${item.type}`);
//         item.fragments.forEach((fragment) => {
//           console.log(`fragment: ${fragment}`);
//         });
//         break;
//       case "tip":
//         console.log(`Content is of type ${item.type}`);
//         item.fragments.forEach((fragment) => {
//           console.log(`fragment: ${fragment}`);
//         });
//         break;
//       default:
//         console.warning(`Content of type ${item.type} is unknown`);
//     }
//   });

//   return sectionContent;
// };
