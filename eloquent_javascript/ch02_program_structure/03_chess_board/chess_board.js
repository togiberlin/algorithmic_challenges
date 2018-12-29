const chessBoard = (width, height) => {
  const whiteTile = ' ';
  const blackTile = '#';
  let result = '';

  // Generate chess board
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width/2; w++) {
      if (h % 2 === 0) {
        result += (whiteTile + blackTile);
      } else {
        result += (blackTile + whiteTile);
      }
    }
    result += '\n';
  }

  // If chess board width is uneven, remove last element of each line
  if (width % 2 === 1) {
    result = result.split('\n').map((elem) => elem.slice(0, width)).join('\n');
  }

  console.log(result);
};

chessBoard(8, 8);
