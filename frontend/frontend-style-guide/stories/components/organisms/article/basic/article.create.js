// import "./organism.scss";

// import { createHeading } from "../../../atoms/heading/basic/heading.create";
// import { createSection } from "../../section/basic/section.create";

// export const createArticle = ({
//   heading,
//   content
// }) => {
//   const articleContent = document.createElement("article");
//   articleContent.className = ["o-article__base"].join(" ");

//   const headingText = createHeading({
//     level: 2,
//     type: "heading-200",
//     mainHeading: heading ? heading : "Article heading is not defined"
//   });
//   articleContent.insertAdjacentHTML("afterbegin", headingText)

//   const sectionContent = createSection({
//     content: content
//   })
//   articleContent.insertAdjacentElement("beforeend", sectionContent)

//   // const articleContent = ` 
//   //   <article class="o-article__base"> 
//   //   ${headingText}
//   //   ${sectionContent}
//   // </article>` ;
//   return articleContent;
// }