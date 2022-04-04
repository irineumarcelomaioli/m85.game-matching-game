import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data';

const BoardGame = (amountCards) => {
  // const $htmlContent = $htmlCardFrontBack.repeat(amountCards);
  
  
  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, cards.altIcon));
  const $htmlCards = htmlCardsList.join('');

  return /*html*/`
    <section class="board-game">
      ${$htmlCards}
    </section>    
  `;
} 

export default BoardGame; 
