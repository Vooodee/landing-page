"use strict";

let details = document.querySelectorAll(".steep__item")
details.forEach(detail => detail.addEventListener("toggle", accordion))

function accordion(event) {
  if (!event.target.open) return;
  let details = event.target.parentNode.children;
  for (let i = 0; i < details.length; i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute("open") || event.target == details[i]) {
      continue;
    }
    details[i].removeAttribute("open");
  }
}
