// For the test version, I used constants for translation instead of i18n.

const translation = {
  routes: {
    home: "Converter",
    exchangeRates: "Exchange rates"
  },
  home: {
    title: "Currency converter",
    description:
      "Converter from one currency to another and a page with current exchange rates",
    inputs: {
      lables: {
        amount: "Amount",
        from: "From",
        to: "To"
      }
    }
  },
  exchangeRates: {
    title: "Exchange rates for - ",
    description: "Page with the latest exchange rates",
    inputs: {
      search: "To search enter UAH for example"
    }
  }
};

export default translation;
