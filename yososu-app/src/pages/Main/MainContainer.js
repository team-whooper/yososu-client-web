import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [radioValue, setRadioValue] = useState("stock");
  useEffect(() => {
    searchLocation("");
  }, []);

  const searchLocation = useCallback((searchTerm) => {
    console.log("stock");
    yososuApi
      .getInventoriesInStockOrder(searchTerm)
      .then((value) => {
        setResult(value.data.data);
      })
      .catch(function () {
        console.log(`관리자에게 문의해주세요..`);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <MainPresenter
      result={result}
      isLoading={isLoading}
      searchLocation={searchLocation}
      setRadioValue={setRadioValue}
    />
  );
};

export default MainContainer;
