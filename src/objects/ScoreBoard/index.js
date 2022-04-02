import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';
import './style.css';

const ScoreBoard = () => {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player 01")}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerName("Player 02")}
      ${PlayerScore()}
    </header>
  `;
}

export default ScoreBoard;