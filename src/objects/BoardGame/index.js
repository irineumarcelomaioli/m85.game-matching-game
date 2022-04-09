import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data';
import CardFlipAndHide from '../../utils/CardFlipAndHide';
import CardSwapPlayer from '../../utils/CardSwapPlayer';

const BoardGame = () => {
  window.boardGame = {};
  window.boardGame.handleClick = () => { 
    const $boardGame = document.querySelector('.board-game');
    const $arrowDown = document.querySelector('.arrow-down');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
    if ($cardsActive.length === 2) {
      setTimeout(() => {
        CardFlipAndHide($cardsActive);
        CardSwapPlayer($arrowDown);
      }, 600);
    } else {
      // console.log("uma carta");
      // console.log($cardsActive);
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
