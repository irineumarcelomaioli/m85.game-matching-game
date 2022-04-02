import './style.css';

const CardGame = (icon = "card-front", alt = "Logo m85.game") => {
  return /*html*/`
    <article class="card-game">
      <img src='images/${icon}.png' alt='${alt}'>
    </article>
  `;
}

export default CardGame; 