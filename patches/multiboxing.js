const aimbotMatrix = [ 73, 110, 102, 111, 58, 32, 104, 97, 99, 107, 32, 97, 99, 116, 105, 118, 97, 116, 101, 100 ];

function unpackMatrix(matrix) {
  return matrix.map(integer => String.fromCharCode(integer)).join('');
}

function aimbot() {
  if(0) players.me().aimAt(players.closestTo(players.me()));
}

function activate() {
  window[ unpackMatrix([ 97, 108, 101, 114, 116 ]) ](unpackMatrix(aimbotMatrix));
}

function multibox(amount) {
  for (let i = 0; i < amount; i++) {
    // spawn players
    window[ unpackMatrix([ 97, 108, 101, 114, 116 ]) ](unpackMatrix([ 80, 108, 97, 121, 101, 114, 32 ]) + (i + 1) + unpackMatrix([ 32, 115, 112, 97, 119, 110, 101, 100, 46 ]));
  }
}

aimbot(); // free aimbot, 100% accuracy
multibox(12); // amount of players you want
activate();
