import "./link.atom.scss";

export const createLink = ({ text, href, target, type }) => {
  const innerText = text !== undefined ? text : "Lorem Ipsum Link.";

  const hrefAddress = href !== undefined ? href : "http://";
  const targetAttr = target !== undefined ? target : "_blank";
  const linkType = type !== "basic" ? `a-link__base--${type}` : "";

  const linkEl = `
    <a class="a-link__base ${linkType}" href="${hrefAddress}" target="${targetAttr}">${innerText}</a>
  `;
  return linkEl;
};
