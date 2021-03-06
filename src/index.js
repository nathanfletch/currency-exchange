import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./exchange-service";
import codes from "./codes";

$(document).ready(function () {
  const amountInput = $("#amount-input");
  const display = $("#converted-display");

  (function populateSelect() {
    const optionsHtml = Object.keys(codes)
      .map((code) => {
        return `<option value ="${code}">${codes[code]} (${code})</option>`;
      })
      .join("");
    $("#currency-select").append(optionsHtml);
  })();

  function displayConversion(tarCurrency, amt) {
    display.text(`Equals ${amt} ${tarCurrency}`);
  }

  $("#amount-form").submit(function (e) {
    e.preventDefault();
    const amount = parseFloat(amountInput.val()) || 1;
    const inputCurrency = "USD";
    const targetCurrency =
      $("#target-input").val() || $("#currency-select").val();

    ExchangeService.convert(inputCurrency, targetCurrency, amount).then((response) => {
      if (!response.result) {
        display.text(
          `The following error was encountered when making this request: ${response}. Please confirm that you have entered the currency code correctly, or select from the menu.`
        );
      } else {
        displayConversion(response.conversion_result, response.target_code);
      }
    });
  });
});
