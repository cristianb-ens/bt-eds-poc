export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  block.textContent = '';

  const title = rows[0]?.textContent.trim();
  const description = rows[1]?.textContent.trim();
  const ctaRow = rows[2];
  const imageUrl = rows[3]?.querySelector('img')?.src || rows[3]?.textContent.trim();

  const wrapper = document.createElement('div');
  wrapper.className = 'promo-split-layout';

  const content = document.createElement('div');
  content.className = 'promo-split-content';

  if (title) {
    const h2 = document.createElement('h2');
    h2.className = 'promo-split-title';
    h2.textContent = title;
    content.append(h2);
  }

  if (description) {
    const p = document.createElement('p');
    p.className = 'promo-split-text';
    p.textContent = description;
    content.append(p);
  }

  if (ctaRow) {
    const link = ctaRow.querySelector('a');
    if (link) {
      const cta = link.cloneNode(true);
      cta.className = 'promo-split-cta';
      content.append(cta);
    }
  }

  const figure = document.createElement('div');
  figure.className = 'promo-split-figure';
  if (imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title || '';
    img.loading = 'lazy';
    figure.append(img);
  }

  wrapper.append(content);
  wrapper.append(figure);
  block.append(wrapper);
}
