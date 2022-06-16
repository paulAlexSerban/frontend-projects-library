import "./atom.scss";

export const createButton = ({
  btnType = "primary",
  size,
  backgroundColor,
  label = "Button",
  onClick,
  disabled = false,
  id = 'button-id',
  shape,
  animated,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  btn.disabled = disabled;
  btn.id = id;

  const modeModifier = `a-button__base--${btnType}`;
  const shapeModifier = shape !== "none" ? `a-button__base--${shape}`: '';
  const isAnimated = animated ? 'a-button__base--isAnimated' : '';
  btn.className = ['a-button__base', size !== "normal" ? `a-button__base--${size}` : '', modeModifier, shapeModifier, isAnimated].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};