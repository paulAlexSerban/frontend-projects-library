import "./molecule.scss";

export const createPureCssAccordion = ({}) => {
  const accordion = `
  <div class="m-pureCssAccordion__base">
      <div class="m-pureCssAccordion__item">
        <input class="m-pureCssAccordion__inputToggle" type="checkbox" id="chck1">
        <label class="m-pureCssAccordion__itemLabel" for="chck1">Item 1</label>
        <div class="m-pureCssAccordion__content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div class="m-pureCssAccordion__item">
      <input class="m-pureCssAccordion__inputToggle" type="checkbox" id="chck2">
      <label class="m-pureCssAccordion__itemLabel" for="chck2">Item 2</label>
      <div class="m-pureCssAccordion__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
      </div>
      </div>
      <div class="m-pureCssAccordion__item">
      <input class="m-pureCssAccordion__inputToggle" type="checkbox" id="chck3">
      <label class="m-pureCssAccordion__itemLabel" for="chck3">Item 2</label>
      <div class="m-pureCssAccordion__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
      </div>
      </div>
      <div class="m-pureCssAccordion__item">
        <input class="m-pureCssAccordion__inputToggle" type="checkbox" id="chck4">
        <label class="m-pureCssAccordion__itemLabel" for="chck4">Item 2</label>
        <div class="m-pureCssAccordion__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  `;

  return accordion;
};
