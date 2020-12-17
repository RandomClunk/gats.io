$(document).on('keydown', e => {
  if(c4 && !j46 && [ // if spawned (c4) in the game and not chatting (!j46)
    68,
    83,
    65,
    87,
    82,
    32,
    19,
    45,
    37,
    38,
    39,
    40,
    78,
    13
  ].includes(e.keyCode)) if(Math.random() > 0.75) e.stopImmediatePropagation(); // prevent keypress
});
