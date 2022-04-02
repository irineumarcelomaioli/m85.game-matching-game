import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';
import './style.css';

const ScoreBoard = () => {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player 01")}
      ${VsPlayer()}
      ${PlayerName("Player 02")}
    </header>
  `;
}

export default ScoreBoard;