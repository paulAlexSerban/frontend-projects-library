import "./molecule.scss";
import { createButton } from "../../../atoms/button/basic/button.basic.create";
import { createStep } from "../../../atoms/step/basic/step.basic.create";
import { ProgressSteps } from "./progress-steps.basic";

export const createProgressSteps = ({ steps = 4 }) => {
  const progressSteps = document.createElement("div");
  progressSteps.className = ["m-progress-steps__base"].join(" ");
  progressSteps.dataset.jsComponent = "ProgressSteps";

  // Container
  const progressStepsContainer = document.createElement("div");
  progressStepsContainer.className = ["m-progress-steps__container"].join(" ");

  // Progress Wrapper
  const progressStepsProgressWrapper = document.createElement("div");
  progressStepsProgressWrapper.className = [
    "m-progress-steps__progress-wrapper",
  ].join(" ");

  // Progress Bar
  const progressStepsProgressBar = document.createElement("div");
  progressStepsProgressBar.className = ["m-progress-steps__progress-bar"].join(
    " "
  );
  progressStepsProgressBar.id = ["progress"].join(" ");

  // Steps

  // const stepTemplate = (step) =>
  //   `<div class="m-progress-steps__step">${step}</div>\n`;

  // Button Container
  const progressStepsButtonContainer = document.createElement("div");
  progressStepsButtonContainer.className = [
    "m-progress-steps__button-container",
  ].join(" ");

  // Buttons
  progressStepsButtonContainer.appendChild(
    createButton({
      label: "Prev",
      disabled: true,
      id: "prev",
      primary: true,
    })
  );

  progressStepsButtonContainer.appendChild(
    createButton({
      label: "Next",
      disabled: false,
      id: "next",
      primary: true,
    })
  );

  progressSteps.appendChild(progressStepsContainer);
  progressStepsContainer.appendChild(progressStepsProgressWrapper);
  progressStepsProgressWrapper.appendChild(progressStepsProgressBar);
  for (let i = 1; i <= steps; i++) {
    progressStepsProgressWrapper.appendChild(
      createStep({
        index: i,
        shape: "circle",
        size: "normal",
        active: i === 1,
      }).cloneNode(true)
    );
  }
  progressStepsContainer.appendChild(progressStepsButtonContainer);

  return progressSteps;
};

// Load components JavaScript Logic
document.querySelector("#root").componentsFunctions = {
  ...document.querySelector("#root").componentsFunctions,
  ProgressSteps: ProgressSteps,
};

document.querySelector("#docs-root").componentsFunctions = {
  ...document.querySelector("#docs-root").componentsFunctions,
  ProgressSteps: ProgressSteps,
};
