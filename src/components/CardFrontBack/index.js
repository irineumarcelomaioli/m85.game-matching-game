import CardGame from '../CardGame';

const CardFrontBack = () => {
  return /*html*/`
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("JavaScript", "Logo JavaScript")}
    </article>
  `;
}

export default CardFrontBack;