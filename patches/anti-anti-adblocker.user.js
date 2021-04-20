// ==UserScript==
// @name        Anti anti adblocker
// @match       gats.io
// @run-at      document-start
// @grant       none
// ==/UserScript==

// store reference to the original `getComputedStyle` function
const originalGetComputedStyle = window.getComputedStyle;

// replace the global function with a proxy
window.getComputedStyle = function(e) {
  // if the id of the element passed in is `detect` (id of the element used to detect adblockers), then return an object with a display property; can be set to anything really
  if (e.id === 'detect') return { display: 0 };
  
  // do what the original `getComputedStyle` would have done
  return originalGetComputedStyle.apply(null, arguments);
};
