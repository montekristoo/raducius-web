import React from "react";

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export default function currencyFormat(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
