import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@shopify/polaris/build/esm/styles.css";
import { Link } from "./components/Link/Link";

ReactDOM.render(
  <AppProvider i18n={enTranslations} linkComponent={Link}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
