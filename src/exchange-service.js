export default class ExchangeService {
  static convert(base, target, amount) {
    //`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}/${amount}`
    )
      .then((response) => {
        console.log(response)
        if (!response.ok) {

          throw Error(response.status);
        }
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  }
}
