function calculateMonthlyRate(amount, annualRate, years) {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return Math.round(amount / months);
  const rate = (amount * monthlyRate * ((1 + monthlyRate) ** months))
    / (((1 + monthlyRate) ** months) - 1);
  return Math.round(rate);
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function decorate(block) {
  block.textContent = '';

  const config = {
    min: 5000,
    max: 250000,
    step: 100,
    defaultAmount: 5000,
    rate: 8.5,
    years: 5,
    currency: 'LEI',
  };

  const wrapper = document.createElement('div');
  wrapper.className = 'loan-calc-widget';

  wrapper.innerHTML = `
    <h2 class="loan-calc-title">Calculator Credit Nevoi Personale</h2>
    <div class="loan-calc-body">
      <div class="loan-calc-input-section">
        <label class="loan-calc-label">Care este suma pe care vrei să o împrumuți?</label>
        <div class="loan-calc-currency">
          <button class="loan-calc-currency-btn active" data-currency="LEI">LEI</button>
          <button class="loan-calc-currency-btn" data-currency="EURO">EURO</button>
        </div>
        <div class="loan-calc-amount-display">
          <span class="loan-calc-amount-value">${formatNumber(config.defaultAmount)}</span>
          <span class="loan-calc-amount-unit">LEI</span>
        </div>
        <input type="range" class="loan-calc-range" min="${config.min}" max="${config.max}" step="${config.step}" value="${config.defaultAmount}">
        <div class="loan-calc-range-labels">
          <span>${formatNumber(config.min)} LEI</span>
          <span>${formatNumber(config.max)} LEI</span>
        </div>
      </div>
      <div class="loan-calc-result-section">
        <div class="loan-calc-result-label">Rata lunară</div>
        <div class="loan-calc-result-value">
          <span class="loan-calc-result-number">${calculateMonthlyRate(config.defaultAmount, config.rate, config.years)}</span>
          <span class="loan-calc-result-unit">LEI</span>
        </div>
      </div>
      <div class="loan-calc-actions">
        <a href="/credite/credite-de-nevoi/aplica-pentru-credit" class="loan-calc-cta-primary">Aplică pentru credit</a>
      </div>
      <div class="loan-calc-disclaimer">
        <p>E bine să știi că oferta finală este personalizată, cuprinsă între 5,99% și 18,50% și ține cont de câteva elemente precum: încasarea venitului în cont BT, adăugarea poliței de asigurare de viață și șomaj, refinanțare externă, istoricul relației cu banca, comportamentul de plată pentru ratele în derulare, ș. a.</p>
        <p>Valoarea ratei lunare depinde și de parametri aleși pentru calcul (perioada de returnare, valoarea dobânzii variabile). Aceștia pot fi consultați și modificați din setările simulatorului.</p>
      </div>
    </div>
  `;

  const rangeInput = wrapper.querySelector('.loan-calc-range');
  const amountValue = wrapper.querySelector('.loan-calc-amount-value');
  const resultNumber = wrapper.querySelector('.loan-calc-result-number');
  const currencyBtns = wrapper.querySelectorAll('.loan-calc-currency-btn');

  rangeInput.addEventListener('input', () => {
    const amount = parseInt(rangeInput.value, 10);
    amountValue.textContent = formatNumber(amount);
    resultNumber.textContent = calculateMonthlyRate(amount, config.rate, config.years);
    const pct = ((amount - config.min) / (config.max - config.min)) * 100;
    rangeInput.style.setProperty('--progress', `${pct}%`);
  });

  currencyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currencyBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const unit = btn.dataset.currency;
      wrapper.querySelector('.loan-calc-amount-unit').textContent = unit;
      wrapper.querySelector('.loan-calc-result-unit').textContent = unit;
    });
  });

  block.append(wrapper);
}
