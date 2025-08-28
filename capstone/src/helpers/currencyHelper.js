import currencies from "../currencies.json";

// Fetching Currency flag Url

export const getFlagUrl = (countryCode) =>
  `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

// Special Multi-country currencies
export const getCurrencyFlag = (currencyCode) => {
  switch (currencyCode) {
    case "EUR":
      return getFlagUrl("eu");

    case "USD":
      return getFlagUrl("us");

    case "GBP":
      return getFlagUrl("gb");

    case "XAF":
    case "XOF":
    case "XCD":
    case "XPF":
      return getFlagUrl("fr"); //Francs

    default:
      return getFlagUrl(currencyCode.substring(0, 2));
  }
};

//Getting full currency data
export const getCurrencyData = (currencyCode) => {
  const base = currencies[currencyCode];
  if (!base) return null;

  return {
    currencycode: currencyCode,
    ...base,
    flag: getCurrencyFlag(currencyCode),
  };
};

// Listing all supported currencies for API
export const listAllCurrencies = () =>
  Object.keys(currencies).map((currencycode) => getCurrencyData(currencycode));

export default currencies;
