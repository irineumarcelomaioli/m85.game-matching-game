const PlayerScore = (points = 0) => { 

  return /*html*/ `
    <ol data-points="${points}">
      <li>Um</li>
      <li>dois</li>
      <li>três</li>
    </ol>
  `;
}

export default PlayerScore;