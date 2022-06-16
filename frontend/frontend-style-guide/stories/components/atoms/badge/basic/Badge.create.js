import "./atom.scss";

export const createBadge = ({
  index = 1,
  size = undefined,
  border = undefined,
  radius = undefined,
  outline_stroke = undefined,
  shadow = undefined,
  active = true,
}) => {
  const badgeSize = size !== "normal" ? `a-badge__base--${size}` : "";
  const badgeRadius = radius !== "none" ? `a-badge__base--${radius}` : "";
  const badgeBorder = `a-badge__base--${border}`;
  const badgeOutline =
    outline_stroke !== undefined
      ? `a-badge__base--${outline_outline_stroke}`
      : "";
  const badgeShadow = shadow !== undefined ? `a-badge__base--${shadow}` : "";
  const isActive = active ? "active" : "";

  const badge = `<div class="a-badge__base ${badgeRadius} ${badgeSize} ${badgeBorder} ${badgeOutline} ${badgeShadow} ${isActive}">${index}</div>`;

  return badge;
};
