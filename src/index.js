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
// const rates = {};
const amountInput = $('#amount-input');

$("#convert-button").submit(function (e) {
  e.preventDefault();
  const amount = parseFloat(amountInput.val());
  console.log(amount);
  
  ExchangeService.convert().then((data) => {
    if(!data.ok) {
      console.log("post error to dom")
    }
    console.log("data", data);
  }, (response) => {
    console.dir("response", response)
  });
});
