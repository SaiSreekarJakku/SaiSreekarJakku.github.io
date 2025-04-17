const billInput = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercent = document.getElementById('tipPercent');
const tipAmount = document.getElementById('tipAmount');
const totalWithTip = document.getElementById('totalWithTip');
const totalWithTax = document.getElementById('totalWithTax');
const currencySelect = document.getElementById('currency');
const convertedTotal = document.getElementById('convertedTotal');

// conversion rates for extra credit
const conversionRates = {
  inr: 83.1,  // 1 USD = 83.1 INR
  eur: 0.93   // 1 USD = 0.93 EUR
};

function calculate() {
  const bill = parseFloat(billInput.value);
  const tipValue = parseInt(tipSlider.value);

  if (isNaN(bill) || bill < 0) {
    tipPercent.value = '';
    tipAmount.value = '';
    totalWithTip.value = '';
    totalWithTax.value = '';
    convertedTotal.textContent = '';
    return;
  }

  tipPercent.value = `${tipValue}%`;

  const tip = bill * (tipValue / 100);
  const total = bill + tip;
  const taxTotal = bill > 0 ? bill * 1.11 : 0;

  tipAmount.value = tip.toFixed(2);
  totalWithTip.value = total.toFixed(2);
  totalWithTax.value = taxTotal.toFixed(2);

  // Handle extra credit (currency conversion)
  if (currencySelect.value && !isNaN(total)) {
    const rate = conversionRates[currencySelect.value];
    const converted = total * rate;
    const symbol = currencySelect.value === 'inr' ? '₹' : '€';
    convertedTotal.textContent = `Converted Total: ${symbol}${converted.toFixed(2)}`;
  } else {
    convertedTotal.textContent = '';
  }
}

// Run calculation on any input
document.getElementById('tip-form').addEventListener('input', () => {
  if (billInput.value === '0') {
    tipPercent.value = '';
    tipAmount.value = '';
    totalWithTip.value = '';
    totalWithTax.value = '';
    convertedTotal.textContent = '';
    return;
  }

  calculate();
});
