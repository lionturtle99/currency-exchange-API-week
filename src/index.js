import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';


function displayExchangeData(response) {
  $('#rate').html(`The exchange rate is: ${response.conversion_rate}`);
  $('#converted').html(`${response.conversion_result}`);
}

function displayErrors(error) {
  $('.showErrors').html(`${error}`)
}

$(document).ready(function() {
  $("#").on('click', () => {
    const baseCurrency = $('#base-currency :checked').val();
    const exchangeCurrency = $('#select-currency :checked').val();
    const amount = $('#baseAmount').val();

    ExchangeService.makeExchange(baseCurrency, exchangeCurrency, amount)
    .then(function(response) {
      if (response instanceof Error) {
        throw new Error(`There was an unexpected error: ${response.message}`)
      }
      displayExchangeData(response);
    });

  });
});
