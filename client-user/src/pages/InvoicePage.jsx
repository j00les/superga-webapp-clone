import { useSelector } from "react-redux";

export const InvoicePage = () => {
  //redirect ke external website
  const { product } = useSelector(state => state);
  const { invoice_url } = product.payResponse;

  window.location.replace(invoice_url);
};
