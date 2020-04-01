import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Spinner from "react-native-loading-spinner-overlay";

export const Loader = () => {
  const { promiseInProgress } = usePromiseTracker();

  return <Spinner visible={promiseInProgress} />;
};
