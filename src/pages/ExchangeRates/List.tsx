import _ from "lodash";

const ExchangeRatesList = (rates: any, search: string) =>
  _.map(_.filter(_.keys(rates), item => item.includes(search.toLocaleUpperCase())), (item) => (
    <div className="rate">
      <div className="rate-currency">{item}</div>
      <div className="rate-result">{rates[item]}</div>
    </div>
  ));

export default ExchangeRatesList;
