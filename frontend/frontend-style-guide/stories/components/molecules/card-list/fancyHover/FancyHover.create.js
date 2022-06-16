import "./molecule.scss";

export const createFancyHoverCardList = ({}) => {
  const cardList = `
    <ul class="m-fancyHoverCardList__list">
      <li class="m-fancyHoverCardList__listItem">
        <img src="https://via.placeholder.com/150/00b894/00b894" alt="">
        <p>CSS Fancy</p>
      </li>
      <li class="m-fancyHoverCardList__listItem">
        <img src="https://via.placeholder.com/150/00cec9/00cec9" alt="">
        <p>:hover</p>
      </li>
      <li class="m-fancyHoverCardList__listItem">
        <img src="https://via.placeholder.com/150/0984e3/0984e3" alt="">
        <p>effect</p>
      </li>
    </ul>
  `;

  return cardList;
};
