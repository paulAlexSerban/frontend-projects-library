import "../../../../structure/pages/index/index.page.layer.scss";
import "./heading.atom.scss";

export const createHeading = ({
  level = 1,
  type = undefined,
  mainHeading,
  subHeadingText = undefined,
  align = "left"
}) => {
  const headingLevel = level === 0 ? 1 : level;
  let mainHeadingText = mainHeading ? mainHeading : `H${headingLevel} heading  \w ${type ? type : "heading-100"} formatting`;
  let headingType = type ? `a-heading__base--${type}` : "a-heading__base--heading-100";
  let textAlign = align !== "left" ? `a-heading__base--is-${align}-aligned `: "";

  const heading = `
    <h${headingLevel} class="a-heading__base ${headingType} ${textAlign}">
      <span class="a-heading__main">${mainHeadingText}</span>${subHeadingText !== undefined ? `<span class="a-heading__subheading">${subHeadingText}</span>` : ""}
    </h${headingLevel}>
  `
  return heading;
};
