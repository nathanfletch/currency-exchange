import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./exchange-service";
import codes from "./codes";
/*
Todos
field to enter amount - form 
error handling/display
README - instructions, code styling
*/
$(document).ready(function () {
  const amountInput = $("#amount-input");
  const rates = {};
  console.log(codes);

  $("#amount-form").submit(function (e) {
    e.preventDefault();
    const amount = parseFloat(amountInput.val()) || 1;
    console.log(amount);

    ExchangeService.convert().then(
      (data) => {
        rates[data.base_code] = data.conversion_rates;
        $("#converted-display").text(`${amount} USD is equivalent to ${(amount * rates["USD"]["KRW"]).toFixed(2)} ${codes["KRW"]}`);
      },
      (response) => {
        console.dir(
          "response",
          `The following error was encountered when making this request: ${response.status} `
        );
      }
    );
  });
});
