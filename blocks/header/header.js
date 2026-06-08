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
  brand.innerHTML = '<a href="/"><img src="https://www.bancatransilvania.ro/assets/themes/bancatransilvania/partials/vendor/logos/bt-symbol-color.svg" alt="Banca Transilvania" width="37" height="42"></a>';

  const actions = document.createElement('div');
  actions.className = 'nav-actions';

  if (fragment) {
    const toolsSection = fragment.querySelector(':scope > div:last-child');
    const ctaLink = toolsSection?.querySelector('a') || fragment.querySelector('a[href*="aplica"], a[href*="deschide"]');
    if (ctaLink) {
      const cta = document.createElement('a');
      cta.href = ctaLink.href;
      cta.className = 'nav-cta';
      cta.textContent = ctaLink.textContent.trim();
      actions.append(cta);
    }
  }

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
