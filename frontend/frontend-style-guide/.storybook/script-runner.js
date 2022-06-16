const root = document.querySelector("#root");
const docsRoot = document.querySelector("#docs-root")
const config = { attributes: false, childList: true, subtree: false };

const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    document.querySelectorAll(`[data-js-component]`).forEach((el) => {
      const jsComponent = el.dataset.jsComponent;
      document.querySelectorAll(`[data-js-component='${jsComponent}']`).forEach((el) => {
        const cmpFunction = root.componentsFunctions[jsComponent];
        cmpFunction(el)
      })
    });
  }
};

const observer = new MutationObserver(callback);
observer.observe(root, config);
observer.observe(docsRoot, config);


