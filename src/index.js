import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./exchange-service";

$("#convert-button").click(function () {
  ExchangeService.convert().then((data) => {
    console.log("data", data);
  }, (response) => {
    console.log("response", response)
  });
});
