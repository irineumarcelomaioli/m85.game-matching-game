import './src/components/styles/settings/colors.css';
import './src/components/styles/generic/reset.css';
import './src/components/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);