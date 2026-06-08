export default async function decorate(block) {
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

  const links = document.createElement('div');
  links.className = 'nav-links';
  links.innerHTML = `
    <a href="/">Personal</a>
    <a href="/">Business</a>
    <a href="/">Despre BT</a>
    <a href="/">Relații Investitori</a>
  `;

  const actions = document.createElement('div');
  actions.className = 'nav-actions';
  actions.innerHTML = `
    <button class="nav-icon" aria-label="Telefon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
    </button>
    <button class="nav-icon" aria-label="Cont">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </button>
    <button class="nav-icon" aria-label="Caută">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    </button>
    <a href="/" class="nav-btn-secondary">Internet Banking</a>
    <a href="/credite/credite-de-nevoi/aplica-pentru-credit" class="nav-btn-primary">Deschide cont</a>
  `;

  nav.append(brand);
  nav.append(links);
  nav.append(actions);

  const wrapper = document.createElement('div');
  wrapper.className = 'nav-wrapper';
  wrapper.append(nav);
  block.append(wrapper);
}
