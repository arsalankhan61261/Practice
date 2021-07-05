// Get DOM Elements
const currencyAll = document.getElementById('currency-all');
const amountAll = document.getElementById('amount-all');
const exchangeRatesAll = document.getElementById('exchange-rates');

// Function to format currency amount
function format2Currency(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&, ');
}

// Fetch exchange rates and update the DOM
function calculate() {
    const currencyAllCode = currencyAll.value;
    
    // Send request to ExchangeRate-API for conversion rates for the base currency
async function getExchangeRates() {
    
    // wait for the result from API
    const res = await fetch(`https://v6.exchangerate-api.com/v6/ff5446d657010e0e02233999/latest/${currencyAllCode}`);
    // Wait for response to convert into JSON
    const data = await res.json();

    console.log(data);

    // Get the conversion rates data
    const rate = data.conversion_rates;
    const keys = Object.keys(rate);

    //clear previous data 
    exchangeRatesAll.innerHTML = `<h4><span>Currency</span> <span>Amount</span></h4>`;
    // 
    keys.forEach((key) => {
        // Create a new div element for each currency exchange rate
        const Div = document.createElement('div');
        // Apply the user class to the new div
        Div.classList.add('data');
        // Add inner HTML to the Div
        Div.innerHTML = `${key} <span>${format2Currency((parseFloat(rate[key])) * amountAll.value)}</span>`
        // Add the new div into the DOM
        exchangeRatesAll.appendChild(Div);
    });
}

const opt = document.querySelector('.currency-name');

console.log(opt.value);


//Event Listener
amountAll.addEventListener("input", getExchangeRates);
console.log(getExchangeRates());

};

// };

// Event Listeners
// Event on change a country in currency all
currencyAll.addEventListener('change', calculate);

// Execute calculate function on page load
calculate();