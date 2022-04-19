import numeral from "numeral";

const toDollar = function (value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("($ 0.00a)");
};

const toPercent = function (value) {
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`;
};

export { toDollar, toPercent };
