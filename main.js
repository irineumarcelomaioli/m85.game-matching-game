import './src/components/styles/settings/colors.css';
import './src/components/styles/generic/reset.css';
import './src/components/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${PlayerName('Player 1')}
    ${PlayerName('Player 2')}
    ${BoardGame(6)}
  `
);