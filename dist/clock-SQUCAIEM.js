// lib/icons/clock.ts
var IconClock = `<svg id="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><circle cx="36" cy="36" r="22.5" style="fill: var(--icon-fill, rgba(0, 0, 0, 0)); opacity: var(--icon-fill-opacity, 1);"/><line x1="36" y1="18" x2="36" y2="36" style="fill: none; transform: rotate(calc((360 / 60 * var(--seconds-handle)) * 1deg)); stroke-linecap: round; stroke-linejoin: round; stroke-width:var(--icon-stroke-width-s, calc(var(--icon-stroke-width, 5) * 0.5));"/><circle cx="36" cy="36" r="22.5" style="fill: none;  stroke-miterlimit: 10; stroke-width:var(--icon-stroke-width-m, calc(var(--icon-stroke-width, 5) * 1));"/><line x1="36" y1="22.5" x2="36" y2="36" style="fill: none; transform: rotate(calc((360 / 60 * var(--minutes-handle)) * 1deg)); stroke-linecap: round; stroke-linejoin: round; stroke-width:var(--icon-stroke-width-m, calc(var(--icon-stroke-width, 5) * 1));"/><line x1="36" y1="27" x2="36" y2="36" style="fill: none; transform: rotate(calc((360 / 12 * var(--hours-handle)) * 1deg)); stroke-linecap: round; stroke-linejoin: round; stroke-width:var(--icon-stroke-width-m, calc(var(--icon-stroke-width, 5) * 1));"/></svg>`;
var clock_default = IconClock;
export {
  IconClock,
  clock_default as default
};
