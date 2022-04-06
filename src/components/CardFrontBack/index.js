import CardGame from '../CardGame';
import './style.css';

const CardFrontBack = (icon, altIcon, cardId = 0) => {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    event.preventDefault();
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');
  }

  return /*html*/`
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)"  data-card-id='${cardId}'>
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame(icon, altIcon, cardId)}
      </div>
    </article>
  `;
}

export default CardFrontBack;