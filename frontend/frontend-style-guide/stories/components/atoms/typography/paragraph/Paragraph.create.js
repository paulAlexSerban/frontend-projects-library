import "./paragraph.atom.scss";

export const createParagraph = ({ content }) => {  
  const innerContent = content;
  const paragraph = `<p class="a-paragraph__base">${innerContent}</p>`;
  return paragraph;
};
