const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });
});
const content = document.getElementById('simplified-content');
const initialContent = content.innerHTML;
const simplify = document.getElementById('simplify-button');
const reset = document.getElementById('reset-button');
simplify.addEventListener('click', () => {
  content.innerHTML = '<h3>Your brain can adapt.</h3><p>Your brain can build new connections throughout your life. New experiences and learning help it change.</p>';
  content.classList.add('dyslexic');
  simplify.hidden = true;
  reset.hidden = false;
  reset.focus();
});
reset.addEventListener('click', () => {
  content.innerHTML = initialContent;
  content.classList.remove('dyslexic');
  reset.hidden = true;
  simplify.hidden = false;
  simplify.focus();
});
const shieldButton = document.getElementById('shield-button');
shieldButton.addEventListener('click', () => {
  const active = shieldButton.getAttribute('aria-pressed') !== 'true';
  shieldButton.setAttribute('aria-pressed', String(active));
  document.querySelector('.shield-source').classList.toggle('warning-active', active);
  document.getElementById('shield-preview-heading').textContent = active ? 'Paused. Possible flashing detected.' : 'Video preview';
  document.getElementById('shield-preview-copy').textContent = active ? 'A warning gives you a moment to decide whether to continue or skip the video.' : 'This is a static illustration. No flashing content is shown.';
  shieldButton.textContent = active ? 'Reset preview ↺' : 'Preview a warning →';
});
