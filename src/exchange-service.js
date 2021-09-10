export default class ExchangeService {
  static convert(base, target, amount) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}/${amount}`
    )
      .then((response) => {
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
