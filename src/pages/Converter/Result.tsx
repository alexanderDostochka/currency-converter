interface ConvertResultInterface {
  from?: string;
  to?: string;
  ratesFrom?: string;
  ratesTo?: string;
  dateForm?: string
}

const ConvertResult = ({
  from = "",
  to = "",
  ratesFrom = "",
  ratesTo = "",
  dateFrom = ""
}) => (
  <div className="convert-result">
    <div className="result-from">{`${from} =`}</div>
    <div className="result-to">{`${to}`}</div>
    <div className="result-rates">
      <div>{ratesFrom}</div>
      <div>{ratesTo}</div>
    </div>
    <div className="result-date">
        {dateFrom}
    </div>
  </div>
);

export default ConvertResult;
