function chessBoard(width, height) {
  let whiteTile = " ";
  let blackTile = "#";
  let result = "";

  // Generate chess board
  for (h = 0; h < height; h++) {
    for (w = 0; w < width/2; w++) {
      if (h % 2 === 0) {
        result += (whiteTile + blackTile);
      } else {
        result += (blackTile + whiteTile);
      }
    }
    result += "\n";
  }

  // If chess board width is uneven, remove last element of each line
  if (width % 2 === 1) {
    result = result.split("\n").map(elem => elem.slice(0, width)).join("\n");
  }

  console.log(result);
}

chessBoard(8, 8);
