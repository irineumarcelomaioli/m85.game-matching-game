import ArrowDown from '../../components/ArrowDown';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';
import './style.css';

const ScoreBoard = () => {
  return /*html*/`
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName("Player 01")}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerScore(1)}
      ${PlayerName("Player 02")}
    </header>
  `;
}

export default ScoreBoard;