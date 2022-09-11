import _ from "lodash";
import Box from "../../components/Box";
import translate from "../../constants/translate";
import PageLayout from "../../layouts/Page";
import { selectCurrency } from "../../redux/features/currencySlice";
import { useAppSelector } from "../../redux/hooks";
import FormConverter from "./Form";
import Result from "./Result";

const Converter = () => {
  const currentCurrency = useAppSelector(selectCurrency);

  return (
    <PageLayout name="home-page">
      <div className="container">
        <div className="application-name">
          <h1>{translate.home.title}</h1>
          <p>{translate.home.description}</p>
        </div>
        <div className="converter">
          <Box>
            <FormConverter {...{ currentCurrency }} />
            {!_.isEmpty(currentCurrency.result) &&
              _.isEmpty(currentCurrency.loader) && (
                <Result
                  from={`${_.get(
                    currentCurrency.result,
                    "query.amount"
                  )} ${_.get(currentCurrency.from, "label")}`}
                  to={`${_.get(currentCurrency.result, "result")} ${_.get(
                    currentCurrency.to,
                    "label"
                  )}`}
                  ratesFrom={`1 ${_.get(
                    currentCurrency.from,
                    "value"
                  )} = ${_.get(currentCurrency.result, "info.rate", 0)} ${_.get(
                    currentCurrency.to,
                    "value"
                  )}`}
                  dateFrom={`${_.get(currentCurrency.result, "date")}`}
                />
              )}
          </Box>
        </div>
      </div>
    </PageLayout>
  );
};

export default Converter;
