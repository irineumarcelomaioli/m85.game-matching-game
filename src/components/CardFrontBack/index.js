import CardGame from '../CardGame';
import './style.css';

const CardFrontBack = () => {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    event.preventDefault();
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');

    $cardFrontBack.classList.toggle('-active');
  }

  return /*html*/`
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("JavaScript", "Logo JavaScript")}
      </div>
    </article>
  `;
}

export default CardFrontBack;