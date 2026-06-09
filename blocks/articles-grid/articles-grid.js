export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  block.textContent = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'articles-grid-inner';

  const titleText = rows[0]?.textContent.trim() || 'Descoperă creditul de nevoi personale';
  const h2 = document.createElement('h2');
  h2.className = 'articles-grid-title';
  h2.textContent = titleText;
  wrapper.append(h2);

  const grid = document.createElement('div');
  grid.className = 'articles-grid-list';

  rows.slice(1).forEach((row) => {
    const cols = [...row.querySelectorAll(':scope > div')];
    const date = cols[0]?.textContent.trim();
    const title = cols[1]?.textContent.trim();
    const link = row.querySelector('a');
    const imageUrl = cols[2]?.textContent.trim() || '';

    if (!date || !title) return;

    const card = document.createElement('a');
    card.className = 'articles-grid-card';
    card.href = link?.href || '/';

    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = title;
      img.loading = 'lazy';
      card.append(img);
    }

    const dateEl = document.createElement('span');
    dateEl.className = 'articles-grid-date';
    dateEl.textContent = date;
    card.append(dateEl);

    const titleEl = document.createElement('span');
    titleEl.className = 'articles-grid-card-title';
    titleEl.textContent = title;
    card.append(titleEl);

    grid.append(card);
  });

  wrapper.append(grid);
  block.append(wrapper);
}
