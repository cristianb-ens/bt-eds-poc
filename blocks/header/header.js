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

  const menuData = {
    Personal: [
      { heading: 'Credite', links: ['Creditul de nevoi personale', 'Creditul pentru casă', 'Creditul Overdraft'] },
      { heading: 'Carduri', links: ['Cardurile de credit Star', 'Cardurile de credit BT Flying Blue', 'Carduri de debit', 'Cardul de masă'] },
      { heading: 'Conturi și operațiuni', links: ['Cont online', 'Abonamente de cont curent', 'Oferta pentru tineri', 'Actualizare date', 'Schimb valutar'] },
      { heading: 'Economii și investiții', links: ['Economii', 'Fonduri de investiții', 'Pensii facultative', 'Investiții la bursă'] },
      { heading: 'Asigurări', links: ['Asigurare de călătorie', 'Asigurare RCA', 'Asigurări de locuință', 'Asigurări de viață', 'Asigurări atașate creditelor'] },
      { heading: 'Premium Banking', links: ['Premium Club', 'Private Banking'] },
      { heading: 'BT Pay Kiddo', links: [] },
      { heading: 'Diaspora', links: [] },
    ],
    Business: [
      { heading: 'Credite', links: ['Credit pentru investiții', 'Credit capital de lucru', 'Linie de credit'] },
      { heading: 'Conturi', links: ['Cont curent business', 'Operațiuni de încasări', 'Cash management'] },
      { heading: 'POS și eCommerce', links: ['Terminal POS', 'Plăți online', 'BT Pay Business'] },
    ],
    'Despre BT': [
      { heading: 'Despre noi', links: ['Istoria BT', 'Management', 'Responsabilitate socială'] },
      { heading: 'Cariere', links: ['Locuri de muncă', 'Programe de internship'] },
      { heading: 'Știri', links: ['Comunicate de presă', 'Blog BT'] },
    ],
    'Relații Investitori': [
      { heading: 'Financiar', links: ['Rezultate financiare', 'Rapoarte anuale', 'Acțiunea BT'] },
      { heading: 'Guvernanță', links: ['Guvernanță corporativă', 'AGA'] },
    ],
  };

  const links = document.createElement('div');
  links.className = 'nav-links';

  Object.entries(menuData).forEach(([label, columns]) => {
    const item = document.createElement('div');
    item.className = 'nav-link-item';

    const trigger = document.createElement('a');
    trigger.href = '/';
    trigger.className = 'nav-link-trigger';
    trigger.textContent = label;

    const dropdown = document.createElement('div');
    dropdown.className = 'nav-dropdown';

    const dropdownInner = document.createElement('div');
    dropdownInner.className = 'nav-dropdown-inner';

    const grid = document.createElement('div');
    grid.className = 'nav-dropdown-grid';

    columns.forEach((col) => {
      const column = document.createElement('div');
      column.className = 'nav-dropdown-col';

      const heading = document.createElement('h3');
      heading.className = 'nav-dropdown-heading';
      heading.textContent = col.heading;
      column.append(heading);

      col.links.forEach((linkText) => {
        const link = document.createElement('a');
        link.href = '/';
        link.className = 'nav-dropdown-link';
        link.textContent = linkText;
        column.append(link);
      });

      grid.append(column);
    });

    const banner = document.createElement('div');
    banner.className = 'nav-dropdown-banner';
    banner.innerHTML = '<img src="https://modul.bancatransilvania.ro/secure-storage/BTRL/Menu/acord-mk-meniu-pf.webp" alt="" loading="lazy">';

    dropdownInner.append(grid);
    dropdownInner.append(banner);
    dropdown.append(dropdownInner);
    item.append(trigger);
    item.append(dropdown);
    links.append(item);
  });

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
