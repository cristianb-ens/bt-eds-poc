import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  block.textContent = '';

  const nav = document.createElement('nav');
  nav.id = 'nav';

  const brand = document.createElement('div');
  brand.className = 'nav-brand';
  brand.innerHTML = `<a href="/">
    <svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 0L0 10.5v21L18.5 42 37 31.5v-21L18.5 0z" fill="#FFCC00"/>
      <path d="M18.5 3L3 12v18l15.5 9L34 30V12L18.5 3z" fill="#fff"/>
      <path d="M18.5 6L6 13.5v15L18.5 36 31 28.5v-15L18.5 6z" fill="#ED1C24"/>
      <path d="M10 16h6c2.2 0 4 1 4 3s-1 2.5-2 3c1.5.5 2.5 1.5 2.5 3.5 0 2.5-2 3.5-4.5 3.5H10V16zm3 5h2.5c1 0 1.5-.5 1.5-1.3 0-.8-.5-1.2-1.5-1.2H13v2.5zm0 5.5h3c1 0 1.7-.5 1.7-1.5s-.7-1.5-1.7-1.5h-3v3z" fill="#fff"/>
      <path d="M22 16h10v2.5h-3.5V29H25V18.5h-3V16z" fill="#fff"/>
    </svg>
  </a>`;

  const actions = document.createElement('div');
  actions.className = 'nav-actions';

  const cta = document.createElement('a');
  cta.href = '/credite/credite-de-nevoi/aplica-pentru-credit';
  cta.className = 'nav-cta';
  cta.textContent = 'Deschide cont';
  actions.append(cta);

  const hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.setAttribute('aria-label', 'Menu');
  hamburger.innerHTML = '<svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect width="16" height="2" rx="1" fill="currentColor"/><rect y="5" width="16" height="2" rx="1" fill="currentColor"/><rect y="10" width="16" height="2" rx="1" fill="currentColor"/></svg>';
  actions.append(hamburger);

  nav.append(brand);
  nav.append(actions);

  const wrapper = document.createElement('div');
  wrapper.className = 'nav-wrapper';
  wrapper.append(nav);
  block.append(wrapper);
}
