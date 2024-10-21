const exchangeRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.75,
        PKR: 285,
        USD: 1
    },
    EUR: {
        USD: 1.18,
        GBP: 0.88,
        PKR: 335,
        EUR: 1
    },
    GBP: {
        USD: 1.33,
        EUR: 1.14,
        PKR: 380,
        GBP: 1
    },
    PKR: {
        USD: 0.0035,
        EUR: 0.00299,
        GBP: 0.00263,
        PKR: 1
    }
};

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (amount === "" || amount <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid amount.";
        return;
    }

    
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
