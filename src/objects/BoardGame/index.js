import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data';

const BoardGame = () => {
  const flipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove('-active'));
  }
  const swapPlayer = ($arrowDown) => {
    const currentPlayer = $arrowDown.getAttribute('data-currentPlayer');
    $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 :1 );
  }
  window.boardGame = {};
  window.boardGame.handleClick = () => { 
    const $boardGame = document.querySelector('.board-game');
    const $arrowDown = document.querySelector('.arrow-down');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
    if ($cardsActive.length === 2) {
      setTimeout(() => {
        flipAndHideCards($cardsActive);
        swapPlayer($arrowDown);
      }, 600);
    } else {
      console.log("uma carta");
      console.log($cardsActive);
    }
  }
  const htmlCardsList = cards.map((card) => CardFrontBack(card.cardId, card.icon, card.altIcon, card.identify));
  const $htmlCards = htmlCardsList.join('');

  return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
      ${$htmlCards}
    </section>    
  `;
} 

export default BoardGame; 
