export default class ExchangeService {
  // static rates = [];
  static convert() {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
      //changing USD to UD makes a 404

    )
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw Error(response);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
}
