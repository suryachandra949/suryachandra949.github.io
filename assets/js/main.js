// Optional enhancement: the site and native abstract toggles work without JS.
// Include expanded abstracts when printing, then restore the reader's choices.
let previouslyOpen = [];
window.addEventListener('beforeprint', () => {
  previouslyOpen = [...document.querySelectorAll('details')].filter(item => item.open);
  document.querySelectorAll('details').forEach(item => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  document.querySelectorAll('details').forEach(item => { item.open = previouslyOpen.includes(item); });
});
