import CardGame from '../CardGame';
import './style.css';

const CardFrontBack = (cardId, icon, altIcon, cardIdentify) => {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    event.preventDefault();
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');
  }

  return /*html*/`
    <article id="${cardId}" class="card-front-back" onClick="cardFrontBack.handleClick(event)"  data-card-identify='${cardIdentify}'>
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `;
}

export default CardFrontBack;