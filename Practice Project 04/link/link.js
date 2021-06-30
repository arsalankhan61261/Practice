// Get DOM Elements
const currencyAll = document.getElementById('currency-all');
const reset = document.getElementById('reset');
const rate = document.getElementById('rate');

// Fetch exchange rates and update the DOM
function calculate() {
    // Get the currency code
    const currencyAllCode = currencyAll.value;
    
    // Send Request to ExchangeRate-API for conversion rates for currency all
    fetch(`https://v6.exchangerate-api.com/v6/f28b90085b7571e121761388/latest/${currencyAllCode}`)
        .then(res => res.json())
        .then(data => { console.log(data.conversion_rates);
            // Get the conversion rates from currency all
            const conversionRates = data.conversion_rates;
            // Update tha DOM to display the Converion Rate
            rate.innerText = conversionRates;
        });
};

// Event Listeners
// Event on change a country in currency all
currencyAll.addEventListener('change', calculate);

// Execute calculate function on page load
calculate();