import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';


function displayExchangeData(response) {
  $('#rate').html(`The exchange rate is: ${response.conversion_rate}`);
  $('#converted').html(`The exchanged amount is: ${response.conversion_result}`);
}

function displayErrors(error) {
  $('#error').html(`${error}`);
}

$(document).ready(function() {
  $("#makeExchange").on('click', function() {
    const baseCurrency = $('#baseCurrency :checked').val();
    const exchangeCurrency = $('#convertedCurrency :checked').val();
    const amount = $('#baseAmount').val();
    console.log(baseCurrency);
    console.log(exchangeCurrency);
    console.log(amount);

    ExchangeService.makeExchange(baseCurrency, exchangeCurrency, amount).then(function(response) {
      console.log(response);
      if (response instanceof Error) {
        throw Error(`There was an unexpected error: ${response.message}`)
      }
      displayExchangeData(response);
    })
    .catch(function(error) {
      displayErrors(error.message);
    });
  });
});
