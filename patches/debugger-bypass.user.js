// ==UserScript==
// @name         gats.io debugger bypass
// @match        gats.io
// @run-at      document-start
// @grant       none
// ==/UserScript==

// store reference to original `setInterval` function
const originalSetInterval = window.setInterval;

// replace the global function with a proxy
window.setInterval = function(f) {
  // if the function passed to `setInterval` contains a call to the function that calls the debugger statement, return
  if (String(f).includes('_0x548a04();')) return;
  
  // do what the original `setInterval` would have done
  return originalSetInterval.apply(null, arguments);
};
