const CardSwapPlayer = ($arrowDown) => {
  const currentPlayer = $arrowDown.getAttribute('data-currentPlayer');
  $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 :1 );
}

export default CardSwapPlayer;
