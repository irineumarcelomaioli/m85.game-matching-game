const CardFlipAndHide = ($cardsActive) => {
  $cardsActive.forEach((card) => card.classList.remove('-active'));
}

export default CardFlipAndHide;