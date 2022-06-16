// import "./molecule.scss"

export const createList = ({
  type = "unordered",
  items = { one: "one", two: "two", three: "three", four: "four" },
}) => {
  const list = document.createElement(type === "unordered" ? "ul" : "ol");
  list.className = ["m-list__base", `m-list__base--${type}`].join(
    " "
  );

  let listItem = document.createElement("li");
  listItem.className = ["m-list__item"].join(" ");

  for (const [key, value] of Object.entries(items)) {
    console.log(`${key}: ${value}`);
    listItem.innerHTML = value;
    list.insertAdjacentElement("beforeend", listItem.cloneNode(true));
  }

  return list;
};
