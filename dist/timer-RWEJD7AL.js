// lib/icons/timer.ts
var IconTimer = `<svg id="timer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><circle cx="36" cy="36" r="22.5" style="fill: var(--icon-fill, rgba(0, 0, 0, 0)); opacity: var(--icon-fill-opacity, 1);"/><circle cx="36" cy="36" r="22.5" style="fill: none;  stroke-miterlimit: 10; stroke-width:var(--icon-stroke-width-m, calc(var(--icon-stroke-width, 5) * 1));"/><line x1="36" y1="22.5" x2="36" y2="36" style="fill: none; transform: rotate(calc((360 / 60 * var(--handle)) * 1deg)); stroke-linecap: round; stroke-linejoin: round; stroke-width:var(--icon-stroke-width-m, calc(var(--icon-stroke-width, 5) * 1));"/></svg>`;
var timer_default = IconTimer;
export {
  IconTimer,
  timer_default as default
};
