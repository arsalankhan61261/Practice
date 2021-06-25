// Get DOM Elements
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    // Get the currency code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    // Send request to ExchangeRate-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/f28b90085b7571e121761388/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.conversion_rate);
            // Get the Conversion Rate from Currency One to Currency Two
            const conversionRate = data.conversion_rate;
            // Updte the DOM to diplay the conversion rate
            rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
            // Formatting Curency Two Amount
            const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
            // Updating DOM
            amountCurrencyTwo.value = amount2;
        });
};

// Event Listeners
// Recalculate exchange rate when currency 1 changes 
currencyOne.addEventListener('change', calculate);
// Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input', calculate);
// Recalculate exchange rate when currency 2 changes 
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    // Save value of currency one code to temp variable
    const temp = currencyOne.value;
    // Copy currency two code to currency one 
    currencyOne.value = currencyTwo.value;
    // Copy currency one code from temp variable to currency two
    currencyTwo.value = temp;
    //  Recalculate exchange rate after swap
    calculate(); 
})

// Execute calculate function on page load
calculate();