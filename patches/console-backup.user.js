// ==UserScript==
// @name         gats.io console backup
// @match        gats.io
// @run-at      document-start
// @grant       none
// ==/UserScript==

const original = console.log;

window.addEventListener('load', () => {
  window.console.log = original;
});
