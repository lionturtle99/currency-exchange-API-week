export default class ExchangeService {  
  static makeExchange(base, exchange, amount){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${exchange}/${amount}`)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    });
  }
}