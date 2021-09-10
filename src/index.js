import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./exchange-service";

/*
Todos
field to enter amount - form 
error handling/display
README - instructions, code styling
*/
$(document).ready(function () {
  const amountInput = $("#amount-input");

  $("#amount-form").submit(function (e) {
    e.preventDefault();
    const amount = parseFloat(amountInput.val());
    console.log(amount);

    ExchangeService.convert().then(
      (data) => {
        if (!data.ok) {
          console.log(
            `The following error was encountered when making this request: ${data.status} `
          );
        } else {
          console.log(data);
        }
        console.log("data", data);
      },
      (response) => {
        console.dir("response", response);
      }
    );
  });
});
